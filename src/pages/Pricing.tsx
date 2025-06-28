import React, {useState} from 'react';
import {Button} from '@/components/ui/button';
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import {useAuthStore} from "@/store/authStore";

const Pricing = () => {
    const {t} = useTranslation();
    const navigate = useNavigate();
    const {isAuth} = useAuthStore();
    const [priceType, setPriceType] = useState<"month" | "annual">("month")

    const plans = {
        month: [
            {
                name: "Starter",
                price: "$29",
                period: "per month",
                description: "Perfect for small projects and developers getting started",
                features: [
                    "1,000 STT minutes/month",
                    "500 TTS requests/month",
                    "Basic voice authentication",
                    "Email support",
                    "API access",
                    "Basic analytics"
                ],
                popular: false,
                gradient: "from-blue-500 to-blue-600"
            },
            {
                name: "Professional",
                price: "$99",
                period: "per month",
                description: "Ideal for growing businesses and production applications",
                features: [
                    "10,000 STT minutes/month",
                    "5,000 TTS requests/month",
                    "Advanced voice authentication",
                    "Voice watermarking (1,000 files)",
                    "Priority support",
                    "Advanced analytics",
                    "Custom vocabulary",
                    "99.9% SLA"
                ],
                popular: true,
                gradient: "from-purple-500 to-purple-600"
            },
            {
                name: "Enterprise",
                price: "Custom",
                period: "contact us",
                description: "Tailored solutions for large-scale deployments",
                features: [
                    "Unlimited STT/TTS usage",
                    "Custom model training",
                    "On-premises deployment",
                    "24/7 dedicated support",
                    "Custom integrations",
                    "Advanced security features",
                    "White-label solutions",
                    "SLA guarantees"
                ],
                popular: false,
                gradient: "from-green-500 to-green-600"
            }
        ],
        annual: [
            {
                name: "Starter",
                price: "$24",
                period: "per month/year",
                description: "Perfect for small projects and developers getting started",
                features: [
                    "1,000 STT minutes/month",
                    "500 TTS requests/month",
                    "Basic voice authentication",
                    "Email support",
                    "API access",
                    "Basic analytics"
                ],
                popular: false,
                gradient: "from-blue-500 to-blue-600"
            },
            {
                name: "Professional",
                price: "$79",
                period: "per month/year",
                description: "Ideal for growing businesses and production applications",
                features: [
                    "10,000 STT minutes/month",
                    "5,000 TTS requests/month",
                    "Advanced voice authentication",
                    "Voice watermarking (1,000 files)",
                    "Priority support",
                    "Advanced analytics",
                    "Custom vocabulary",
                    "99.9% SLA"
                ],
                popular: true,
                gradient: "from-purple-500 to-purple-600"
            },
            {
                name: "Enterprise",
                price: "Custom",
                period: "contact us",
                description: "Tailored solutions for large-scale deployments",
                features: [
                    "Unlimited STT/TTS usage",
                    "Custom model training",
                    "On-premises deployment",
                    "24/7 dedicated support",
                    "Custom integrations",
                    "Advanced security features",
                    "White-label solutions",
                    "SLA guarantees"
                ],
                popular: false,
                gradient: "from-green-500 to-green-600"
            }
        ]
    };

    const addOns = [
        {
            name: "Extra STT Minutes",
            price: "$0.02",
            unit: "per minute",
            description: "Additional speech-to-text processing minutes"
        },
        {
            name: "Extra TTS Requests",
            price: "$0.05",
            unit: "per request",
            description: "Additional text-to-speech synthesis requests"
        },
        {
            name: "Voice Watermarking",
            price: "$0.10",
            unit: "per file",
            description: "Audio watermarking for content protection"
        },
        {
            name: "Premium Voices",
            price: "$19",
            unit: "per voice/month",
            description: "Access to high-quality premium voice models"
        }
    ];

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-16">
                <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {t("Simple, Transparent Pricing")}
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    {t("Choose the perfect plan for your voice AI needs. Scale up or down anytime with no long-term commitments.")}
                </p>
            </div>

            {/* Pricing Toggle */}
            <div className="flex justify-center mb-12">
                <div className="bg-muted rounded-lg p-1 flex">
                    <button
                        onClick={() => setPriceType("month")}
                        className={`${priceType === "month" ? "px-6 py-2 rounded-md bg-background text-foreground font-medium" : "px-6 py-2 rounded-md text-muted-foreground font-medium hover:text-foreground"} transition-all`}>
                        {t("Monthly")}
                    </button>
                    <button
                        onClick={() => setPriceType("annual")}
                        className={`${priceType === "annual" ? "px-6 py-2 rounded-md bg-background text-foreground font-medium" : "px-6 py-2 rounded-md text-muted-foreground font-medium hover:text-foreground"} transition-all`}>
                        {t("Annual")} <span className="text-green-500 text-sm ml-1">{t("Save 20%")}</span>
                    </button>
                </div>
            </div>

            {/* Pricing Plans */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
                {plans?.[priceType]?.map((plan, index) => (
                    <div
                        key={plan.name}
                        className={`relative rounded-2xl border bg-card p-8 ${
                            plan.popular
                                ? 'border-primary shadow-2xl scale-105 bg-gradient-to-b from-background to-primary/5'
                                : 'hover:shadow-lg'
                        } transition-all duration-300`}
                    >
                        {plan.popular && (
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                <span
                                    className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                                  {t("Most Popular")}
                                </span>
                            </div>
                        )}

                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold mb-2">{t(plan.name)}</h3>
                            <div className="mb-4">
                                <span className="text-4xl font-bold">{plan.price}</span>
                                <span className="text-muted-foreground ml-2">{t(plan.period)}</span>
                            </div>
                            <p className="text-muted-foreground">{t(plan.description)}</p>
                        </div>

                        <ul className="space-y-3 mb-8">
                            {plan.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center">
                                    <div
                                        className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mr-3">
                                        <span className="text-white text-xs">✓</span>
                                    </div>
                                    <span className="text-sm">{t(feature)}</span>
                                </li>
                            ))}
                        </ul>

                        <Button
                            className={`w-full ${
                                plan.popular
                                    ? `bg-gradient-to-r ${plan.gradient} hover:opacity-90`
                                    : ''
                            }`}
                            variant={plan.popular ? "default" : "outline"}
                        >
                            {plan.name === "Enterprise" ? t("Contact Sales") : t("Get Started")}
                        </Button>
                    </div>
                ))}
            </div>

            {/* Add-ons */}
            <section className="mb-20">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">{t("Add - ons & Extensions")}</h2>
                    <p className="text-xl text-muted-foreground">
                        {t("Enhance your plan with additional features and capacity")}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {addOns.map((addon, index) => (
                        <div key={index}
                             className="rounded-2xl border bg-card p-6 hover:shadow-lg transition-all duration-300">
                            <h3 className="font-bold mb-2">{t(addon.name)}</h3>
                            <div className="mb-3">
                                <span className="text-2xl font-bold text-primary">{addon.price}</span>
                                <span className="text-muted-foreground text-sm ml-1">{t(addon.unit)}</span>
                            </div>
                            <p className="text-sm text-muted-foreground">{t(addon.description)}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ */}
            <section className="mb-20">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">{t("Frequently Asked Questions")}</h2>
                </div>

                <div className="max-w-3xl mx-auto space-y-6">
                    {[
                        {
                            question: "Can I change my plan anytime?",
                            answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and billing is prorated."
                        },
                        {
                            question: "What happens if I exceed my usage limits?",
                            answer: "You'll be automatically charged for overage according to our add-on pricing. You can also set usage alerts to monitor consumption."
                        },
                        {
                            question: "Do you offer custom enterprise solutions?",
                            answer: "Absolutely! Our Enterprise plan includes custom solutions, dedicated support, and flexible deployment options including on-premises."
                        },
                        {
                            question: "Is there a free trial available?",
                            answer: "Yes, we offer a 14-day free trial with access to all Professional plan features. No credit card required to start."
                        }
                    ].map((faq, index) => (
                        <div key={index} className="rounded-2xl border bg-card p-6">
                            <h3 className="font-bold mb-2">{t(faq.question)}</h3>
                            <p className="text-muted-foreground">{t(faq.answer)}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="text-center">
                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4">{t("Ready to Get Started?")}</h2>
                    <p className="text-muted-foreground mb-6">
                        {t("Start your free trial today and experience the power of advanced voice AI technology.")}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button onClick={() => {
                            navigate(isAuth ? "/dashboard" : "/login")
                        }} size="lg"
                                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                            {t("Start Free Trial")}
                        </Button>
                        {/*<Button size="lg" variant="outline">*/}
                        {/*    {t("Schedule Demo")}*/}
                        {/*</Button>*/}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Pricing;
