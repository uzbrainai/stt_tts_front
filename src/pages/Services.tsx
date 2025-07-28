import React from 'react';
import {useTranslation} from "react-i18next";
import ScrollFade from '@/components/ui/scroll-fade';

const Services = () => {
    const {t} = useTranslation();
    return (
        <div className="container mx-auto px-4 py-12">
            <ScrollFade>
                <div className="text-center mb-16">
                    <h1 className="text-5xl pb-3 font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {t("Our Services")}
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        {t("Comprehensive voice AI services tailored to your business needs")}
                    </p>
                </div>
            </ScrollFade>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ScrollFade delay={100}>
                    <div className="group p-8 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <span className="text-2xl">🎯</span>
                        </div>
                        <h3 className="text-xl font-bold mb-4">{t("Custom Development")}</h3>
                        <p className="text-muted-foreground mb-6">{t("Tailored voice AI solutions designed specifically for your unique business requirements and use cases.")}</p>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>{t("Custom model training")}</li>
                            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>{t("Integration support")}</li>
                            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>{t("Performance optimization")}</li>
                        </ul>
                    </div>
                </ScrollFade>

                <ScrollFade delay={200}>
                    <div className="group p-8 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <span className="text-2xl">🔧</span>
                        </div>
                        <h3 className="text-xl font-bold mb-4">{t("Implementation")}</h3>
                        <p className="text-muted-foreground mb-6">{t("End - to - end implementation services to seamlessly integrate voice AI into your existing systems.")}</p>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>{t("System analysis")}</li>
                            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>{t("API integration")}</li>
                            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>{t("Testing & deployment")}</li>
                        </ul>
                    </div>
                </ScrollFade>

                <ScrollFade delay={300}>
                    <div className="group p-8 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <span className="text-2xl">🎓</span>
                        </div>
                        <h3 className="text-xl font-bold mb-4">{t("Training & Support")}</h3>
                        <p className="text-muted-foreground mb-6">{t("Comprehensive training programs and ongoing support to maximize the value of your voice AI investment.")}</p>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>{t("Team training")}</li>
                            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>{t("24 / 7 support")}</li>
                            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>{t("Best practices")}</li>
                        </ul>
                    </div>
                </ScrollFade>

                <ScrollFade delay={400}>
                    <div className="group p-8 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <span className="text-2xl">📊</span>
                        </div>
                        <h3 className="text-xl font-bold mb-4">{t("Analytics & Insights")}</h3>
                        <p className="text-muted-foreground mb-6">{t("Advanced analytics and reporting to help you understand and optimize your voice AI performance.")}</p>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>{t("Usage analytics")}</li>
                            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>{t("Performance metrics")}</li>
                            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>{t("Custom reports")}</li>
                        </ul>
                    </div>
                </ScrollFade>

                <ScrollFade delay={500}>
                    <div className="group p-8 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <span className="text-2xl">🚀</span>
                        </div>
                        <h3 className="text-xl font-bold mb-4">{t("Consulting")}</h3>
                        <p className="text-muted-foreground mb-6">{t("Strategic consulting to help you identify opportunities and develop a voice AI roadmap for your organization.")}</p>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>{t("Strategy development")}</li>
                            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>{t("ROI analysis")}</li>
                            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>{t("Technology roadmap")}</li>
                        </ul>
                    </div>
                </ScrollFade>

                <ScrollFade delay={600}>
                    <div className="group p-8 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-indigo-500 to-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <span className="text-2xl">🔒</span>
                        </div>
                        <h3 className="text-xl font-bold mb-4">{t("Security & Compliance")}</h3>
                        <p className="text-muted-foreground mb-6">{t("Ensure your voice AI implementations meet the highest security standards and regulatory requirements.")}</p>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>{t("Security audits")}</li>
                            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>{t("Compliance guidance")}</li>
                            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>{t("Data protection")}</li>
                        </ul>
                    </div>
                </ScrollFade>
            </div>
        </div>
    );
};

export default Services;
