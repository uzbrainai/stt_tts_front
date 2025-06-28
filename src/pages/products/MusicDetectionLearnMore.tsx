import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {ArrowLeft, Music, Brain, Scan, CheckCircle} from 'lucide-react';
import {useAuthStore} from "@/store/authStore";
import {useTranslation} from "react-i18next";

const MusicDetectionLearnMore = () => {
    const {t} = useTranslation();
    const {isAuth} = useAuthStore();
    const navigate = useNavigate();

    const features = [
        {
            title: 'Music Genre Analysis',
            description: 'Analyze composition patterns across different musical genres',
            icon: <Music className="h-6 w-6"/>
        },
        {
            title: 'AI Pattern Recognition',
            description: 'Identify telltale signs of AI-generated musical compositions',
            icon: <Brain className="h-6 w-6"/>
        },
        {
            title: 'Real-time Scanning',
            description: 'Process audio files instantly with our fast detection engine',
            icon: <Scan className="h-6 w-6"/>
        },
        {
            title: 'Copyright Verification',
            description: 'Protect original compositions from AI-generated duplicates',
            icon: <CheckCircle className="h-6 w-6"/>
        }
    ];

    const useCases = [
        'Music streaming platforms',
        'Record label verification',
        'Copyright protection services',
        'Music competition judging',
        'Academic research validation',
        'Content licensing platforms'
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
                                    className="w-16 h-16 rounded-2xl bg-gradient-to-r from-indigo-500 to-indigo-600 flex items-center justify-center">
                                    <span className="text-3xl">🎵</span>
                                </div>
                                <h1 className="text-5xl font-bold">{t("AI Music Detection")}</h1>
                            </div>
                            <p className="text-xl text-slate-300 mb-8">
                                {t("Distinguish between human-composed and AI-generated music with our advanced detection algorithms. Protect musical authenticity and support original artists.")}
                            </p>
                            <div className="flex gap-4">
                                <Button onClick={() => {
                                    if (isAuth) {
                                        navigate("/dashboard/music-detection")
                                    } else {
                                        navigate("/login")
                                    }
                                }} size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                                    {t("Try Free Demo")}
                                </Button>
                                {/*<Button size="lg" variant="outline" className="border-white text-white hover:bg-white text-slate-900">*/}
                                {/*  View Documentation*/}
                                {/*</Button>*/}
                            </div>
                        </div>
                        <div className="bg-slate-800 rounded-2xl p-6">
                            <img
                                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&h=600"
                                alt="Music Detection Dashboard Screenshot"
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
                        <h2 className="text-4xl font-bold mb-6">{t("Comprehensive Music Analysis")}</h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            {t("Our AI music detection service uses advanced machine learning to analyze musical compositions")}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                                <CardHeader>
                                    <div
                                        className="w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mb-4 text-indigo-600 dark:text-indigo-400">
                                        {feature.icon}
                                    </div>
                                    <CardTitle className="text-lg">{t(feature.title)}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>{t(feature.description)}</CardDescription>
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
                                {t("AI music detection is revolutionizing how the music industry maintains authenticity and protects artists")}
                            </p>
                            <div className="grid gap-4">
                                {useCases.map((useCase, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <div
                                            className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center">
                                            <CheckCircle className="h-4 w-4 text-white"/>
                                        </div>
                                        <span className="text-amber-800 dark:text-amber-200">{t(useCase)}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&h=600"
                                alt="Music Detection Use Cases Screenshot"
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
                                <CardTitle>{t("Detection Rate")}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold text-indigo-600 mb-2">98%+</div>
                                <p className="text-muted-foreground">{t("AI music identification accuracy")}</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>{t("Audio Formats")}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold text-indigo-600 mb-2">25+</div>
                                <p className="text-muted-foreground">{t("Supported music file formats")}</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>{t("Processing Time")}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold text-indigo-600 mb-2">{t("Real - time")}</div>
                                <p className="text-muted-foreground">{t("Instant music analysis")}</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">{t("Ready to Protect Musical Authenticity?")}</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        {t("Start detecting AI-generated music with our advanced analysis tools. Safeguard the music industry today.")}
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button onClick={() => {
                            if (isAuth) {
                                navigate("/dashboard/music-detection")
                            } else {
                                navigate("/login")
                            }
                        }} size="lg" variant="secondary">
                            {t("Start Free Trial")}
                        </Button>
                        <Button onClick={() => {
                            navigate("/contact")
                        }} size="lg" variant="outline"
                                className="border-white text-white hover:bg-white text-indigo-600">
                            {t("Contact Sales")}
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MusicDetectionLearnMore;
