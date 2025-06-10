
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bot, History, FileText } from 'lucide-react';

const TTSBot = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [text, setText] = useState('');
  const [audioResult, setAudioResult] = useState('');

  const history = [
    { id: 1, input: 'Hello everyone, welcome to today\'s meeting...', voice: 'Female (Sarah)', date: '2024-01-15', duration: '2m 30s' },
    { id: 2, input: 'Thank you for your attention to this matter...', voice: 'Male (David)', date: '2024-01-14', duration: '45s' },
    { id: 3, input: 'Please confirm your appointment for tomorrow...', voice: 'Female (Emma)', date: '2024-01-13', duration: '15s' },
  ];

  const handleProcess = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setAudioResult('audio_output_' + Date.now() + '.mp3');
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <Bot className="h-8 w-8" />
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
              className="w-full h-32 p-3 border rounded-lg resize-none"
            />
            <div className="grid grid-cols-2 gap-2">
              <select className="p-2 border rounded">
                <option>Female (Sarah)</option>
                <option>Male (David)</option>
                <option>Female (Emma)</option>
                <option>Male (James)</option>
              </select>
              <select className="p-2 border rounded">
                <option>Speed: Normal</option>
                <option>Speed: Slow</option>
                <option>Speed: Fast</option>
              </select>
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
                <h4 className="font-medium mb-2">Audio Generated:</h4>
                <p className="text-sm mb-2">{audioResult}</p>
                <Button variant="outline" size="sm">
                  Download Audio
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <History className="h-4 w-4" />
              Conversion History
            </CardTitle>
            <CardDescription>Your recent TTS conversions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {history.map((item) => (
                <div key={item.id} className="border rounded-lg p-3">
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-sm font-medium">Voice: {item.voice}</p>
                    <span className="text-xs text-muted-foreground">{item.date}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">
                    Duration: {item.duration}
                  </p>
                  <p className="text-sm text-gray-700">{item.input}</p>
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
