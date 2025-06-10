import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bot, History, FileText } from 'lucide-react';
import WaveAnimation from '@/components/WaveAnimation';

const STTBot = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState('');

  const history = [
    { id: 1, input: 'Audio file: meeting_recording.mp3', output: 'Hello everyone, welcome to today\'s meeting...', date: '2024-01-15', duration: '2m 30s' },
    { id: 2, input: 'Audio file: voice_note.wav', output: 'Remember to pick up groceries after work...', date: '2024-01-14', duration: '45s' },
    { id: 3, input: 'Audio file: interview.mp3', output: 'Thank you for taking the time to speak with me...', date: '2024-01-13', duration: '15m 20s' },
  ];

  const handleProcess = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setResult('Hello, this is a sample transcription of your audio file. The speech-to-text conversion has been completed successfully.');
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Bot className="h-8 w-8" />
            <WaveAnimation className="w-8 h-8" color="text-blue-500" />
          </div>
          Speech-to-Text Bot
        </h1>
        <p className="text-muted-foreground">
          Convert your audio files to text with high accuracy
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <WaveAnimation className="w-5 h-5" color="text-blue-500" />
              Try STT Conversion
            </CardTitle>
            <CardDescription>Upload an audio file to convert to text</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <FileText className="h-12 w-12 mx-auto text-gray-400 mb-4" />
              <p className="text-sm text-gray-600">
                Drag and drop your audio file here, or click to browse
              </p>
              <Button variant="outline" className="mt-2">
                Browse Files
              </Button>
            </div>
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
                'Convert to Text'
              )}
            </Button>
            {result && (
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <h4 className="font-medium mb-2">Transcription Result:</h4>
                <p className="text-sm">{result}</p>
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
            <CardDescription>Your recent STT conversions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {history.map((item) => (
                <div key={item.id} className="border rounded-lg p-3">
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-sm font-medium">{item.input}</p>
                    <span className="text-xs text-muted-foreground">{item.date}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">
                    Duration: {item.duration}
                  </p>
                  <p className="text-sm text-gray-700">{item.output}</p>
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
