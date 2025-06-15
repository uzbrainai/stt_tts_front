import React, {useState} from 'react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {Key, FileText, History} from 'lucide-react';

const DeveloperAPI = () => {
    const [apiKey, setApiKey] = useState('sk_test_1234567890abcdef...');
    const [newKeyGenerated, setNewKeyGenerated] = useState(false);

    const generateNewKey = () => {
        const newKey = 'sk_test_' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        setApiKey(newKey);
        setNewKeyGenerated(true);
        setTimeout(() => setNewKeyGenerated(false), 3000);
    };

    const apiEndpoints = [
        {
            method: 'POST',
            endpoint: '/api/v1/stt/convert',
            description: 'Convert speech to text',
            example: `curl -X POST https://api.voiceai.com/v1/stt/convert \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -F "audio=@audio.mp3"`
        },
        {
            method: 'POST',
            endpoint: '/api/v1/tts/synthesize',
            description: 'Convert text to speech',
            example: `curl -X POST https://api.voiceai.com/v1/tts/synthesize \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"text":"Hello world","voice":"sarah"}'`
        },
        {
            method: 'POST',
            endpoint: '/api/v1/watermark/embed',
            description: 'Embed watermark in audio',
            example: `curl -X POST https://api.voiceai.com/v1/watermark/embed \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -F "audio=@audio.mp3" \\
  -F "message=copyright2024"`
        },
        {
            method: 'POST',
            endpoint: '/api/v1/auth/enroll',
            description: 'Enroll voice for authentication',
            example: `curl -X POST https://api.voiceai.com/v1/auth/enroll \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -F "audio=@voice_sample.wav" \\
  -F "user_id=user123"`
        }
    ];

    const usage = [
        {date: '2024-01-15', endpoint: 'STT Convert', calls: 245, success: 243},
        {date: '2024-01-14', endpoint: 'TTS Synthesize', calls: 189, success: 189},
        {date: '2024-01-13', endpoint: 'Voice Auth', calls: 67, success: 65},
        {date: '2024-01-12', endpoint: 'Watermarking', calls: 23, success: 23},
    ];

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold flex items-center gap-2">
                    <Key className="h-8 w-8"/>
                    Developer API
                </h1>
                <p className="text-muted-foreground">
                    Integrate VoiceAI services into your applications
                </p>
            </div>

            <div className="grid gap-6">
                <Card>
                    <CardHeader>
                        {/*<CardTitle>API Key Management</CardTitle>*/}
                        {/*<CardDescription>Generate and manage your API keys</CardDescription>*/}
                    </CardHeader>
                    <CardContent className="space-y-4">
                {/*        <div className="flex items-center gap-2">*/}
                {/*            <div className="flex-1 font-mono text-sm bg-muted p-2 rounded border">*/}
                {/*                {apiKey}*/}
                {/*            </div>*/}
                {/*            <Button variant="outline" size="sm">*/}
                {/*                Copy*/}
                {/*            </Button>*/}
                {/*        </div>*/}
                {/*        <div className="flex gap-2">*/}
                {/*            <Button onClick={generateNewKey} variant="outline">*/}
                {/*                Generate New Key*/}
                {/*            </Button>*/}
                {/*            {newKeyGenerated && (*/}
                {/*                <span className="text-sm text-green-600 flex items-center">*/}
                {/*  ✓ New API key generated successfully*/}
                {/*</span>*/}
                {/*            )}*/}
                {/*        </div>*/}
                {/*        <div className="text-sm text-muted-foreground">*/}
                {/*            <p>• Keep your API key secure and never share it publicly</p>*/}
                {/*            <p>• Use environment variables in production</p>*/}
                {/*            <p>• Regenerate your key if compromised</p>*/}
                {/*        </div>*/}
                        <div>
                            Cooming soon...
                        </div>
                    </CardContent>
                </Card>

                {/*<Card>*/}
                {/*    <CardHeader>*/}
                {/*        <CardTitle className="flex items-center gap-2">*/}
                {/*            <FileText className="h-4 w-4"/>*/}
                {/*            API Documentation*/}
                {/*        </CardTitle>*/}
                {/*        <CardDescription>Available endpoints and usage examples</CardDescription>*/}
                {/*    </CardHeader>*/}
                {/*    <CardContent>*/}
                {/*        <div className="space-y-6">*/}
                {/*            {apiEndpoints.map((endpoint, index) => (*/}
                {/*                <div key={index} className="border rounded-lg p-4">*/}
                {/*                    <div className="flex items-center gap-2 mb-2">*/}
                {/*    <span className={`px-2 py-1 rounded text-xs font-medium ${*/}
                {/*        endpoint.method === 'POST' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'*/}
                {/*    }`}>*/}
                {/*      {endpoint.method}*/}
                {/*    </span>*/}
                {/*                        <code className="text-sm font-mono">{endpoint.endpoint}</code>*/}
                {/*                    </div>*/}
                {/*                    <p className="text-sm text-muted-foreground mb-3">{endpoint.description}</p>*/}
                {/*                    <div*/}
                {/*                        className="bg-gray-900 text-gray-100 p-3 rounded text-xs font-mono overflow-x-auto">*/}
                {/*                        <pre>{endpoint.example}</pre>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            ))}*/}
                {/*        </div>*/}
                {/*    </CardContent>*/}
                {/*</Card>*/}

                {/*<Card>*/}
                {/*    <CardHeader>*/}
                {/*        <CardTitle className="flex items-center gap-2">*/}
                {/*            <History className="h-4 w-4"/>*/}
                {/*            API Usage Statistics*/}
                {/*        </CardTitle>*/}
                {/*        <CardDescription>Your recent API usage</CardDescription>*/}
                {/*    </CardHeader>*/}
                {/*    <CardContent>*/}
                {/*        <div className="space-y-4">*/}
                {/*            {usage.map((item, index) => (*/}
                {/*                <div key={index} className="flex items-center justify-between border-b pb-2">*/}
                {/*                    <div>*/}
                {/*                        <p className="text-sm font-medium">{item.endpoint}</p>*/}
                {/*                        <p className="text-xs text-muted-foreground">{item.date}</p>*/}
                {/*                    </div>*/}
                {/*                    <div className="text-right">*/}
                {/*                        <p className="text-sm font-medium">{item.calls} calls</p>*/}
                {/*                        <p className="text-xs text-muted-foreground">*/}
                {/*                            {item.success} successful ({Math.round((item.success / item.calls) * 100)}%)*/}
                {/*                        </p>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            ))}*/}
                {/*        </div>*/}
                {/*    </CardContent>*/}
                {/*</Card>*/}
            </div>
        </div>
    );
};

export default DeveloperAPI;
