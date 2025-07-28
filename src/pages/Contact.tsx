import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const faqs = [
    {
      question: t('How quickly can I get started?'),
      answer: t('You can start using our APIs within minutes of signing up. We provide comprehensive documentation and sample code to get you running quickly.')
    },
    {
      question: t('Do you offer technical support?'),
      answer: t('Yes, we provide 24/7 technical support for all paid plans. Free trial users have access to documentation and community forums.')
    },
    {
      question: t('Can I customize the voice models?'),
      answer: t('Absolutely! Our Enterprise plan includes custom model training and fine-tuning to match your specific requirements and use cases.')
    },
    {
      question: t('What industries do you serve?'),
      answer: t('We serve various industries including healthcare, education, finance, automotive, entertainment, and more. Our solutions are adaptable to any sector.')
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in">
      {/* Header */}
      <div className="text-center mb-16 animate-fade-in">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {t('nav.contact')}
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {t('Get in touch with our team to discuss your voice AI needs and discover how we can help transform your business.')}
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div className="bg-white dark:bg-card rounded-2xl shadow-xl border border-blue-100 dark:border-blue-900/30 p-8 animate-fade-in">
          <h2 className="text-2xl font-bold mb-6 text-blue-700 dark:text-blue-300">{t('Send us a Message')}</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">{t('Full Name')} *</Label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} required className="mt-1" />
              </div>
              <div>
                <Label htmlFor="email">{t('Email Address')} *</Label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="mt-1" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="company">{t('Company')}</Label>
                <Input id="company" name="company" value={formData.company} onChange={handleChange} className="mt-1" />
              </div>
              <div>
                <Label htmlFor="phone">{t('Phone Number')}</Label>
                <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} className="mt-1" />
              </div>
            </div>
            <div>
              <Label htmlFor="subject">{t('Subject')} *</Label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2"
              >
                <option value="">{t('Select a subject')}</option>
                <option value="general">{t('General Inquiry')}</option>
                <option value="sales">{t('Sales & Pricing')}</option>
                <option value="technical">{t('Technical Support')}</option>
                <option value="partnership">{t('Partnership')}</option>
                <option value="enterprise">{t('Enterprise Solutions')}</option>
              </select>
            </div>
            <div>
              <Label htmlFor="message">{t('Message')} *</Label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="mt-1 flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2"
                placeholder={t('Tell us about your project and how we can help...') as string}
              />
            </div>
            <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg font-semibold py-3">
              {t('Send Message')}
            </Button>
          </form>
        </div>

        {/* Contact Info & Quick Actions */}
        <div className="flex flex-col gap-8 animate-fade-in">
          {/* Contact Info */}
          <div className="bg-white dark:bg-card rounded-2xl shadow-xl border border-purple-100 dark:border-purple-900/30 p-8">
            <h2 className="text-2xl font-bold mb-6 text-purple-700 dark:text-purple-300">{t('Contact Information')}</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                  <span className="text-white text-xl">📧</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{t('Email Us')}</h3>
                  <a href="mailto:info@uzbrainai.uz" className="text-blue-600 hover:underline">info@uzbrainai.uz</a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white text-xl">📞</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{t('Call Us')}</h3>
                  <a href="tel:+998912345678" className="text-purple-600 hover:underline">+998(91) 234 5678</a>
                  <p className="text-muted-foreground text-sm">{t('Mon - Fri 09:00-18:00')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
                  <span className="text-white text-xl">📍</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{t('Visit Us')}</h3>
                  <p className="text-muted-foreground">65/14 Yangi Darxon</p>
                  <p className="text-muted-foreground">Toshkent sh. Yangi hayot</p>
                </div>
              </div>
            </div>
          </div>

          {/* Office Hours */}
          <div className="bg-white dark:bg-card rounded-2xl shadow-xl border border-green-100 dark:border-green-900/30 p-6">
            <h3 className="font-semibold mb-4 text-green-700 dark:text-green-300">{t('Office Hours')}</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>{t('Monday - Friday')}</span>
                <span>9:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span>{t('Saturday')}</span>
                <span>10:00 - 14:00</span>
              </div>
              <div className="flex justify-between">
                <span>{t('Sunday')}</span>
                <span>{t('Closed')}</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white dark:bg-card rounded-2xl shadow-xl border border-orange-100 dark:border-orange-900/30 p-6">
            <h3 className="font-semibold mb-4 text-orange-700 dark:text-orange-300">{t('Quick Actions')}</h3>
            <div className="grid grid-cols-1 gap-3">
              <Button variant="outline" className="justify-start h-12 text-base">
                <span className="mr-3">📚</span>
                {t('Documentation & Guides')}
              </Button>
              <Button variant="outline" className="justify-start h-12 text-base">
                <span className="mr-3">🎯</span>
                {t('Schedule a Demo')}
              </Button>
              <Button variant="outline" className="justify-start h-12 text-base">
                <span className="mr-3">💬</span>
                {t('Live Chat Support')}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="mt-20 animate-fade-in">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{t('Frequently Asked Questions')}</h2>
          <p className="text-muted-foreground">{t('Quick answers to common questions')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl border bg-white dark:bg-card p-6 shadow-md transition-all duration-300 cursor-pointer hover:shadow-xl"
              onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
            >
              <h3 className="font-semibold mb-3 flex items-center">
                <span className="mr-2 text-blue-500">{faqOpen === idx ? '−' : '+'}</span>
                {faq.question}
              </h3>
              <div className={`text-muted-foreground text-sm transition-all duration-300 ${faqOpen === idx ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Contact;
