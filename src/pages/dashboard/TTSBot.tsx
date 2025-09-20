import React, {useEffect, useState} from 'react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {Bot, History} from 'lucide-react';
import file1 from '../../assets/static_fles/audio1.wav';
import file2 from '../../assets/static_fles/audio2.wav';
import file3 from '../../assets/static_fles/audio3.wav';
import file4 from '../../assets/static_fles/audio4.wav';
import file5 from '../../assets/static_fles/audio5.wav';
import file6 from '../../assets/static_fles/audio6.wav';
import file7 from '../../assets/static_fles/audio7.wav';
import {message} from "antd";
import instance from "@/config/axios_config";
import {API_URL} from "@/config/constants";

const TTSBot = () => {
    const [isProcessing, setIsProcessing] = useState(false);
    const [text, setText] = useState('');
    const [voice, setVoice] = useState<string>("")
    const [audioResult, setAudioResult] = useState<any>();
    const [voices, setVoices] = useState<{ key: string, name: string }[]>([])
    const [data, setData] = useState<any>();
    const [refreshHistory, setRefreshHistory] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                let resp = await instance({
                    method: "get",
                    url: '/ai-response',
                    params: {
                        botId: 5
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

    useEffect(() => {
        (async () => {
            try {
                let resp = await instance({
                    method: "get",
                    url: "use-bot/voices"
                });
                if (resp?.data?.status === 1) {
                    setVoices(resp?.data?.data);
                    setVoice(resp?.data?.data?.[0]?.key)
                } else {
                    message.error(resp?.data?.message);
                }
            } catch (e: any) {
                console.log(e);
                message?.error(e?.response?.data?.message ?? "Error!");
            }
        })()
    }, [])

    const handleProcess = async () => {
        setIsProcessing(true);
        try {
            let data = new FormData();
            data.append("botId", "5");
            data.append("text", text);
            data.append("voiceKey", voice);
            let reps = await instance({
                method: "post",
                url: "/use-bot",
                data
            });
            if (reps?.data?.status === 1) {
                setAudioResult(reps?.data?.data?.data);
                setRefreshHistory(!refreshHistory);
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

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold flex items-center gap-2">
                    <Bot className="h-8 w-8"/>
                    Text-to-Speech Bot
                </h1>
                <p className="text-muted-foreground">
                    Convert your text to natural-sounding speech
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Try TTS Conversion</CardTitle>
                        <CardDescription>Enter text to convert to speech</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter the text you want to convert to speech..."
                className="w-full h-32 p-3 border rounded-lg resize-none bg-white text-black placeholder-gray-500
             dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:placeholder-gray-400"
            />
                        <div className="grid grid-cols-1 gap-2">
                            <select
                                value={voice}
                                onChange={(e) => setVoice(e?.target?.value)}
                                className="p-2 border rounded bg-white text-black dark:bg-gray-800 dark:text-white dark:border-gray-700">
                                {
                                    voices?.map((v) => <option value={v?.key}
                                                               className="dark:bg-gray-800">{v?.name}</option>)
                                }
                                {/*<option className="dark:bg-gray-800">Male (David)</option>*/}
                                {/*<option className="dark:bg-gray-800">Female (Emma)</option>*/}
                                {/*<option className="dark:bg-gray-800">Male (James)</option>*/}
                            </select>
                            {/*<select className="p-2 border rounded bg-white text-black dark:bg-gray-800 dark:text-white dark:border-gray-700">*/}
                            {/*  <option className="dark:bg-gray-800">Speed: Normal</option>*/}
                            {/*  <option className="dark:bg-gray-800">Speed: Slow</option>*/}
                            {/*  <option className="dark:bg-gray-800">Speed: Fast</option>*/}
                            {/*</select>*/}
                        </div>
                        <Button
                            onClick={handleProcess}
                            disabled={isProcessing || !text.trim()}
                            className="w-full"
                        >
                            {isProcessing ? 'Generating...' : 'Convert to Speech'}
                        </Button>
                        {audioResult && (
                            <div className="mt-4 p-4 bg-muted rounded-lg">
                                <div className="flex justify-between items-start mb-2">
                                    <p className="text-sm font-medium">Voice: {voices?.find(v => v?.key === audioResult?.data?.voiceKey)?.name}</p>
                                    <span className="text-xs text-muted-foreground">{new Date(audioResult?.createdAt).toLocaleString()}</span>
                                </div>
                                <p className="text-xs text-muted-foreground mb-2">
                                    Text: {audioResult?.data?.text}
                                </p>
                                <div className={"h-[50px]"}>
                                    <audio controls src={`${API_URL}/files/get-file-v2/${audioResult?.fileStore?.id}`} className="w-full mb-4 rounded-md"></audio>
                                </div>
                            </div>
                        )}
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <History className="h-4 w-4"/>
                            Conversion History
                        </CardTitle>
                        <CardDescription>Your recent TTS conversions</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4 h-[65vh] overflow-auto">
                            {data?.items?.map?.((item: any) => (
                                <div key={item.id} className="border rounded-lg p-3">
                                    <div className="flex justify-between items-start mb-2">
                                        <p className="text-sm font-medium">Voice: {voices?.find(v => v?.key === item?.data?.voiceKey)?.name}</p>
                                        <span className="text-xs text-muted-foreground">{new Date(item?.createdAt).toLocaleString()}</span>
                                    </div>
                                    <p className="text-xs text-muted-foreground mb-2">
                                        Text: {item?.data?.text}
                                    </p>
                                    <div className="flex mt-3">
                                        <audio onPlay={(a) => {
                                            a.preventDefault();
                                        }} controls src={`${API_URL}/files/get-file-v2/${item?.fileStore?.id}`}
                                               className="w-full mb-4 rounded-md"></audio>
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

export default TTSBot;
