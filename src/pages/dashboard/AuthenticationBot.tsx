
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bot, History, User } from 'lucide-react';

const AuthenticationBot = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [mode, setMode] = useState('enroll');

  const history = [
    { id: 1, action: 'Voice Enrollment', user: 'john.doe@email.com', date: '2024-01-15', status: 'success' },
    { id: 2, action: 'Authentication Attempt', user: 'jane.smith@email.com', date: '2024-01-14', status: 'success' },
    { id: 3, action: 'Authentication Attempt', user: 'unknown', date: '2024-01-13', status: 'failed' },
  ];

  const handleProcess = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
    }, 3000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <Bot className="h-8 w-8" />
          Voice Authentication Bot
        </h1>
        <p className="text-muted-foreground">
          Secure authentication using voice biometrics
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Voice Authentication</CardTitle>
            <CardDescription>Enroll or authenticate users with voice</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Button 
                variant={mode === 'enroll' ? 'default' : 'outline'}
                onClick={() => setMode('enroll')}
                size="sm"
              >
                Enroll Voice
              </Button>
              <Button 
                variant={mode === 'authenticate' ? 'default' : 'outline'}
                onClick={() => setMode('authenticate')}
                size="sm"
              >
                Authenticate
              </Button>
            </div>

            {mode === 'enroll' && (
              <div className="space-y-2">
                <label className="text-sm font-medium">User Email</label>
                <input 
                  type="email" 
                  placeholder="user@example.com"
                  className="w-full p-2 border rounded"
                />
              </div>
            )}
            
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <User className="h-12 w-12 mx-auto text-gray-400 mb-4" />
              <p className="text-sm text-gray-600">
                {mode === 'enroll' 
                  ? 'Record voice sample for enrollment (speak for 10-15 seconds)'
                  : 'Record voice for authentication'
                }
              </p>
              <Button variant="outline" className="mt-2">
                Start Recording
              </Button>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Passphrase</label>
              <input 
                type="text" 
                placeholder="Please say: 'My voice is my passport'"
                className="w-full p-2 border rounded"
                readOnly
              />
            </div>

            <Button 
              onClick={handleProcess} 
              disabled={isProcessing}
              className="w-full"
            >
              {isProcessing ? 'Processing...' : (mode === 'enroll' ? 'Enroll Voice' : 'Authenticate')}
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <History className="h-4 w-4" />
              Authentication History
            </CardTitle>
            <CardDescription>Recent authentication attempts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {history.map((item) => (
                <div key={item.id} className="border rounded-lg p-3">
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-sm font-medium">{item.action}</p>
                    <span className="text-xs text-muted-foreground">{item.date}</span>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">User: {item.user}</p>
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

export default AuthenticationBot;
