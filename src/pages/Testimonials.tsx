
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechFlow Solutions",
      avatar: "👩‍💼",
      rating: 5,
      content: "VoiceAI's speech-to-text accuracy is phenomenal. We've integrated it into our customer service platform and seen a 40% improvement in response time. The real-time processing is exactly what we needed.",
      project: "Customer Service Automation"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      role: "Lead Developer",
      company: "HealthTech Innovation",
      avatar: "👨‍⚕️",
      rating: 5,
      content: "The voice authentication system has revolutionized our patient check-in process. It's secure, fast, and patients love the convenience. Implementation was surprisingly smooth.",
      project: "Patient Authentication System"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Product Manager",
      company: "EduConnect",
      avatar: "👩‍🎓",
      rating: 5,
      content: "We use VoiceAI's TTS for our e-learning platform. The natural-sounding voices and multilingual support have significantly improved student engagement across different regions.",
      project: "E-Learning Platform"
    },
    {
      id: 4,
      name: "James Wilson",
      role: "Security Director",
      company: "SecureMedia Corp",
      avatar: "👨‍💻",
      rating: 5,
      content: "Voice watermarking has been a game-changer for protecting our audio content. The invisible watermarks work perfectly, and the detection rate is outstanding. Highly recommended!",
      project: "Content Protection System"
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "Founder",
      company: "StartupVoice",
      avatar: "👩‍🚀",
      rating: 5,
      content: "As a startup, we needed reliable and cost-effective voice AI solutions. VoiceAI's pricing is fair, and their support team has been incredibly helpful throughout our journey.",
      project: "Voice-Enabled App"
    },
    {
      id: 6,
      name: "Robert Thompson",
      role: "Lead Engineer",
      company: "AutoMotive AI",
      avatar: "👨‍🔧",
      rating: 5,
      content: "Integration was seamless thanks to their excellent documentation and APIs. We had our voice commands working in vehicles within days, not weeks. Impressive technology!",
      project: "Vehicle Voice Control"
    }
  ];

  const companies = [
    { name: "TechFlow", logo: "🏢" },
    { name: "HealthTech", logo: "🏥" },
    { name: "EduConnect", logo: "🎓" },
    { name: "SecureMedia", logo: "🔒" },
    { name: "StartupVoice", logo: "🚀" },
    { name: "AutoMotive", logo: "🚗" },
    { name: "FinanceAI", logo: "💳" },
    { name: "RetailTech", logo: "🛍️" }
  ];

  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "99.8%", label: "Uptime" },
    { number: "50M+", label: "API Calls/Month" },
    { number: "4.9/5", label: "Customer Rating" }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          What Our Clients Say
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover how leading companies are transforming their businesses with our voice AI solutions
        </p>
      </div>

      {/* Stats Section */}
      <section className="mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="group rounded-2xl border bg-card p-6 hover:shadow-lg transition-all duration-300">
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-lg">⭐</span>
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-muted-foreground mb-6 italic">
                "{testimonial.content}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                </div>
              </div>

              {/* Project Tag */}
              <div className="mt-4 pt-4 border-t">
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                  {testimonial.project}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Trusted by Leading Companies</h2>
          <p className="text-muted-foreground">
            Join hundreds of companies already using our voice AI solutions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {companies.map((company, index) => (
            <div key={index} className="flex flex-col items-center space-y-2 opacity-60 hover:opacity-100 transition-opacity">
              <div className="text-3xl">{company.logo}</div>
              <div className="text-sm font-medium">{company.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Study Preview */}
      <section className="mb-20">
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Success Story</h2>
              <h3 className="text-xl font-semibold mb-4 text-primary">
                HealthTech Innovation: 50% Reduction in Documentation Time
              </h3>
              <p className="text-muted-foreground mb-6">
                Learn how HealthTech Innovation implemented our voice AI solutions to streamline 
                medical documentation, resulting in significant time savings and improved patient care.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>50% reduction in documentation time</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>99.2% accuracy in medical transcription</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>Improved patient satisfaction scores</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur">
                <div className="text-6xl mb-4">📊</div>
                <div className="text-2xl font-bold mb-2">Download Full Case Study</div>
                <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                  Get Case Study
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Ready to Join Our Success Stories?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Start your voice AI journey today and see why companies trust us with their critical applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all">
              Start Free Trial
            </button>
            <button className="px-8 py-3 border border-border rounded-lg hover:bg-accent transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
