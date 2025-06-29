import React, {useState} from 'react';
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

const TTSBot = () => {
    const [isProcessing, setIsProcessing] = useState(false);
    const [text, setText] = useState('');
    const [audioResult, setAudioResult] = useState<any>();
    const [history, setHistory] = useState([]);
    const [play, setPlay] = useState<number>()

    const testData = [
        {
            id: 1,
            text: "Shu bilan birga, O‘zbekistonda o‘tkazilgan shaxmat bo‘yicha ko‘plab nufuzli musobaqalar dizayn loyihalari muallifidir.",
            file: file1,
            emotion: "Happy"
        },
        {
            id: 2,
            text: "Tohir Rahimov birinchi o‘zbek sangtaroshi, 1937 yilda millat ziyolilari qatorida qatag‘on qilingan Abdurahim usta Turdiyevning nabirasidir.",
            file: file2,
            emotion: "Sad"
        },
        {
            id: 3,
            text: "Endi mazkur vazirliklar o‘zaro muvofiq ishlab, bozor talablari asosida mavjud imkoniyatlarni to‘liq ishga solish, hududlar va tarmoqlarni jadal rivojlantirish choralarini ko‘radi.",
            file: file3,
            emotion: "Neutral"
        },
        {
            id: 4,
            text: "Havo o‘zgarib turadi, yog‘ingarchilik kutilmaydi.",
            file: file4,
            emotion: "Angry"
        },
        {
            id: 5,
            text: "Voy, O'zbekiston jahon chempionatiga chiqibdi! Bu eng baxtli xabar, bugungi kunimni nurga to'ldirdi!",
            file: file5,
            emotion: "Happy"
        },
        {
            id: 6,
            text: "Men ham baxtli bo'lishga arzirdimku. Lekin taqdir doim jim bo'ldi, men yig'laganimda ham.",
            file: file6,
            emotion: "Sad"
        },
        {
            id: 7,
            text: "Qanchalik sabr qilsam ham endi chiday olmayman! Nega har safar xuddi shu xatoni takrorlaysan?",
            file: file7,
            emotion: "Angry"
        }
    ]

    const handleProcess = () => {
        setIsProcessing(true);
        setTimeout(() => {
            let find = testData?.find(t => t?.text === text);
            if (find) {
                find["name"] = 'audio_output_' + Date.now() + '.vaw';
                find["voice"] = "Female (Laylo)";
                find["date"] = new Date().toLocaleString();
                find["id"] = history?.length > 0 ? history?.[history?.length - 1]?.id + 1 : 1
                setAudioResult(find);
                setHistory([
                    find,
                    ...history
                ])
            } else {
                message.error("Error!");
            }
            setIsProcessing(false);
        }, 3000);
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
                                className="p-2 border rounded bg-white text-black dark:bg-gray-800 dark:text-white dark:border-gray-700">
                                <option className="dark:bg-gray-800">Female (Laylo)</option>
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
                                <div className="flex justify-between">
                                    <h4 className="font-medium mb-2">Audio Generated:</h4>
                                    <p className="text-sm mb-2">{audioResult?.name}</p>
                                </div>
                                <div className={"h-[50px]"}>
                                    <audio controls src={audioResult?.file} className="w-full mb-4 rounded-md"></audio>
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
                            {history.map((item) => (
                                <div key={item.id} className="border rounded-lg p-3">
                                    <div className="flex justify-between items-start mb-2">
                                        <p className="text-sm font-medium">Voice: {item?.voice}</p>
                                        <span className="text-xs text-muted-foreground">{item?.date}</span>
                                    </div>
                                    <p className="text-xs text-muted-foreground mb-2">
                                        Name: {item?.name}
                                    </p>
                                    <p className="text-xs text-muted-foreground mb-2 flex justify-between">
                                        <div>
                                            Emotion: {item?.emotion}
                                        </div>
                                    </p>
                                    <p className="text-sm text-gray-700 dark:text-gray-300">{item?.text}</p>
                                    <div className="flex mt-3">
                                        <audio onPlay={(a) => {
                                            a.preventDefault();
                                        }} controls src={item?.file} className="w-full mb-4 rounded-md"></audio>
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
