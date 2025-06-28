import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {ArrowLeft, Shield, Eye, Zap, CheckCircle} from 'lucide-react';
import {useTranslation} from "react-i18next";
import {useAuthStore} from "@/store/authStore";

const WatermarkingLearnMore = () => {
    const {t} = useTranslation();
    const {isAuth} = useAuthStore();
    const navigate = useNavigate();

    const features = [
        {
            title: t('Invisible Watermarks'),
            description: t('Protect content without affecting quality'),
            icon: <Eye className="h-6 w-6"/>
        },
        {
            title: t('Copyright Protection'),
            description: t('Secure your intellectual property'),
            icon: <Shield className="h-6 w-6"/>
        },
        {
            title: t('Tamper Detection'),
            description: t('Detect unauthorized modifications'),
            icon: <Zap className="h-6 w-6"/>
        },
        {
            title: t('Batch Processing'),
            description: t('Process multiple files simultaneously'),
            icon: <CheckCircle className="h-6 w-6"/>
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
            <section className="bg-gradient-to-br from-green-900 to-emerald-900 text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div
                                    className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
                                    <span className="text-3xl">🔒</span>
                                </div>
                                <h1 className="text-5xl font-bold">{t("Audio Watermarking")}</h1>
                            </div>
                            <p className="text-xl text-green-300 mb-8">
                                {t("Protect your audio content with invisible watermarks that preserve quality while ensuring copyright protection and tamper detection.")}
                            </p>
                            <div className="flex gap-4">
                                <Button onClick={() => {
                                    if (isAuth) {
                                        navigate("/dashboard/watermarking")
                                    } else {
                                        navigate("/login")
                                    }
                                }} size="lg" className="bg-green-600 hover:bg-green-700">
                                    {t("Try Free Demo")}
                                </Button>
                                {/*<Button size="lg" variant="outline"*/}
                                {/*        className="border-white text-white hover:bg-white text-green-900">*/}
                                {/*    View Documentation*/}
                                {/*</Button>*/}
                            </div>
                        </div>
                        <div className="bg-green-800 rounded-2xl p-6">
                            <img
                                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&h=600"
                                alt="Watermarking Dashboard Screenshot"
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
                        <h2 className="text-4xl font-bold mb-6">{t("Advanced Protection")}</h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            {t("Industry - leading watermarking technology for comprehensive audio protection")}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                                <CardHeader>
                                    <div
                                        className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4 text-green-600 dark:text-green-400">
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

            {/* How It Works - Gold Theme */}
            <section
                className="py-20 bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950 dark:to-yellow-950">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-amber-900 dark:text-amber-100">{t("How It Works")}</h2>
                        <p className="text-lg text-amber-700 dark:text-amber-200">
                            {t("Simple three-step process to protect your audio content")}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div
                                className="w-16 h-16 rounded-full bg-amber-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                                1
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-amber-900 dark:text-amber-100">{t("Upload Audio")}</h3>
                            <p className="text-amber-700 dark:text-amber-200">
                                {t("Upload your original audio file to our secure platform")}
                            </p>
                        </div>

                        <div className="text-center">
                            <div
                                className="w-16 h-16 rounded-full bg-amber-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                                2
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-amber-900 dark:text-amber-100">{t("Embed Watermark")}</h3>
                            <p className="text-amber-700 dark:text-amber-200">
                                {t("Our AI embeds an invisible watermark into your audio")}
                            </p>
                        </div>

                        <div className="text-center">
                            <div
                                className="w-16 h-16 rounded-full bg-amber-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                                3
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-amber-900 dark:text-amber-100">{t("Download Protected")}</h3>
                            <p className="text-amber-700 dark:text-amber-200">
                                {t("Download your watermarked audio with full protection")}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Security Features */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-6">{t("Security Features")}</h2>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div
                                        className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900 flex items-center justify-center flex-shrink-0">
                                        <Shield className="h-6 w-6 text-green-600 dark:text-green-400"/>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">{t("Robust Protection")}</h3>
                                        <p className="text-muted-foreground">{t("Watermarks survive compression, format conversion, and editing")}</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div
                                        className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900 flex items-center justify-center flex-shrink-0">
                                        <Eye className="h-6 w-6 text-green-600 dark:text-green-400"/>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">{t("Imperceptible Quality")}</h3>
                                        <p className="text-muted-foreground">{t("No audible difference in the protected audio")}</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div
                                        className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900 flex items-center justify-center flex-shrink-0">
                                        <Zap className="h-6 w-6 text-green-600 dark:text-green-400"/>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">{t("Fast Detection")}</h3>
                                        <p className="text-muted-foreground">{t("Instantly verify ownership and detect tampering")}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl p-6">
                            <img
                                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&h=600"
                                alt="Security Features Screenshot"
                                className="w-full rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">{t("Protect Your Audio Content")}</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        {t("Start securing your audio files with invisible watermarks. Try our protection service today.")}
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button onClick={() => {
                            if (isAuth) {
                                navigate("/dashboard/watermarking")
                            } else {
                                navigate("/login")
                            }
                        }} size="lg" variant="secondary">
                            {t("Start Free Trial")}
                        </Button>
                        <Button onClick={() => {
                            navigate("/contact")
                        }} size="lg" variant="outline"
                                className="border-white text-white hover:bg-white text-green-600">
                            {t("Contact Sales")}
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WatermarkingLearnMore;
