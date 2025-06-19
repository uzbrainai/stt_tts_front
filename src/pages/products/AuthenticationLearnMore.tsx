
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Fingerprint, Shield, Zap, Users } from 'lucide-react';

const AuthenticationLearnMore = () => {
  const features = [
    {
      title: 'Biometric Security',
      description: 'Unique voice patterns for identification',
      icon: <Fingerprint className="h-6 w-6" />
    },
    {
      title: 'Anti-spoofing',
      description: 'Advanced protection against voice cloning',
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: 'Fast Verification',
      description: 'Authenticate users in under 2 seconds',
      icon: <Zap className="h-6 w-6" />
    },
    {
      title: 'Cross-platform',
      description: 'Works across all devices and platforms',
      icon: <Users className="h-6 w-6" />
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
                <ArrowLeft className="h-4 w-4" />
                Back to Products
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section - Dark Theme */}
      <section className="bg-gradient-to-br from-orange-900 to-red-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center">
                  <span className="text-3xl">🛡️</span>
                </div>
                <h1 className="text-5xl font-bold">Voice Authentication</h1>
              </div>
              <p className="text-xl text-orange-300 mb-8">
                Secure user authentication using unique voice biometrics. Advanced anti-spoofing technology 
                ensures the highest level of security for your applications.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                  Try Free Demo
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-900">
                  View Documentation
                </Button>
              </div>
            </div>
            <div className="bg-orange-800 rounded-2xl p-6">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&h=600" 
                alt="Authentication Dashboard Screenshot"
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
            <h2 className="text-4xl font-bold mb-6">Security Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Next-generation voice authentication with enterprise-grade security
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-orange-100 dark:bg-orange-900 flex items-center justify-center mb-4 text-orange-600 dark:text-orange-400">
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

      {/* Process Flow - Gold Theme */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950 dark:to-yellow-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 dark:text-amber-100">Authentication Process</h2>
            <p className="text-lg text-amber-700 dark:text-amber-200">
              Secure and seamless voice authentication in three simple steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-amber-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4 text-amber-900 dark:text-amber-100">Enrollment</h3>
              <p className="text-amber-700 dark:text-amber-200">
                User speaks a passphrase to create their voice profile
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-amber-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4 text-amber-900 dark:text-amber-100">Verification</h3>
              <p className="text-amber-700 dark:text-amber-200">
                System analyzes voice patterns and biometric features
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-amber-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4 text-amber-900 dark:text-amber-100">Authentication</h3>
              <p className="text-amber-700 dark:text-amber-200">
                Instant access granted upon successful voice match
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Security Performance</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <Card>
              <CardHeader className="text-center">
                <CardTitle>Authentication Speed</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">&lt;2s</div>
                <p className="text-muted-foreground">Average verification time</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="text-center">
                <CardTitle>Accuracy Rate</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">99.9%</div>
                <p className="text-muted-foreground">False acceptance rate</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="text-center">
                <CardTitle>Anti-spoofing</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">99.8%</div>
                <p className="text-muted-foreground">Spoofing detection rate</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="text-center">
                <CardTitle>Languages</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">40+</div>
                <p className="text-muted-foreground">Supported languages</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&h=600" 
                alt="Authentication Use Cases Screenshot"
                className="w-full rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Use Cases</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-orange-100 dark:bg-orange-900 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🏦</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Banking & Finance</h3>
                    <p className="text-muted-foreground">Secure account access and transaction verification</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-orange-100 dark:bg-orange-900 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Mobile Apps</h3>
                    <p className="text-muted-foreground">Convenient hands-free authentication for smartphones</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-orange-100 dark:bg-orange-900 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🏢</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
                    <p className="text-muted-foreground">Secure access to corporate systems and data</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Secure Your Applications</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Implement voice authentication with our secure biometric API. Start protecting your users today.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" variant="secondary">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AuthenticationLearnMore;
