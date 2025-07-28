import React from 'react';
import {useTranslation} from 'react-i18next';
import {Link, useNavigate} from 'react-router-dom';
import {Button} from '@/components/ui/button';
import {useAuthStore} from "@/store/authStore";
import ScrollFade from '@/components/ui/scroll-fade';

const Products = () => {
    const {t} = useTranslation();
    const {isAuth} = useAuthStore();
    const navigate = useNavigate();

    const products = [
        {
            id: 'stt',
            title: t('products.stt.title'),
            description: t('products.stt.description'),
            features: [t('Real-time transcription'), t('Multi-language support'), t('Custom vocabulary'), t('High accuracy rates')],
            gradient: 'from-blue-500 to-blue-600',
            icon: '🎙️',
            learnMorePath: '/products/stt',
            tryDemo: () => goTryDemo("/dashboard/stt")
        },
        {
            id: 'tts',
            title: t('products.tts.title'),
            description: t('products.tts.description'),
            features: [t('Natural voice synthesis'), t('Multiple voice options'), t('Emotion control'), t('SSML support')],
            gradient: 'from-purple-500 to-purple-600',
            icon: '🔊',
            learnMorePath: '/products/tts',
            tryDemo: () => goTryDemo("/dashboard/tts")
        },
        {
            id: 'watermarking',
            title: t('products.watermarking.title'),
            description: t('products.watermarking.description'),
            features: [t('Invisible watermarks'), t('Copyright protection'), t('Tamper detection'), t('Batch processing')],
            gradient: 'from-green-500 to-green-600',
            icon: '🔒',
            learnMorePath: '/products/watermarking',
            tryDemo: () => goTryDemo("/dashboard/watermarking")
        },
        // {
        //   id: 'authentication',
        //   title: t('products.authentication.title'),
        //   description: t('products.authentication.description'),
        //   features: ['Biometric security', 'Anti-spoofing', 'Fast verification', 'Cross-platform'],
        //   gradient: 'from-orange-500 to-orange-600',
        //   icon: '🛡️',
        //   learnMorePath: '/products/authentication',
        //   tryDemo:()=>goTryDemo("")
        // },
        {
            id: 'voice-detection',
            title: t('AI Voice Detection'),
            description: t('Detect whether voice recordings are AI-generated or human. Perfect for content verification and authenticity checking.'),
            features: [t('Real-time analysis'), t('High accuracy detection'), t('Batch processing'), t('API integration')],
            gradient: 'from-red-500 to-red-600',
            icon: '🔍',
            learnMorePath: '/products/voice-detection',
            tryDemo: () => goTryDemo("/dashboard/voice-detection")
        },
        {
            id: 'music-detection',
            title: t('AI Music Detection'),
            description: t('Identify AI-generated music tracks and distinguish them from human-composed pieces with advanced machine learning.'),
            features: [t('Music genre analysis'), t('Composition pattern detection'), t('Real-time scanning'), t('Copyright verification')],
            gradient: 'from-indigo-500 to-indigo-600',
            icon: '🎵',
            learnMorePath: '/products/music-detection',
            tryDemo: () => goTryDemo("/dashboard/music-detection")
        }
    ];

    const goTryDemo = (url: string) => {
        if (isAuth) {
            navigate(url);
        } else {
            navigate("/login")
        }
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <ScrollFade>
                <div className="text-center mb-16">
                    <h1 className="text-5xl pb-3 font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {t('products.title')}
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        {t("Discover our comprehensive suite of AI-powered voice technologies designed to revolutionize how you interact with audio content.")}
                    </p>
                </div>
            </ScrollFade>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {products.map((product, index) => (
                    <ScrollFade key={product.id} delay={index * 100}>
                        <div
                             className="group relative overflow-hidden rounded-2xl border bg-card hover:shadow-2xl transition-all duration-500">
                        <div className="p-8">
                            <div
                                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${product.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <span className="text-2xl">{product.icon}</span>
                            </div>

                            <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
                            <p className="text-muted-foreground mb-6 leading-relaxed">{product.description}</p>

                            <div className="space-y-3 mb-8">
                                {product.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center space-x-3">
                                        <div
                                            className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                                            <span className="text-white text-xs">✓</span>
                                        </div>
                                        <span className="text-sm">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex space-x-3">
                                <Button asChild className={`bg-gradient-to-r ${product.gradient} hover:opacity-90`}>
                                    <Link to={product.learnMorePath}>
                                        {t("Learn More")}
                                    </Link>
                                </Button>
                                <Button onClick={product?.tryDemo} variant="outline">
                                    {t("Try Demo")}
                                </Button>
                            </div>
                        </div>

                        {/* Background decoration */}
                        <div
                            className="absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 rounded-full bg-gradient-to-br from-primary/5 to-transparent group-hover:scale-150 transition-transform duration-700"></div>
                        </div>
                    </ScrollFade>
                ))}
            </div>

            {/* Integration Section */}
            <ScrollFade delay={300}>
                <section className="mt-20 text-center">
                    <h2 className="text-4xl font-bold mb-8">{t("Easy Integration")}</h2>
                    <div className="bg-muted/30 rounded-2xl p-8 max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <ScrollFade delay={400}>
                                <div className="space-y-4">
                                    <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center mx-auto">
                                        <span className="text-white font-bold">1</span>
                                    </div>
                                    <h3 className="font-semibold">{t("Choose Your API")}</h3>
                                    <p className="text-muted-foreground text-sm">{t("Select the voice AI service that fits your needs")}</p>
                                </div>
                            </ScrollFade>
                            <ScrollFade delay={500}>
                                <div className="space-y-4">
                                    <div
                                        className="w-12 h-12 rounded-lg bg-purple-500 flex items-center justify-center mx-auto">
                                        <span className="text-white font-bold">2</span>
                                    </div>
                                    <h3 className="font-semibold">{t("Integrate")}</h3>
                                    <p className="text-muted-foreground text-sm">{t("Use our simple REST APIs or SDKs")}</p>
                                </div>
                            </ScrollFade>
                            <ScrollFade delay={600}>
                                <div className="space-y-4">
                                    <div className="w-12 h-12 rounded-lg bg-green-500 flex items-center justify-center mx-auto">
                                        <span className="text-white font-bold">3</span>
                                    </div>
                                    <h3 className="font-semibold">{t("Scale")}</h3>
                                    <p className="text-muted-foreground text-sm">{t("Deploy and scale your voice-enabled applications")}</p>
                                </div>
                            </ScrollFade>
                        </div>
                    </div>
                </section>
            </ScrollFade>
        </div>
    );
};

export default Products;
