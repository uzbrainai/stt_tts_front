import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {ArrowLeft, Mic, AudioLines, FileText, CheckCircle} from 'lucide-react';
import {useTranslation} from "react-i18next";
import {useAuthStore} from "@/store/authStore";

const STTLearnMore = () => {
    const {t} = useTranslation();
    const {isAuth} = useAuthStore();
    const navigate = useNavigate();

    const features = [
        {
            title: t('Real-time Transcription'),
            description: t('Convert speech to text instantly as you speak'),
            icon: <Mic className="h-6 w-6"/>
        },
        {
            title: t('Multi-language Support'),
            description: t('Support for 50+ languages and dialects'),
            icon: <AudioLines className="h-6 w-6"/>
        },
        {
            title: t('Custom Vocabulary'),
            description: t('Add domain-specific terms for better accuracy'),
            icon: <FileText className="h-6 w-6"/>
        },
        {
            title: t('High Accuracy Rates'),
            description: t('99%+ accuracy for clear audio recordings'),
            icon: <CheckCircle className="h-6 w-6"/>
        }
    ];

    const useCases = [
        t('Meeting transcriptions'),
        t('Podcast subtitles'),
        t('Voice notes conversion'),
        t('Interview documentation'),
        t('Call center analytics'),
        t('Accessibility features')
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
            <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div
                                    className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                                    <span className="text-3xl">🎙️</span>
                                </div>
                                <h1 className="text-5xl font-bold">{t("Speech - to - Text")}</h1>
                            </div>
                            <p className="text-xl text-slate-300 mb-8">
                                {t("Transform audio into accurate text with our advanced AI-powered speech recognition technology. Perfect for transcriptions, subtitles, and voice commands.")}
                            </p>
                            <div className="flex gap-4">
                                <Button onClick={() => {
                                    if (isAuth) {
                                        navigate("/dashboard/stt")
                                    } else {
                                        navigate("/login")
                                    }
                                }} size="lg" className="bg-blue-600 hover:bg-blue-700">
                                    {t("Try Free Demo")}
                                </Button>
                                {/*<Button size="lg" variant="outline" className="border-white text-white hover:bg-white text-slate-900">*/}
                                {/*  View Documentation*/}
                                {/*</Button>*/}
                            </div>
                        </div>
                        <div className="bg-slate-800 rounded-2xl p-6">
                            <img
                                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&h=600"
                                alt="STT Dashboard Screenshot"
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
                        <h2 className="text-4xl font-bold mb-6">{t("Powerful Features")}</h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            {t("Our speech-to-text service offers industry-leading accuracy and performance")}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                                <CardHeader>
                                    <div
                                        className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
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

            {/* Use Cases Section - Gold Theme */}
            <section
                className="py-20 bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950 dark:to-yellow-950">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-6 text-amber-900 dark:text-amber-100">{t("Use Cases")}</h2>
                            <p className="text-lg text-amber-700 dark:text-amber-200 mb-8">
                                {t("Speech - to - text technology can transform various industries and workflows")}
                            </p>
                            <div className="grid gap-4">
                                {useCases.map((useCase, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <div
                                            className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center">
                                            <CheckCircle className="h-4 w-4 text-white"/>
                                        </div>
                                        <span className="text-amber-800 dark:text-amber-200">{useCase}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&h=600"
                                alt="STT Use Cases Screenshot"
                                className="w-full rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Specs */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-6">{t("Technical Specifications")}</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <Card>
                            <CardHeader>
                                <CardTitle>{t("Accuracy")}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold text-blue-600 mb-2">99%+</div>
                                <p className="text-muted-foreground">{t("Word accuracy rate for clear audio")}</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>{t("Languages")}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                                <p className="text-muted-foreground">{t("Supported languages and dialects")}</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>{t("Speed")}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold text-blue-600 mb-2">{t("Real - time")}</div>
                                <p className="text-muted-foreground">{t("Process audio as it's spoken")}</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">{t("Ready to Get Started?")}</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        {t("Start converting speech to text with our powerful API. Try it free today.")}
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button onClick={() => {
                            if (isAuth) {
                                navigate("/dashboard/stt")
                            } else {
                                navigate("/login")
                            }
                        }} size="lg" variant="secondary">
                            {t("Start Free Trial")}
                        </Button>
                        <Button onClick={()=>navigate("/contact")} size="lg" variant="outline"
                                className="border-white text-white hover:bg-white text-blue-600">
                            {t("Contact Sales")}
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default STTLearnMore;
