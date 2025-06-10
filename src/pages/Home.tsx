
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Link to="/products">{t('hero.cta')}</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t('products.title')}</h2>
          <p className="text-xl text-muted-foreground">Cutting-edge AI voice technologies for the modern world</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="group p-6 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300 hover:border-blue-500/50">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="text-white font-bold">STT</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">{t('products.stt.title')}</h3>
            <p className="text-muted-foreground">{t('products.stt.description')}</p>
          </div>

          <div className="group p-6 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300 hover:border-purple-500/50">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="text-white font-bold">TTS</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">{t('products.tts.title')}</h3>
            <p className="text-muted-foreground">{t('products.tts.description')}</p>
          </div>

          <div className="group p-6 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300 hover:border-green-500/50">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="text-white font-bold">WM</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">{t('products.watermarking.title')}</h3>
            <p className="text-muted-foreground">{t('products.watermarking.description')}</p>
          </div>

          <div className="group p-6 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300 hover:border-orange-500/50">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="text-white font-bold">VA</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">{t('products.authentication.title')}</h3>
            <p className="text-muted-foreground">{t('products.authentication.description')}</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/30">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Why Choose Our Voice AI Solutions?</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">High Accuracy</h3>
                    <p className="text-muted-foreground">Industry-leading accuracy rates with advanced AI models</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Real-time Processing</h3>
                    <p className="text-muted-foreground">Low-latency processing for live applications</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Multilingual Support</h3>
                    <p className="text-muted-foreground">Support for 50+ languages and dialects</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-8 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">🎤</div>
                  <h3 className="text-2xl font-bold mb-2">Voice AI Technology</h3>
                  <p className="opacity-90">Powered by advanced machine learning</p>
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
