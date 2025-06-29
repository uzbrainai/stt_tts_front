import React, {useState} from 'react';
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

const {Dragger} = AntUpload;

const VoiceDetectionBot = () => {
    const [file, setFile] = useState<File | null>(null);
    const [analysisResult, setAnalysisResult] = useState<any | null>(null);
    const [isAnalyzing, setIsAnalyzing] = useState(false);

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

            {/*<div className="grid md:grid-cols-2 gap-6">*/}
            {/*  <Card>*/}
            {/*    <CardHeader>*/}
            {/*      <CardTitle>Recent Analyses</CardTitle>*/}
            {/*    </CardHeader>*/}
            {/*    <CardContent>*/}
            {/*      <div className="space-y-3">*/}
            {/*        <div className="flex justify-between items-center p-2 border rounded">*/}
            {/*          <span className="text-sm">phone_call.mp3</span>*/}
            {/*          <span className="text-xs text-green-500">Human Voice</span>*/}
            {/*        </div>*/}
            {/*        <div className="flex justify-between items-center p-2 border rounded">*/}
            {/*          <span className="text-sm">ai_assistant.wav</span>*/}
            {/*          <span className="text-xs text-red-500">AI-Generated</span>*/}
            {/*        </div>*/}
            {/*        <div className="flex justify-between items-center p-2 border rounded">*/}
            {/*          <span className="text-sm">interview.m4a</span>*/}
            {/*          <span className="text-xs text-green-500">Human Voice</span>*/}
            {/*        </div>*/}
            {/*      </div>*/}
            {/*    </CardContent>*/}
            {/*  </Card>*/}

            {/*  <Card>*/}
            {/*    <CardHeader>*/}
            {/*      <CardTitle>Detection Statistics</CardTitle>*/}
            {/*    </CardHeader>*/}
            {/*    <CardContent>*/}
            {/*      <div className="space-y-4">*/}
            {/*        <div className="flex justify-between">*/}
            {/*          <span>Total Analyses</span>*/}
            {/*          <span className="font-bold">456</span>*/}
            {/*        </div>*/}
            {/*        <div className="flex justify-between">*/}
            {/*          <span>Human Voice</span>*/}
            {/*          <span className="font-bold text-green-500">298</span>*/}
            {/*        </div>*/}
            {/*        <div className="flex justify-between">*/}
            {/*          <span>AI-Generated</span>*/}
            {/*          <span className="font-bold text-red-500">158</span>*/}
            {/*        </div>*/}
            {/*        <div className="flex justify-between">*/}
            {/*          <span>Avg. Confidence</span>*/}
            {/*          <span className="font-bold text-purple-600">87%</span>*/}
            {/*        </div>*/}
            {/*      </div>*/}
            {/*    </CardContent>*/}
            {/*  </Card>*/}
            {/*</div>*/}
        </div>
    );
};

export default VoiceDetectionBot;
