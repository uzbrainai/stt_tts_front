import React, {useEffect, useState} from 'react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import {Upload, Mic, Brain, AlertTriangle, CheckCircle} from 'lucide-react';
import {Upload as AntUpload, message} from 'antd';
import type {UploadProps} from 'antd';
import instance from "@/config/axios_config";
import {FileUpload} from "@/components/ui/fileUpload";
import {useAuthStore} from "@/store/authStore";

const {Dragger} = AntUpload;

const VoiceDetectionBot = () => {
    const {refreshAuth, setRefreshAuth} = useAuthStore()
    const [file, setFile] = useState<File | null>(null);
    const [analysisResult, setAnalysisResult] = useState<any | null>(null);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [data, setData] = useState<any>();
    const [refreshHistory, setRefreshHistory] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                let resp = await instance({
                    method: "get",
                    url: '/ai-response',
                    params: {
                        botId: 2
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

    const submitData = async () => {
        setIsAnalyzing(true);
        try {
            if (file) {
                let data = new FormData();
                data.append("file", file);
                data.append("botId", "2");
                let resp = await instance({
                    method: 'post',
                    url: "/use-bot",
                    data
                });
                if (resp?.data?.status === 1) {
                    setAnalysisResult(resp?.data?.data);
                    setRefreshHistory(!refreshHistory);
                    setRefreshAuth(!refreshAuth)
                } else {
                    message.error(resp?.data?.message)
                }
            } else {
                if (!file) {
                    message.error("File is required!");
                }
            }
            setIsAnalyzing(false)
        } catch (e: any) {
            console.log(e);
            if (e?.response?.status === 422) {
                message?.error(e?.response?.data?.message)
            } else
                message.error("Error!");
            setIsAnalyzing(false)
        }
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4">
                <div
                    className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
                    <span className="text-2xl">🎤</span>
                </div>
                <div>
                    <h1 className="text-3xl font-bold">AI Voice Detection</h1>
                    <p className="text-muted-foreground">Detect whether voice recordings are AI-generated or human</p>
                </div>
            </div>

            <Tabs defaultValue="upload" className="space-y-6">
                {/*<TabsList className="grid w-full grid-cols-2">*/}
                {/*  <TabsTrigger value="upload">Upload Audio</TabsTrigger>*/}
                {/*  <TabsTrigger value="url">From URL</TabsTrigger>*/}
                {/*</TabsList>*/}

                <TabsContent value="upload" className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Upload className="h-5 w-5"/>
                                Upload Voice Recording
                            </CardTitle>
                            <CardDescription>
                                Upload an audio file to analyze for AI-generated voice content
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <FileUpload setFile={setFile}
                                        text={`Supports MP3, WAV, FLAC, M4A, OGG (Max: 50MB)`}/>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="url" className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Analyze from URL</CardTitle>
                            <CardDescription>
                                Enter a URL to an audio file for analysis
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="url">Audio URL</Label>
                                <Input
                                    id="url"
                                    placeholder="https://example.com/voice.mp3"
                                    type="url"
                                />
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Brain className="h-5 w-5"/>
                        Voice Analysis
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Button
                        onClick={submitData}
                        disabled={isAnalyzing}
                        className="w-full bg-purple-500 hover:bg-purple-600"
                    >
                        {isAnalyzing ? 'Analyzing Voice...' : 'Start Voice Detection Analysis'}
                    </Button>

                    {analysisResult && (
                        <div className="space-y-4 p-4 border rounded-lg">
                            <div className="flex items-center gap-2">
                                {analysisResult?.data?.data?.label !== 'Real' ? (
                                    <AlertTriangle className="h-5 w-5 text-red-500"/>
                                ) : (
                                    <CheckCircle className="h-5 w-5 text-green-500"/>
                                )}
                                <h3 className="font-semibold">Detection Result</h3>
                            </div>

                            <div className="grid grid-cols-3 gap-4">
                                <div>
                                    <p className="text-sm text-muted-foreground">Classification</p>
                                    <p className={`font-bold ${analysisResult?.data?.data?.label !== 'Real' ? 'text-red-500' : 'text-green-500'}`}>
                                        {analysisResult?.data?.data?.confidence}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Confidence</p>
                                    <p className="font-bold">{(analysisResult?.data?.data?.confidence ?? 0) * 100}%</p>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Voice Type</p>
                                    <p className="font-bold text-purple-600">{analysisResult?.data?.data?.label}</p>
                                </div>
                            </div>

                            <div className="w-full bg-muted rounded-full h-2">
                                <div
                                    className={`h-2 rounded-full ${analysisResult?.data?.data?.label !== 'Real' ? 'bg-red-500' : 'bg-green-500'}`}
                                    style={{width: `${((analysisResult?.data?.data?.confidence ?? 0) * 100)}%`}}
                                ></div>
                            </div>
                            {/*<div className="text-sm text-muted-foreground">*/}
                            {/*    <p><strong>Analysis Details:</strong></p>*/}
                            {/*    <ul className="list-disc list-inside mt-2 space-y-1">*/}
                            {/*        <li>Voice pattern analysis: Complete</li>*/}
                            {/*        <li>Prosody*/}
                            {/*            evaluation: {analysisResult === 'AI-Generated' ? 'Synthetic patterns detected' : 'Natural intonation found'}</li>*/}
                            {/*        <li>Speech naturalness: {Math.floor(Math.random() * 30) + 70}%</li>*/}
                            {/*    </ul>*/}
                            {/*</div>*/}
                        </div>
                    )}
                </CardContent>
            </Card>
            <div>
                <h4 className="text-2xl">History:</h4>
                {
                    data?.items?.map((itm:any)=>{
                        return <div className="space-y-4 p-4 border rounded-lg my-2">
                            <div className="flex items-center gap-2 justify-between">
                                <div className="flex items-center gap-2">
                                    {itm?.data?.label !== 'Real' ? (
                                        <AlertTriangle className="h-5 w-5 text-red-500"/>
                                    ) : (
                                        <CheckCircle className="h-5 w-5 text-green-500"/>
                                    )}
                                    <h3 className="font-semibold">Detection Result</h3>
                                </div>
                                <div>Date: {new Date(itm?.createdAt).toLocaleString()}</div>
                            </div>

                            <div className="grid grid-cols-3 gap-4">
                                <div>
                                    <p className="text-sm text-muted-foreground">Classification</p>
                                    <p className={`font-bold ${itm?.data?.label !== 'Real' ? 'text-red-500' : 'text-green-500'}`}>
                                        {itm?.data?.confidence}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Confidence</p>
                                    <p className="font-bold">{(itm?.data?.confidence ?? 0) * 100}%</p>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Voice Type</p>
                                    <p className="font-bold text-purple-600">{itm?.data?.label}</p>
                                </div>
                            </div>

                            <div className="w-full bg-muted rounded-full h-2">
                                <div
                                    className={`h-2 rounded-full ${itm?.data?.label !== 'Real' ? 'bg-red-500' : 'bg-green-500'}`}
                                    style={{width: `${((itm?.data?.confidence ?? 0) * 100)}%`}}
                                ></div>
                            </div>
                            <div className="text-sm text-muted-foreground">
                                <p><strong>Analysis Details:</strong></p>
                                <ul className="list-disc list-inside mt-2 space-y-1">
                                    <li>File name: {itm?.fileStore?.fileName}</li>
                                    <li>Prosody
                                        evaluation: {itm?.data?.label !== 'Real' ? 'Synthetic patterns detected' : 'Natural intonation found'}</li>
                                    <li>Speech naturalness: {(itm?.data?.confidence ?? 0) * 100}%</li>
                                    <li>Content type: {itm?.fileStore?.contentType}</li>
                                    <li>Price: {itm?.aiBot?.oneUsePrice} so'm</li>
                                </ul>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default VoiceDetectionBot;
