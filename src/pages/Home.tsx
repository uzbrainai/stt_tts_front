import React from 'react';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';
import {Button} from '@/components/ui/button';
import {useTheme} from "@/contexts/ThemeContext";

const Home = () => {
    const {t} = useTranslation();
    const {theme} = useTheme();

    return (
        <div className="space-y-12 md:space-y-20">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
                <div className="container mx-auto px-4 py-12 md:py-20">
                    <div className="text-center space-y-6 md:space-y-8 max-w-4xl mx-auto">
                        <h1 className="text-3xl pb-4 md:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent leading-tight">
                            {t('hero.title')}
                        </h1>
                        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto px-4">
                            {t('hero.subtitle')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
                            <Button size="lg" asChild
                                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 w-full sm:w-auto">
                                <Link to="/products">{t('hero.cta')}</Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
                                <Link to="/contact">{t("nav.contact")}</Link>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Background decoration */}
                <div className="absolute inset-0 -z-10">
                    <div
                        className="absolute top-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                    <div
                        className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
                </div>
            </section>

            {/* Products Preview */}
            <section className="container mx-auto px-4">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-2xl md:text-4xl font-bold mb-4">{t('products.title')}</h2>
                    <p className="text-lg md:text-xl text-muted-foreground">{t('products.description')}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    <div
                        className="group p-4 md:p-6 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300 hover:border-blue-500/50">
                        <div
                            className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <span className="text-white font-bold text-sm">STT</span>
                        </div>
                        <h3 className="text-lg md:text-xl font-semibold mb-2">{t('products.stt.title')}</h3>
                        <p className="text-muted-foreground text-sm md:text-base">{t('products.stt.description')}</p>
                    </div>

                    <div
                        className="group p-4 md:p-6 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300 hover:border-purple-500/50">
                        <div
                            className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <span className="text-white font-bold text-sm">TTS</span>
                        </div>
                        <h3 className="text-lg md:text-xl font-semibold mb-2">{t('products.tts.title')}</h3>
                        <p className="text-muted-foreground text-sm md:text-base">{t('products.tts.description')}</p>
                    </div>

                    <div
                        className="group p-4 md:p-6 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300 hover:border-green-500/50">
                        <div
                            className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <span className="text-white font-bold text-sm">WM</span>
                        </div>
                        <h3 className="text-lg md:text-xl font-semibold mb-2">{t('products.watermarking.title')}</h3>
                        <p className="text-muted-foreground text-sm md:text-base">{t('products.watermarking.description')}</p>
                    </div>

                    <div
                        className="group p-4 md:p-6 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300 hover:border-orange-500/50">
                        <div
                            className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <span className="text-white font-bold text-sm">VA</span>
                        </div>
                        <h3 className="text-lg md:text-xl font-semibold mb-2">{t('products.authentication.title')}</h3>
                        <p className="text-muted-foreground text-sm md:text-base">{t('products.authentication.description')}</p>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="bg-muted/30">
                <div className="container mx-auto px-4 py-12 md:py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 md:gap-12 items-center">
                        {/*{<div className=" order-2 lg:order-1">*/}
                        {/*    <h2 className="text-2xl md:text-4xl font-bold">{t("question.text")}</h2>*/}
                        {/*    <div className="space-y-4">*/}
                        {/*        <div className="flex items-start space-x-3">*/}
                        {/*            <div*/}
                        {/*                className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mt-0.5 flex-shrink-0">*/}
                        {/*                <span className="text-white text-xs">✓</span>*/}
                        {/*            </div>*/}
                        {/*            <div>*/}
                        {/*                <h3 className="font-semibold text-sm md:text-base">{t("question.v1.title")}</h3>*/}
                        {/*                <p className="text-muted-foreground text-sm md:text-base">{t("question.v1.description")}</p>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <div className="flex items-start space-x-3">*/}
                        {/*            <div*/}
                        {/*                className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mt-0.5 flex-shrink-0">*/}
                        {/*                <span className="text-white text-xs">✓</span>*/}
                        {/*            </div>*/}
                        {/*            <div>*/}
                        {/*                <h3 className="font-semibold text-sm md:text-base">{t("question.v2.title")}</h3>*/}
                        {/*                <p className="text-muted-foreground text-sm md:text-base">{t("question.v2.description")}</p>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <div className="flex items-start space-x-3">*/}
                        {/*            <div*/}
                        {/*                className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mt-0.5 flex-shrink-0">*/}
                        {/*                <span className="text-white text-xs">✓</span>*/}
                        {/*            </div>*/}
                        {/*            <div>*/}
                        {/*                <h3 className="font-semibold text-sm md:text-base">{t("question.v3.title")}</h3>*/}
                        {/*                <p className="text-muted-foreground text-sm md:text-base">{t("question.v3.description")}</p>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>}*/}
                        <div className="relative order-1 lg:order-2">
                            <div
                                className={`min-h-screen flex justify-center items-center p-5 transition-colors duration-300 w-full`}>
                                <div
                                    className="container rounded-2xl p-8 md:p-12 lg:p-16 w-full transition-colors duration-300">
                                    {/* Header Section */}
                                    <header className="text-center mb-10 md:mb-12 lg:mb-16">
                                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                                            {t("Voice AI Solutions Overview")}
                                        </h1>
                                    </header>

                                    {/* Features Section */}
                                    <section className="features mb-10 md:mb-12 lg:mb-16 flex items-center">
                                        {/* Feature Item 1: Yuqori aniqlik */}
                                        <div className="flex items-center justify-start space-y-2 space-x-4">
                                            <div className="flex-shrink-0 bg-green-500 p-3 rounded-full shadow-lg">
                                                {/* Checkmark SVG Icon */}
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor"
                                                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                          d="M5 13l4 4L19 7"></path>
                                                </svg>
                                            </div>
                                            <div className="text-left">
                                                <h2 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-200">
                                                    {t("High accuracy")}
                                                </h2>
                                                <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg">
                                                    {t("Industry - grade STT & TTS with minimal WER")}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Feature Item 2: Real-time ishlov */}
                                        <div className="flex items-center justify-start space-y-2 space-x-4">
                                            <div className="flex-shrink-0 bg-yellow-500 p-3 rounded-full shadow-lg">
                                                {/* Lightning Bolt SVG Icon */}
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor"
                                                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                          d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                                </svg>
                                            </div>
                                            <div className="text-left">
                                                <h2 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-200">
                                                    {t("Real - time processing")}
                                                </h2>
                                                <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg">
                                                    {t("Low - latency inferencer for real-time use cases")}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Feature Item 3: Ko'p tilli qo'llab-quvvatlash */}
                                        <div className="flex items-center justify-start space-y-2 space-x-4">
                                            <div className="flex-shrink-0 bg-blue-500 p-3 rounded-full shadow-lg">
                                                {/* Globe SVG Icon */}
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor"
                                                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                          d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 018 10a18.022 18.022 0 01-1.048-3.5M18 10a18.022 18.022 0 011.048-3.5m-3.952 9.5a18.022 18.022 0 01-1.048-3.5M12 16.5a18.022 18.022 0 011.048-3.5"></path>
                                                </svg>
                                            </div>
                                            <div className="text-left">
                                                <h2 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-200">
                                                    {t("Multilingual support")}
                                                </h2>
                                                <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg">
                                                    {t("50 + languages & dialects supported")}
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* Powered By Section */}
                                    <section className="powered-by text-center mb-10 md:mb-12 lg:mb-16">
                                        <div className="flex justify-center mb-4">
                                            {/* Microphone SVG Icon */}
                                            <svg className="w-16 h-16 text-purple-700 dark:text-purple-300"
                                                 fill="currentColor" viewBox="0 0 24 24"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M12 14c1.66 0 2.99-1.34 2.99-3L15 4c0-1.66-1.34-3-3-3S9 2.34 9 4v7c0 1.66 1.34 3 3 3zm5.02-3c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2.98z"></path>
                                            </svg>
                                        </div>
                                        <p className="text-lg md:text-xl font-semibold text-gray-700 dark:text-gray-300">
                                            {t("Powered by Advanced Machine Learning")}</p>
                                    </section>

                                    {/* Solutions Grid Section */}
                                    <section
                                        className="solutions-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                                        {/* Solution Card: STT */}
                                        <div
                                            className="solution-card bg-gradient-to-br from-indigo-700 to-purple-900 text-white p-6 rounded-xl shadow-lg flex flex-col items-center justify-center text-center transform hover:scale-105 transition-transform duration-300">
                                            {/* STT Icon (using a simple waveform as SVG) */}
                                            <svg className="w-12 h-12 mb-3" fill="none" stroke="currentColor"
                                                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                      d="M4 6h16M4 12h16M4 18h7"></path>
                                            </svg>
                                            <p className="text-lg font-bold">{t("STT")}</p>
                                        </div>

                                        {/* Solution Card: TTS */}
                                        <div
                                            className="solution-card bg-gradient-to-br from-indigo-700 to-purple-900 text-white p-6 rounded-xl shadow-lg flex flex-col items-center justify-center text-center transform hover:scale-105 transition-transform duration-300">
                                            {/* TTS Icon (using a speech bubble as SVG) */}
                                            <svg className="w-12 h-12 mb-3" fill="none" stroke="currentColor"
                                                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                      d="M8 10h.01M12 10h.01M16 10h.01M9 16l3-3 3 3m-6 0h6a2 2 0 002-2V7a2 2 0 00-2-2H9a2 2 0 00-2 2v7a2 2 0 002 2z"></path>
                                            </svg>
                                            <p className="text-lg font-bold">{t("TTS")}</p>
                                        </div>

                                        {/* Solution Card: Watermarking */}
                                        <div
                                            className="solution-card bg-gradient-to-br from-indigo-700 to-purple-900 text-white p-6 rounded-xl shadow-lg flex flex-col items-center justify-center text-center transform hover:scale-105 transition-transform duration-300">
                                            {/* Watermark Icon (using a checkmark in a circle as SVG) */}
                                            <svg className="w-12 h-12 mb-3" fill="none" stroke="currentColor"
                                                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                            <p className="text-lg font-bold">Voice Watermarking</p>
                                        </div>

                                        {/* Solution Card: Emotion Recognition */}
                                        <div
                                            className="solution-card bg-gradient-to-br from-indigo-700 to-purple-900 text-white p-6 rounded-xl shadow-lg flex flex-col items-center justify-center text-center transform hover:scale-105 transition-transform duration-300">
                                            {/* Emotion Recognition Icon (using a smiley face as SVG) */}
                                            <svg className="w-12 h-12 mb-3" fill="none" stroke="currentColor"
                                                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                            <p className="text-lg font-bold">Emotion Recognition</p>
                                        </div>

                                        {/* Solution Card: No-Drift Detection (Placeholder icon) */}
                                        <div
                                            className="solution-card bg-gradient-to-br from-indigo-700 to-purple-900 text-white p-6 rounded-xl shadow-lg flex flex-col items-center justify-center text-center transform hover:scale-105 transition-transform duration-300">
                                            {/* Generic Cog/Gear Icon for technical process */}
                                            <svg className="w-12 h-12 mb-3" fill="none" stroke="currentColor"
                                                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.525.322 1.258.426 1.724 1.066z"></path>
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                            </svg>
                                            <p className="text-lg font-bold">No-Drift Detection</p>
                                        </div>

                                        {/* Solution Card: Diarization (Placeholder icon) */}
                                        <div
                                            className="solution-card bg-gradient-to-br from-indigo-700 to-purple-900 text-white p-6 rounded-xl shadow-lg flex flex-col items-center justify-center text-center transform hover:scale-105 transition-transform duration-300">
                                            {/* User Group Icon for speaker separation */}
                                            <svg className="w-12 h-12 mb-3" fill="none" stroke="currentColor"
                                                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                      d="M17 20h2a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v11a2 2 0 002 2h2m-4 0h8a2 2 0 002-2V7a2 2 0 00-2-2h-8a2 2 0 00-2 2v11a2 2 0 002 2z"></path>
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                      d="M9 13.5C9.75 14.828 11.25 15.75 12 16.5s2.25-1.672 3-3L14 10h-4l-1 3.5z"></path>
                                            </svg>
                                            <p className="text-lg font-bold">Diarization</p>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
