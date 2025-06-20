
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Home = () => {
  const { t } = useTranslation();

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
              <Button size="lg" asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 w-full sm:w-auto">
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
          <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">{t('products.title')}</h2>
          <p className="text-lg md:text-xl text-muted-foreground">{t('products.description')}</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <div className="group p-4 md:p-6 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300 hover:border-blue-500/50">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="text-white font-bold text-sm">STT</span>
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2">{t('products.stt.title')}</h3>
            <p className="text-muted-foreground text-sm md:text-base">{t('products.stt.description')}</p>
          </div>

          <div className="group p-4 md:p-6 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300 hover:border-purple-500/50">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="text-white font-bold text-sm">TTS</span>
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2">{t('products.tts.title')}</h3>
            <p className="text-muted-foreground text-sm md:text-base">{t('products.tts.description')}</p>
          </div>

          <div className="group p-4 md:p-6 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300 hover:border-green-500/50">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="text-white font-bold text-sm">WM</span>
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2">{t('products.watermarking.title')}</h3>
            <p className="text-muted-foreground text-sm md:text-base">{t('products.watermarking.description')}</p>
          </div>

          <div className="group p-4 md:p-6 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300 hover:border-orange-500/50">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6 order-2 lg:order-1">
              <h2 className="text-2xl md:text-4xl font-bold">{t("question.text")}</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm md:text-base">{t("question.v1.title")}</h3>
                    <p className="text-muted-foreground text-sm md:text-base">{t("question.v1.description")}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm md:text-base">{t("question.v2.title")}</h3>
                    <p className="text-muted-foreground text-sm md:text-base">{t("question.v2.description")}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm md:text-base">{t("question.v3.title")}</h3>
                    <p className="text-muted-foreground text-sm md:text-base">{t("question.v3.description")}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-6 md:p-8 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-4xl md:text-6xl mb-4">🎤</div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{t("question.banner.title")}</h3>
                  <p className="opacity-90 text-sm md:text-base">{t("question.banner.description")}</p>
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
