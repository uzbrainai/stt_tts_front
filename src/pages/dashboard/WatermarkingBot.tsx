import React, {useEffect, useState} from 'react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {Bot, History, FileText} from 'lucide-react';
import WaveAnimation from '@/components/WaveAnimation';
import {FileUpload} from "@/components/ui/fileUpload";
import {message, Tag} from "antd";
import instance from "@/config/axios_config";
import {API_URL} from "@/config/constants";

let alphaNumericString = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
const WatermarkingBot = () => {
    const [isProcessing, setIsProcessing] = useState(false);
    const [mode, setMode] = useState('embed');
    const [file, setFile] = useState<File | null>(null);
    // const [watermarkText, setWatermarkText] = useState<string>("")
    const [data, setData] = useState<any>();
    const [keyFiles, setKeyFiles] = useState<any>();
    const [refresh, setRefresh] = useState(false);
    const [keyFileId, setKeyFileId] = useState<number | null>(null)

    const history = [
        {id: 1, action: 'Watermark Embedded', file: 'podcast_episode_1.mp3', date: '2024-01-15', status: 'success'},
        {id: 2, action: 'Watermark Detected', file: 'music_track.wav', date: '2024-01-14', status: 'success'},
        {id: 3, action: 'Watermark Embedded', file: 'audiobook_chapter.mp3', date: '2024-01-13', status: 'success'},
    ];

    useEffect(() => {
        (async () => {
            try {
                let resp = await instance({
                    method: "get",
                    url: '/ai-response',
                    params: {
                        botId: 3,
                        keyFileNotNull: 1,
                        page: 0
                    }
                });
                if (resp?.data?.status === 1) {
                    setKeyFiles(resp?.data?.data);
                    if (!keyFileId) {
                        setKeyFileId(resp?.data?.data?.items?.[0]?.keyFile?.id)
                    }
                } else {
                    message.error(resp?.data.message);
                }
            } catch (e) {
                console.log(e);
                message.error("Error!");
            }
        })()
    }, [refresh])

    useEffect(() => {
        (async () => {
            try {
                let resp = await instance({
                    method: "get",
                    url: '/ai-response',
                    params: {
                        botId: 3
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
    }, [refresh])

    const handleProcess = async () => {
        setIsProcessing(true);
        try {
            if (file) {
                let data = new FormData();
                data.append("file", file);
                data.append("mode", mode);
                data.append("botId", "3");
                data.append("keyFileId", keyFileId ? keyFileId?.toString() : "")
                let resp = await instance({
                    method: 'post',
                    url: "/use-bot",
                    data
                });
                setRefresh(!refresh)
            } else {
                if (!file) {
                    message.error("File is required!");
                }
            }
            setIsProcessing(false)
        } catch (e: any) {
            console.log(e);
            message.error("Error!");
            setIsProcessing(false)
        }
    };

    // const generateKey = () => {
    //     let sb = "";
    //
    //     for (let i = 0; i < 16; i++) {
    //
    //         let
    //             index
    //                 = (alphaNumericString.length
    //                 * Math.random());
    //
    //         sb += alphaNumericString.charAt(index);
    //     }
    //     setWatermarkText(sb);
    // }

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <Bot className="h-8 w-8"/>
                        <WaveAnimation className="w-8 h-8" color="text-purple-500"/>
                    </div>
                    Voice Watermarking Bot
                </h1>
                <p className="text-muted-foreground">
                    Protect your audio content with invisible watermarks
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <WaveAnimation className="w-5 h-5" color="text-purple-500"/>
                            Watermarking Tools
                        </CardTitle>
                        <CardDescription>Embed or detect watermarks in audio files</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex gap-2">
                            <Button
                                variant={mode === 'embed' ? 'default' : 'outline'}
                                onClick={() => setMode('embed')}
                                size="sm"
                            >
                                Embed Watermark
                            </Button>
                            <Button
                                variant={mode === 'detect' ? 'default' : 'outline'}
                                onClick={() => setMode('detect')}
                                size="sm"
                            >
                                Detect Watermark
                            </Button>
                        </div>

                        <FileUpload setFile={setFile}
                                    text={`Upload audio file to ${mode === 'embed' ? 'embed watermark' : 'detect watermark'}`}/>

                        {/*{mode === 'embed' && (*/}
                        {/*    <div className="space-y-2">*/}
                        {/*        <label className="text-sm font-medium">Watermark Message <Tag onClick={generateKey}*/}
                        {/*                                                                      className="cursor-pointer"*/}
                        {/*                                                                      color="green">Auto</Tag> 16/{16 - (watermarkText?.length ?? 0)}*/}
                        {/*        </label>*/}
                        {/*        <input*/}
                        {/*            value={watermarkText}*/}
                        {/*            onChange={(e) => {*/}
                        {/*                let value = e?.target?.value;*/}
                        {/*                if (value) {*/}
                        {/*                    if (value?.length <= 16) {*/}
                        {/*                        let s = value?.toUpperCase();*/}
                        {/*                        let split = s?.split("");*/}
                        {/*                        split = split?.filter(ss => alphaNumericString?.includes(ss));*/}
                        {/*                        setWatermarkText(split?.join(""));*/}
                        {/*                    }*/}
                        {/*                } else {*/}
                        {/*                    setWatermarkText("")*/}
                        {/*                }*/}
                        {/*            }}*/}
                        {/*            type="text"*/}
                        {/*            placeholder="Enter watermark message..."*/}
                        {/*            className="w-full p-2 border rounded"*/}
                        {/*        />*/}
                        {/*    </div>*/}
                        {/*)}*/}
                        {mode === "embed" ? "" :
                            <select onChange={(a: any) => setKeyFileId(a?.target?.value)} value={keyFileId}
                                    className="p-2 w-full border rounded bg-white text-black dark:bg-gray-800 dark:text-white dark:border-gray-700">
                                {
                                    keyFiles?.items?.map((a, b) => <option value={a?.keyFile?.id}
                                                                           className="dark:bg-gray-800">{a?.keyFile?.fileName}</option>)
                                }
                            </select>}
                        <Button
                            onClick={handleProcess}
                            disabled={isProcessing}
                            className="w-full"
                        >
                            {isProcessing ? (
                                <div className="flex items-center gap-2">
                                    <WaveAnimation className="w-4 h-4" color="text-white"/>
                                    Processing...
                                </div>
                            ) : (
                                mode === 'embed' ? 'Embed Watermark' : 'Detect Watermark'
                            )}
                        </Button>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <History className="h-4 w-4"/>
                            Watermarking History
                        </CardTitle>
                        <CardDescription>Your recent watermarking operations</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4 h-[65vh] overflow-auto">
                            {data?.items?.map((item) => (
                                <div key={item.id} className="border rounded-lg p-3">
                                    <div className="flex justify-between items-start mb-2">
                                        <p className="text-sm font-medium">Duration: {item?.data?.duration ?? 0}s</p>
                                        <span
                                            className="text-xs text-muted-foreground">{new Date(item.updatedAt)?.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between items-start mb-2">
                                        <p className="text-sm font-medium">Action: {item?.data?.mode ?? "none"}</p>
                                        {item?.data?.mode === "detect" ?
                                            <p className={`text-sm font-medium rounded p-2 ${item?.data?.match === "match" ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>Status: {item?.data?.match}</p> : ""}
                                    </div>
                                    <div className="flex justify-between">
                                        <a target={"_blank"} download="embeded_audio.vaw"
                                           href={`${API_URL}/files/get-file-v2/${item?.fileStore?.id}`}
                                           className="cursor-pointer text-sm text-gray-300 mb-2">{item?.fileStore?.fileName}</a>
                                        {item?.keyFile ? <a target={"_blank"} download="embeded_audio.vaw"
                                                            href={`${API_URL}/files/get-file-v2/${item?.keyFile?.id}`}
                                                            className="cursor-pointer text-sm text-gray-400 mb-2">Key
                                            file</a> : ""}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default WatermarkingBot;
