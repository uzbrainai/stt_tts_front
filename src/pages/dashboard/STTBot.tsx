import React, {useEffect, useRef, useState} from 'react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {Bot, History, FileText} from 'lucide-react';
import WaveAnimation from '@/components/WaveAnimation';
import {message, Switch} from "antd";
import {FileUpload} from "@/components/ui/fileUpload";
import {VoiceRecorder} from "@/components/ui/voiceRecorder";
import instance from "@/config/axios_config";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {useAuthStore} from "@/store/authStore";

const STTBot = () => {
    const {refreshAuth, setRefreshAuth} = useAuthStore()
    const contentRef = useRef<any>()
    const [isProcessing, setIsProcessing] = useState(false);
    const [result, setResult] = useState("Natija bu yerda ko'rinadi!!!");
    const [fileType, setFileType] = useState<"file" | "record">("file");
    const [file, setFile] = useState<File | null>(null);
    const [lang, setLang] = useState("uz");
    const [data, setData] = useState<any>();
    const [refreshHistory, setRefreshHistory] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                let resp = await instance({
                    method: "get",
                    url: '/ai-response',
                    params: {
                        botId: 4
                    }
                });
                if (resp?.data?.status === 1) {
                    setData(resp?.data?.data)
                } else {
                    message.error(resp?.data.message);
                }
            } catch (e) {
                console.log(e);
                message.error("Error!");
            }
        })()
    }, [refreshHistory])

    const handleProcess = async () => {
        setIsProcessing(true);
        try {
            let data = new FormData();
            data.append("botId", "4");
            data.append("file", file);
            data.append("lang", lang);
            let reps = await instance({
                method: "post",
                url: "/use-bot",
                data
            });
            if (reps?.data?.status === 1) {
                setResult(reps?.data?.data?.data?.data?.transcription);
                setRefreshHistory(!refreshHistory);
                setRefreshAuth(!refreshAuth)
            } else {
                message.error(reps?.data?.message)
            }
            setIsProcessing(false);
        } catch (e: any) {
            if (e?.response?.status === 422) {
                message?.error(e?.response?.data?.message)
            } else
                message.error("Error!");
            setIsProcessing(false)
        }
    };

    console.log(file);

    const languageOptions = [
        {value: 'uz', label: <span>O'zbek</span>},
        {value: 'en', label: <span>English</span>}
    ];

    return (
        <div className="space-y-4 md:space-y-6 p-4 md:p-0">
            <div>
                <h1 className="text-2xl md:text-3xl font-bold flex flex-col sm:flex-row items-start sm:items-center gap-2 md:gap-4 mb-2">
                    <div className="flex items-center gap-2">
                        <Bot className="h-6 w-6 md:h-8 md:w-8"/>
                        <WaveAnimation className="w-6 h-6 md:w-8 md:h-8" color="text-blue-500"/>
                    </div>
                    <span>Speech-to-Text Bot</span>
                </h1>
                <p className="text-muted-foreground text-sm md:text-base">
                    Convert your audio files to text with high accuracy
                </p>
            </div>

            <div className="grid gap-4 md:gap-12 lg:grid-cols-1">
                <div className="w-full grid gap-4 md:gap-6 lg:grid-cols-2">
                    <Card className="w-full">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                                <WaveAnimation className="w-4 h-4 md:w-5 md:h-5" color="text-blue-500"/>
                                Try STT Conversion<Switch checked={fileType === "record"}
                                                          onChange={(e) => setFileType(e ? "record" : "file")}
                                                          checkedChildren="Record" unCheckedChildren="File"/>
                            </CardTitle>

                            <CardDescription className="text-sm flex items-center justify-between">
                                <div>
                                    {fileType === "file" ? "Upload" : "Record"} an audio
                                    file to convert to
                                    text
                                </div>
                                <div>
                                    <Select value={lang} onValueChange={(l) => setLang(l)}>
                                        <SelectTrigger className="w-[120px]">
                                            <SelectValue/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            {languageOptions.map((option) => (
                                                <SelectItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </CardDescription>
                        </CardHeader>
                        <CardContent ref={contentRef} className="space-y-4">
                            {
                                fileType === "file" ? <FileUpload setFile={setFile}/> :
                                    <VoiceRecorder setFile={setFile}/>
                            }
                            <Button
                                onClick={handleProcess}
                                disabled={isProcessing}
                                className="w-full text-sm md:text-base"
                            >
                                {isProcessing ? (
                                    <div className="flex items-center gap-2">
                                        <WaveAnimation className="w-3 h-3 md:w-4 md:h-4" color="text-white"/>
                                        Processing...
                                    </div>
                                ) : (
                                    'Convert to Text'
                                )}
                            </Button>
                        </CardContent>
                    </Card>
                    <div className="mt-0 p-0 md:p-4 bg-muted rounded-lg">
                        <h4 className="font-medium mb-2 text-sm md:text-base">Transcription Result:</h4>
                        <p style={{height: "300px"}} className="text-xs overflow-auto md:text-sm">{result}</p>
                    </div>
                </div>
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                            <History className="h-4 w-4"/>
                            Conversion History
                        </CardTitle>
                        <CardDescription className="text-sm">Your recent STT conversions</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-3 md:space-y-4">
                            {data?.items.map((item) => (
                                <div key={item.id} className="border rounded-lg p-2 md:p-3">
                                    <div
                                        className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-2">
                                        <p className="text-xs md:text-sm font-medium break-words">File
                                            name: {item?.fileStore?.fileName}</p>
                                        <span
                                            className="text-xs text-muted-foreground flex-shrink-0">{new Date(item?.updatedAt).toLocaleString()}</span>
                                    </div>
                                    <p className="text-xs text-muted-foreground mb-2">
                                        Duration: {item?.data.duration ?? 0}. Price: {item?.aiBot?.oneUsePrice} so'm
                                    </p>
                                    <p className="text-xs md:text-sm text-gray-700 break-words">{item.data?.transcription}</p>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default STTBot;
