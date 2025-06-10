
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

const Products = () => {
  const { t } = useTranslation();

  const products = [
    {
      id: 'stt',
      title: t('products.stt.title'),
      description: t('products.stt.description'),
      features: ['Real-time transcription', 'Multi-language support', 'Custom vocabulary', 'High accuracy rates'],
      gradient: 'from-blue-500 to-blue-600',
      icon: '🎙️'
    },
    {
      id: 'tts',
      title: t('products.tts.title'),
      description: t('products.tts.description'),
      features: ['Natural voice synthesis', 'Multiple voice options', 'Emotion control', 'SSML support'],
      gradient: 'from-purple-500 to-purple-600',
      icon: '🔊'
    },
    {
      id: 'watermarking',
      title: t('products.watermarking.title'),
      description: t('products.watermarking.description'),
      features: ['Invisible watermarks', 'Copyright protection', 'Tamper detection', 'Batch processing'],
      gradient: 'from-green-500 to-green-600',
      icon: '🔒'
    },
    {
      id: 'authentication',
      title: t('products.authentication.title'),
      description: t('products.authentication.description'),
      features: ['Biometric security', 'Anti-spoofing', 'Fast verification', 'Cross-platform'],
      gradient: 'from-orange-500 to-orange-600',
      icon: '🛡️'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {t('products.title')}
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover our comprehensive suite of AI-powered voice technologies designed to revolutionize how you interact with audio content.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {products.map((product, index) => (
          <div key={product.id} className="group relative overflow-hidden rounded-2xl border bg-card hover:shadow-2xl transition-all duration-500">
            <div className="p-8">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${product.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-2xl">{product.icon}</span>
              </div>
              
              <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">{product.description}</p>
              
              <div className="space-y-3 mb-8">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex space-x-3">
                <Button className={`bg-gradient-to-r ${product.gradient} hover:opacity-90`}>
                  Learn More
                </Button>
                <Button variant="outline">
                  Try Demo
                </Button>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 rounded-full bg-gradient-to-br from-primary/5 to-transparent group-hover:scale-150 transition-transform duration-700"></div>
          </div>
        ))}
      </div>

      {/* Integration Section */}
      <section className="mt-20 text-center">
        <h2 className="text-4xl font-bold mb-8">Easy Integration</h2>
        <div className="bg-muted/30 rounded-2xl p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center mx-auto">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="font-semibold">Choose Your API</h3>
              <p className="text-muted-foreground text-sm">Select the voice AI service that fits your needs</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-purple-500 flex items-center justify-center mx-auto">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="font-semibold">Integrate</h3>
              <p className="text-muted-foreground text-sm">Use our simple REST APIs or SDKs</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-green-500 flex items-center justify-center mx-auto">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="font-semibold">Scale</h3>
              <p className="text-muted-foreground text-sm">Deploy and scale your voice-enabled applications</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
