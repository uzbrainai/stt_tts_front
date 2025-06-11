import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bot, History, FileText } from 'lucide-react';
import WaveAnimation from '@/components/WaveAnimation';

const WatermarkingBot = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [mode, setMode] = useState('embed');

  const history = [
    { id: 1, action: 'Watermark Embedded', file: 'podcast_episode_1.mp3', date: '2024-01-15', status: 'success' },
    { id: 2, action: 'Watermark Detected', file: 'music_track.wav', date: '2024-01-14', status: 'success' },
    { id: 3, action: 'Watermark Embedded', file: 'audiobook_chapter.mp3', date: '2024-01-13', status: 'success' },
  ];

  const handleProcess = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Bot className="h-8 w-8" />
            <WaveAnimation className="w-8 h-8" color="text-purple-500" />
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
              <WaveAnimation className="w-5 h-5" color="text-purple-500" />
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
            
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <FileText className="h-12 w-12 mx-auto text-gray-400 mb-4" />
              <p className="text-sm text-gray-600">
                Upload audio file to {mode === 'embed' ? 'embed watermark' : 'detect watermark'}
              </p>
              <Button variant="outline" className="mt-2">
                Browse Files
              </Button>
            </div>

            {mode === 'embed' && (
              <div className="space-y-2">
                <label className="text-sm font-medium">Watermark Message</label>
                <input 
                  type="text" 
                  placeholder="Enter watermark message..."
                  className="w-full p-2 border rounded"
                />
              </div>
            )}

            <Button 
              onClick={handleProcess} 
              disabled={isProcessing}
              className="w-full"
            >
              {isProcessing ? (
                <div className="flex items-center gap-2">
                  <WaveAnimation className="w-4 h-4" color="text-white" />
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
              <History className="h-4 w-4" />
              Watermarking History
            </CardTitle>
            <CardDescription>Your recent watermarking operations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {history.map((item) => (
                <div key={item.id} className="border rounded-lg p-3">
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-sm font-medium">{item.action}</p>
                    <span className="text-xs text-muted-foreground">{item.date}</span>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">{item.file}</p>
                  <div className="flex items-center gap-2">
                    <div className={`h-2 w-2 rounded-full ${item.status === 'success' ? 'bg-green-500' : 'bg-red-500'}`} />
                    <span className="text-xs text-muted-foreground capitalize">{item.status}</span>
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
