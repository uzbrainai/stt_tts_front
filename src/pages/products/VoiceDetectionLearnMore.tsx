import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {ArrowLeft, Search, Shield, Zap, CheckCircle} from 'lucide-react';
import {useAuthStore} from "@/store/authStore";
import {useTranslation} from "react-i18next";

const VoiceDetectionLearnMore = () => {
    const {t} = useTranslation();
    const {isAuth} = useAuthStore();
    const navigate = useNavigate();

    const features = [
        {
            title: 'Real-time Analysis',
            description: 'Instantly detect AI-generated voice in live audio streams',
            icon: <Zap className="h-6 w-6"/>
        },
        {
            title: 'High Accuracy Detection',
            description: '99.5%+ accuracy in distinguishing AI from human voices',
            icon: <Search className="h-6 w-6"/>
        },
        {
            title: 'Advanced Security',
            description: 'Protect against deepfake and voice spoofing attacks',
            icon: <Shield className="h-6 w-6"/>
        },
        {
            title: 'API Integration',
            description: 'Easy integration with existing content moderation systems',
            icon: <CheckCircle className="h-6 w-6"/>
        }
    ];

    const useCases = [
        'Social media content verification',
        'News and journalism authenticity',
        'Legal evidence validation',
        'Customer service security',
        'Content moderation platforms',
        'Financial fraud prevention'
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
                                    className="w-16 h-16 rounded-2xl bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center">
                                    <span className="text-3xl">🔍</span>
                                </div>
                                <h1 className="text-5xl font-bold">{t("AI Voice Detection")}</h1>
                            </div>
                            <p className="text-xl text-slate-300 mb-8">
                                {t("Protect your platform from AI-generated voice content with our cutting-edge detection technology. Identify deepfakes and synthetic voices with unprecedented accuracy.")}
                            </p>
                            <div className="flex gap-4">
                                <Button onClick={() => {
                                    if (isAuth) {
                                        navigate("/dashboard/voice-detection")
                                    } else {
                                        navigate("/login")
                                    }
                                }} size="lg" className="bg-red-600 hover:bg-red-700">
                                    {t("Try Free Demo")}
                                </Button>
                                {/*<Button size="lg" variant="outline" className="border-white text-white hover:bg-white text-slate-900">*/}
                                {/*  View Documentation*/}
                                {/*</Button>*/}
                            </div>
                        </div>
                        <div className="bg-slate-800 rounded-2xl p-6">
                            <img
                                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&h=600"
                                alt="Voice Detection Dashboard Screenshot"
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
                        <h2 className="text-4xl font-bold mb-6">{t("Advanced Detection Features")}</h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            {t("Our AI voice detection service offers state-of-the-art technology to identify synthetic voices")}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                                <CardHeader>
                                    <div
                                        className="w-12 h-12 rounded-lg bg-red-100 dark:bg-red-900 flex items-center justify-center mb-4 text-red-600 dark:text-red-400">
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
                                {t("AI voice detection technology is essential for maintaining content authenticity across various platforms")}
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
                                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&h=600"
                                alt="Voice Detection Use Cases Screenshot"
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
                                <div className="text-3xl font-bold text-red-600 mb-2">99.5%+</div>
                                <p className="text-muted-foreground">{t("Detection accuracy rate")}</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Processing Speed</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold text-red-600 mb-2">&lt;100ms</div>
                                <p className="text-muted-foreground">{t("Average analysis time")}</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Audio Formats</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold text-red-600 mb-2">20+</div>
                                <p className="text-muted-foreground">{t("Supported audio formats")}</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-red-600 to-pink-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">{t("Ready to Secure Your Platform?")}</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        {t("Start detecting AI-generated voices with our powerful detection API. Protect your content today.")}
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button onClick={() => {
                            if (isAuth) {
                                navigate("/dashboard/voice-detection")
                            } else {
                                navigate("/login")
                            }
                        }} size="lg" variant="secondary">
                            {t("Start Free Trial")}
                        </Button>
                        <Button onClick={() => {
                            navigate("/contact")
                        }} size="lg" variant="outline"
                                className="border-white text-white hover:bg-white text-red-600">
                            {t("Contact Sales")}
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default VoiceDetectionLearnMore;
