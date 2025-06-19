import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Upload, Music, Brain, AlertTriangle, CheckCircle } from 'lucide-react';
import { Upload as AntUpload, message } from 'antd';
import type { UploadProps } from 'antd';

const { Dragger } = AntUpload;

const MusicDetectionBot = () => {
  const [analysisResult, setAnalysisResult] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [confidence, setConfidence] = useState<number | null>(null);
  const [genre, setGenre] = useState<string | null>(null);

  const uploadProps: UploadProps = {
    name: 'file',
    multiple: false,
    accept: 'audio/*',
    beforeUpload: () => {
      return false; // Prevent auto upload
    },
    onChange(info) {
      const { status } = info.file;
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    // Simulate analysis
    setTimeout(() => {
      const isAI = Math.random() > 0.4;
      const confidenceScore = Math.floor(Math.random() * 20) + 80;
      const genres = ['Electronic', 'Pop', 'Rock', 'Classical', 'Jazz', 'Hip-Hop'];
      const detectedGenre = genres[Math.floor(Math.random() * genres.length)];
      
      setAnalysisResult(isAI ? 'AI-Generated' : 'Human Composed');
      setConfidence(confidenceScore);
      setGenre(detectedGenre);
      setIsAnalyzing(false);
    }, 3000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 flex items-center justify-center">
          <span className="text-2xl">🎵</span>
        </div>
        <div>
          <h1 className="text-3xl font-bold">AI Music Detection</h1>
          <p className="text-muted-foreground">Detect whether music tracks are AI-generated or human composed</p>
        </div>
      </div>

      <Tabs defaultValue="upload" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="upload">Upload Music</TabsTrigger>
          <TabsTrigger value="url">From URL</TabsTrigger>
        </TabsList>

        <TabsContent value="upload" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                Upload Music File
              </CardTitle>
              <CardDescription>
                Upload a music file to analyze for AI-generated content
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Dragger {...uploadProps} className="!bg-background !border-dashed !border-muted-foreground/25">
                <p className="ant-upload-drag-icon">
                  <Music className="h-12 w-12 mx-auto text-muted-foreground" />
                </p>
                <p className="ant-upload-text text-muted-foreground">
                  Click or drag music file to this area to upload
                </p>
                <p className="ant-upload-hint text-muted-foreground">
                  Supports MP3, WAV, FLAC, AAC, OGG (Max: 100MB)
                </p>
              </Dragger>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="url" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Analyze from URL</CardTitle>
              <CardDescription>
                Enter a URL to a music file for analysis
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="url">Music URL</Label>
                <Input
                  id="url"
                  placeholder="https://example.com/song.mp3"
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
            <Brain className="h-5 w-5" />
            Music Analysis
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button 
            onClick={handleAnalyze} 
            disabled={isAnalyzing}
            className="w-full bg-indigo-500 hover:bg-indigo-600"
          >
            {isAnalyzing ? 'Analyzing Music...' : 'Start Music Detection Analysis'}
          </Button>

          {analysisResult && (
            <div className="space-y-4 p-4 border rounded-lg">
              <div className="flex items-center gap-2">
                {analysisResult === 'AI-Generated' ? (
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                ) : (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                )}
                <h3 className="font-semibold">Detection Result</h3>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Classification</p>
                  <p className={`font-bold ${analysisResult === 'AI-Generated' ? 'text-red-500' : 'text-green-500'}`}>
                    {analysisResult}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Confidence</p>
                  <p className="font-bold">{confidence}%</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Genre</p>
                  <p className="font-bold text-indigo-600">{genre}</p>
                </div>
              </div>

              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${analysisResult === 'AI-Generated' ? 'bg-red-500' : 'bg-green-500'}`}
                  style={{ width: `${confidence}%` }}
                ></div>
              </div>

              <div className="text-sm text-muted-foreground">
                <p><strong>Analysis Details:</strong></p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Composition pattern analysis: Complete</li>
                  <li>Harmonic structure evaluation: {analysisResult === 'AI-Generated' ? 'Algorithmic patterns detected' : 'Natural progression found'}</li>
                  <li>Rhythm complexity: {Math.floor(Math.random() * 40) + 60}%</li>
                </ul>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Analyses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-2 border rounded">
                <span className="text-sm">electronic_track.mp3</span>
                <span className="text-xs text-red-500">AI-Generated</span>
              </div>
              <div className="flex justify-between items-center p-2 border rounded">
                <span className="text-sm">piano_composition.wav</span>
                <span className="text-xs text-green-500">Human Composed</span>
              </div>
              <div className="flex justify-between items-center p-2 border rounded">
                <span className="text-sm">jazz_improvisation.flac</span>
                <span className="text-xs text-green-500">Human Composed</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Detection Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Total Analyses</span>
                <span className="font-bold">892</span>
              </div>
              <div className="flex justify-between">
                <span>Human Composed</span>
                <span className="font-bold text-green-500">534</span>
              </div>
              <div className="flex justify-between">
                <span>AI-Generated</span>
                <span className="font-bold text-red-500">358</span>
              </div>
              <div className="flex justify-between">
                <span>Top Genre</span>
                <span className="font-bold text-indigo-600">Electronic</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MusicDetectionBot;
