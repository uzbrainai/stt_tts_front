import {AIAnimation} from "./animations";
import {useState} from "react";

export const TtsPage = () => {
    const [isProcessing, setIsProcessing] = useState(false);
    const handleProcess = () => {
        setIsProcessing(true);
        setTimeout(() => setIsProcessing(false), 3000);
    };

    return (
        <div className="bg-white p-4 md:p-8 rounded-xl shadow-lg">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6"><h2
                className="text-2xl font-bold text-gray-800 mb-2 sm:mb-0">Matnni Nutqqa O'girish (TTS)</h2><span
                className="bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full">Narx: 1000 belgi / 200 so'm</span>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="flex flex-col">
                    <label htmlFor="tts-text" className="block text-sm font-medium text-gray-700">Matn kiriting:</label>
                    <textarea id="tts-text" rows={8} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                              placeholder="Ovozga aylantirish uchun matnni shu yerga yozing..."></textarea>
                    <div className="mt-4 grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="tts-lang"
                                   className="block text-sm font-medium text-gray-700">Til</label>
                            <select id="tts-lang"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                                <option>O'zbekcha</option>
                                <option>Ruscha</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="tts-voice"
                                   className="block text-sm font-medium text-gray-700">Ovoz</label>
                            <select
                                id="tts-voice" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                                <option>Dilfuza (Ayol)</option>
                                <option>Botir (Erkak)</option>
                            </select>
                        </div>
                    </div>
                    <button onClick={handleProcess}
                            className="mt-6 self-start bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700">Sintez
                        qilish
                    </button>
                </div>
                <div className="flex flex-col justify-center items-center bg-gray-50 p-6 rounded-lg">
                    {isProcessing ? <AIAnimation type="tts"/> :
                        <div><h3 className="text-lg font-medium text-gray-800">Hosil bo'lgan audio</h3>
                            <div className="w-full mt-4 p-4 bg-white rounded-lg shadow">
                                <audio controls className="w-full">
                                    <source src="" type="audio/mpeg"></source>
                                </audio>
                            </div>
                            <button
                                className="mt-4 bg-green-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-green-700 flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"
                                     fill="currentColor">
                                    <path fillRule="evenodd"
                                          d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                          clipRule="evenodd"/>
                                </svg>
                                <span>Yuklab olish</span></button>
                        </div>}
                </div>
            </div>
        </div>
    );
};