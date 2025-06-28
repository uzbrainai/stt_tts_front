import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';

const Contact = () => {
    const {t} = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle form submission logic here
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-16">
                <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {t('nav.contact')}
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    {t("Get in touch with our team to discuss your voice AI needs and discover how we can help transform your business.")}
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="space-y-8">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">{t("Send us a Message")}</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="name">{t("Full Name")} *</Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="mt-1"
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="email">{t("Email Address")} *</Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="mt-1"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="company">{t("Company")}</Label>
                                    <Input
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="mt-1"
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="phone">{t("Phone Number")}</Label>
                                    <Input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="mt-1"
                                    />
                                </div>
                            </div>

                            <div>
                                <Label htmlFor="subject">{t("Subject")} *</Label>
                                <select
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                >
                                    <option value="">{t("Select a subject")}</option>
                                    <option value="general">{t("General Inquiry")}</option>
                                    <option value="sales">Sales & Pricing</option>
                                    <option value="technical">Technical Support</option>
                                    <option value="partnership">Partnership</option>
                                    <option value="enterprise">Enterprise Solutions</option>
                                </select>
                            </div>

                            <div>
                                <Label htmlFor="message">{t("Message")} *</Label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className="mt-1 flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                    placeholder={t("Tell us about your project and how we can help...")}
                                />
                            </div>

                            <Button type="submit"
                                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                                {t("Send Message")}
                            </Button>
                        </form>
                    </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-8">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">{t("Get in Touch")}</h2>
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div
                                    className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                                    <span className="text-white text-xl">📧</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">{t("Email Us")}</h3>
                                    <p className="text-muted-foreground">info@uzbrainai.uz</p>
                                    {/*<p className="text-muted-foreground">sales@voiceai.com</p>*/}
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div
                                    className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
                                    <span className="text-white text-xl">📞</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">{t("Call Us")}</h3>
                                    <p className="text-muted-foreground">+998(91) 234 5678</p>
                                    <p className="text-muted-foreground text-sm">{t("Mon - Fri 09:00-18:00")}</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div
                                    className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
                                    <span className="text-white text-xl">📍</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">{t("Visit Us")}</h3>
                                    <p className="text-muted-foreground">65/14 Yangi Darxon</p>
                                    <p className="text-muted-foreground">Toshkent sh. Yangi hayot</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Office Hours */}
                    <div className="bg-muted/30 rounded-2xl p-6">
                        <h3 className="font-semibold mb-4">{t("Office Hours")}</h3>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span>{t("Monday - Friday")}</span>
                                <span>9:00 - 18:00</span>
                            </div>
                            <div className="flex justify-between">
                                <span>{t("Saturday")}</span>
                                <span>10:00 - 14:00</span>
                            </div>
                            <div className="flex justify-between">
                                <span>{t("Sunday")}</span>
                                <span>{t("Closed")}</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="space-y-4">
                        <h3 className="font-semibold">{t("Quick Actions")}</h3>
                        <div className="grid grid-cols-1 gap-3">
                            <Button variant="outline" className="justify-start h-12">
                                <span className="mr-3">📚</span>
                                {t("Documentation & Guides")}
                            </Button>
                            <Button variant="outline" className="justify-start h-12">
                                <span className="mr-3">🎯</span>
                                {t("Schedule a Demo")}
                            </Button>
                            <Button variant="outline" className="justify-start h-12">
                                <span className="mr-3">💬</span>
                                {t("Live Chat Support")}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <section className="mt-20">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">{t("Frequently Asked Questions")}</h2>
                    <p className="text-muted-foreground">{t("Quick answers to common questions")}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {[
                        {
                            question: "How quickly can I get started?",
                            answer: "You can start using our APIs within minutes of signing up. We provide comprehensive documentation and sample code to get you running quickly."
                        },
                        {
                            question: "Do you offer technical support?",
                            answer: "Yes, we provide 24/7 technical support for all paid plans. Free trial users have access to documentation and community forums."
                        },
                        {
                            question: "Can I customize the voice models?",
                            answer: "Absolutely! Our Enterprise plan includes custom model training and fine-tuning to match your specific requirements and use cases."
                        },
                        {
                            question: "What industries do you serve?",
                            answer: "We serve various industries including healthcare, education, finance, automotive, entertainment, and more. Our solutions are adaptable to any sector."
                        }
                    ].map((faq, index) => (
                        <div key={index} className="rounded-2xl border bg-card p-6">
                            <h3 className="font-semibold mb-3">{t(faq.question)}</h3>
                            <p className="text-muted-foreground text-sm">{t(faq.answer)}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Contact;
