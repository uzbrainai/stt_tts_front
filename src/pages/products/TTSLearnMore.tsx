import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {ArrowLeft, Volume2, Users, Settings, Zap} from 'lucide-react';
import {useTranslation} from "react-i18next";
import {useAuthStore} from "@/store/authStore";

const TTSLearnMore = () => {
    const {t} = useTranslation();
    const {isAuth} = useAuthStore();
    const navigate = useNavigate();

    const features = [
        {
            title: t('Natural Voice Synthesis'),
            description: t('Human-like speech with natural intonation'),
            icon: <Volume2 className="h-6 w-6"/>
        },
        {
            title: t('Multiple Voice Options'),
            description: t('Choose from dozens of professional voices'),
            icon: <Users className="h-6 w-6"/>
        },
        {
            title: t('Emotion Control'),
            description: t('Add emotion and emphasis to speech'),
            icon: <Settings className="h-6 w-6"/>
        },
        {
            title: t('SSML Support'),
            description: t('Advanced speech markup for precise control'),
            icon: <Zap className="h-6 w-6"/>
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="border-b">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="sm" asChild>
                            <Link to="/products" className="flex items-center gap-2">
                                <ArrowLeft className="h-4 w-4"/>
                                {t("Back to Products")}
                            </Link>
                        </Button>
                    </div>
                </div>
            </header>

            {/* Hero Section - Dark Theme */}
            <section className="bg-gradient-to-br from-purple-900 to-indigo-900 text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div
                                    className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
                                    <span className="text-3xl">🔊</span>
                                </div>
                                <h1 className="text-5xl font-bold">{t("Text - to - Speech")}</h1>
                            </div>
                            <p className="text-xl text-purple-300 mb-8">
                                {t("Convert any text into natural-sounding speech with our advanced neural text-to-speech technology. Perfect for audiobooks, voice assistants, and accessibility features.")}
                            </p>
                            <div className="flex gap-4">
                                <Button onClick={() => {
                                    if (isAuth) {
                                        navigate("/dashboard/tts")
                                    } else {
                                        navigate("/login")
                                    }
                                }} size="lg" className="bg-purple-600 hover:bg-purple-700">
                                    {t("Try Free Demo")}
                                </Button>
                                {/*<Button size="lg" variant="outline"*/}
                                {/*        className="border-white text-white hover:bg-white text-purple-900">*/}
                                {/*    View Documentation*/}
                                {/*</Button>*/}
                            </div>
                        </div>
                        <div className="bg-purple-800 rounded-2xl p-6">
                            <img
                                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&h=600"
                                alt="TTS Dashboard Screenshot"
                                className="w-full rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section - Light Theme */}
            <section className="py-20 bg-slate-50 dark:bg-slate-900">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-6">{t("Advanced Features")}</h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            {t("Create natural-sounding speech with industry-leading voice synthesis")}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                                <CardHeader>
                                    <div
                                        className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-4 text-purple-600 dark:text-purple-400">
                                        {feature.icon}
                                    </div>
                                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>{feature.description}</CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Voice Samples - Gold Theme */}
            {/*<section className="py-20 bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950 dark:to-yellow-950">*/}
            {/*  <div className="container mx-auto px-4">*/}
            {/*    <div className="text-center mb-16">*/}
            {/*      <h2 className="text-4xl font-bold text-amber-900 dark:text-amber-100">Voice Portfolio</h2>*/}
            {/*      <p className="text-lg text-amber-700 dark:text-amber-200">*/}
            {/*        Choose from our extensive library of professional voices*/}
            {/*      </p>*/}
            {/*    </div>*/}
            {/*    */}
            {/*    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">*/}
            {/*      {['Sarah - Professional', 'David - Narrator', 'Emma - Friendly', 'James - Corporate', 'Maria - Warm', 'Alex - Energetic'].map((voice, index) => (*/}
            {/*        <Card key={index} className="bg-white dark:bg-slate-800 border-amber-200 dark:border-amber-800">*/}
            {/*          <CardHeader>*/}
            {/*            <CardTitle className="text-amber-900 dark:text-amber-100">{voice}</CardTitle>*/}
            {/*          </CardHeader>*/}
            {/*          <CardContent>*/}
            {/*            <Button variant="outline" className="w-full border-amber-500 text-amber-700 hover:bg-amber-100 dark:text-amber-300 dark:hover:bg-amber-900">*/}
            {/*              Play Sample*/}
            {/*            </Button>*/}
            {/*          </CardContent>*/}
            {/*        </Card>*/}
            {/*      ))}*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</section>*/}

            {/* Use Cases */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl p-6">
                            <img
                                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&h=600"
                                alt="TTS Applications Screenshot"
                                className="w-full rounded-lg"
                            />
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold mb-6">Applications</h2>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div
                                        className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900 flex items-center justify-center flex-shrink-0">
                                        <span className="text-2xl">📚</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">{t("Audiobooks & Content")}</h3>
                                        <p className="text-muted-foreground">{t("Convert written content into engaging audio format")}</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div
                                        className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900 flex items-center justify-center flex-shrink-0">
                                        <span className="text-2xl">🤖</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">{t("Voice Assistants")}</h3>
                                        <p className="text-muted-foreground">{t("Power interactive voice experiences and chatbots")}</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div
                                        className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900 flex items-center justify-center flex-shrink-0">
                                        <span className="text-2xl">♿</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">{t("Accessibility")}</h3>
                                        <p className="text-muted-foreground">{t("Make content accessible for visually impaired users")}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">{t("Transform Text into Speech")}</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        {t("Start creating natural-sounding audio content with our text-to-speech API.")}
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button onClick={() => {
                            if (isAuth) {
                                navigate("/dashboard/tts")
                            } else {
                                navigate("/login")
                            }
                        }} size="lg" variant="secondary">
                            {t("Start Free Trial")}
                        </Button>
                        <Button onClick={() => {
                            navigate("/contact")
                        }} size="lg" variant="outline"
                                className="border-white text-white hover:bg-white text-purple-600">
                            {t("Contact Sales")}
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TTSLearnMore;
