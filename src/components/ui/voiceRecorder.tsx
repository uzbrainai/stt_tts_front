import React, {useState, useRef, FC} from 'react';
import {HiOutlineMicrophone} from "react-icons/hi";
import recordGif from '@/assets/record.gif';
import {FaDownload, FaRegPauseCircle} from "react-icons/fa";

export const VoiceRecorder: FC<{setFile: (file: File) => void }> = ({setFile}) => {
    const [isRecording, setIsRecording] = useState(false);
    const [audioURL, setAudioURL] = useState('');
    const [permissionGranted, setPermissionGranted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const mediaRecorderRef = useRef(null);
    const audioChunksRef = useRef([]);
    const streamRef = useRef(null);
    const startRecording = async () => {
        setErrorMessage('');
        setAudioURL('');

        try {
            const stream = await navigator.mediaDevices.getUserMedia({audio: true});
            streamRef.current = stream;
            setPermissionGranted(true);

            mediaRecorderRef.current = new MediaRecorder(stream);
            audioChunksRef.current = [];

            mediaRecorderRef.current.ondataavailable = (event) => {
                audioChunksRef.current.push(event.data);
            };

            mediaRecorderRef.current.onstop = () => {
                const audioBlob = new Blob(audioChunksRef.current, {type: 'audio/wav'});
                setFile(new File([audioBlob], 'record.wav', {type: audioBlob.type}));
                const url = URL.createObjectURL(audioBlob);
                setAudioURL(url);

                if (streamRef.current) {
                    streamRef.current.getTracks().forEach(track => track.stop());
                }
            };

            mediaRecorderRef.current.start();
            setIsRecording(true);

        } catch (err) {
            console.error("Mikrofonga kirishda xato yuz berdi:", err);
            if (err.name === "NotAllowedError" || err.name === "PermissionDeniedError") {
                setErrorMessage("Mikrofonga kirishga ruxsat berilmadi. Iltimos, brauzeringiz sozlamalarida ruxsat bering.");
            } else if (err.name === "NotFoundError") {
                setErrorMessage("Mikrofon topilmadi. Qurilmangizda mikrofon ulanganligiga ishonch hosil qiling.");
            } else {
                setErrorMessage(`Ovoz yozishda kutilmagan xato yuz berdi: ${err.message}`);
            }
            setPermissionGranted(false);
            setIsRecording(false);
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current && isRecording) {
            mediaRecorderRef.current.stop();
            setIsRecording(false);
        }
    };

    const downloadAudio = () => {
        if (audioURL) {
            const a = document.createElement('a');
            a.href = audioURL;
            a.download = 'yozilgan_ovoz.wav';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    };

    return (
        <div className="flex justify-center w-full">
            <div className="bg-white p-8 rounded-lg text-center">
                {errorMessage && (
                    <p className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative mb-4">
                        {errorMessage}
                    </p>
                )}
                <div className="flex justify-center space-x-4 mb-6">

                    <div
                        className={`p-4 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105 bg-blue-500 hover:bg-blue-600 shadow-md`}>
                        {isRecording ?
                            <span className="cursor-pointer" onClick={stopRecording} style={{position: "relative"}}>
                                <img style={{objectFit: "cover"}} className="p-0 m-0" width={105}
                                     src={recordGif} alt="record"/>
                                <span style={{position: "absolute", top: 39, left: -12}}>
                                    <FaRegPauseCircle size={25} color={"red"}/>
                                </span>
                            </span> :
                            <HiOutlineMicrophone className="cursor-pointer" onClick={startRecording}
                                                 size={105}/>}
                    </div>
                    {/*<button*/}
                    {/*    onClick={stopRecording}*/}
                    {/*    disabled={!isRecording}*/}
                    {/*    className={`px-6 py-3 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105 ${*/}
                    {/*        !isRecording ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600 shadow-md'*/}
                    {/*    }`}*/}
                    {/*>*/}
                    {/*    Yozishni to'xtatish*/}
                    {/*</button>*/}
                </div>
                {
                    <div style={{width: "450px"}}
                         className="mt-8 p-4 flex justify-center bg-gray-50 rounded-lg border border-gray-200">
                        <div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-700">Yozilgan ovoz:</h3>
                            <div className="flex -justify-center" style={{width: "250px"}}>
                                <audio controls src={audioURL} className="w-full mb-4 rounded-md"></audio>
                                <FaDownload onClick={downloadAudio}
                                            className="rounded-full text-white font-semibold"/>
                            </div>
                        </div>
                    </div>
                }
                {!permissionGranted && !isRecording && !errorMessage && (
                    <p className="text-gray-600 mt-4 text-sm">
                        Ovoz yozishni boshlash uchun mikrofonga kirishga ruxsat berishingiz kerak.
                    </p>
                )}
            </div>
        </div>
    );
};
