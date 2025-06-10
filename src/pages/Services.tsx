
import React from 'react';

const Services = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Our Services
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Comprehensive voice AI services tailored to your business needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="group p-8 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <span className="text-2xl">🎯</span>
          </div>
          <h3 className="text-xl font-bold mb-4">Custom Development</h3>
          <p className="text-muted-foreground mb-6">Tailored voice AI solutions designed specifically for your unique business requirements and use cases.</p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Custom model training</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Integration support</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Performance optimization</li>
          </ul>
        </div>

        <div className="group p-8 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <span className="text-2xl">🔧</span>
          </div>
          <h3 className="text-xl font-bold mb-4">Implementation</h3>
          <p className="text-muted-foreground mb-6">End-to-end implementation services to seamlessly integrate voice AI into your existing systems.</p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>System analysis</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>API integration</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Testing & deployment</li>
          </ul>
        </div>

        <div className="group p-8 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <span className="text-2xl">🎓</span>
          </div>
          <h3 className="text-xl font-bold mb-4">Training & Support</h3>
          <p className="text-muted-foreground mb-6">Comprehensive training programs and ongoing support to maximize the value of your voice AI investment.</p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Team training</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>24/7 support</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Best practices</li>
          </ul>
        </div>

        <div className="group p-8 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <span className="text-2xl">📊</span>
          </div>
          <h3 className="text-xl font-bold mb-4">Analytics & Insights</h3>
          <p className="text-muted-foreground mb-6">Advanced analytics and reporting to help you understand and optimize your voice AI performance.</p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Usage analytics</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Performance metrics</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Custom reports</li>
          </ul>
        </div>

        <div className="group p-8 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <span className="text-2xl">🚀</span>
          </div>
          <h3 className="text-xl font-bold mb-4">Consulting</h3>
          <p className="text-muted-foreground mb-6">Strategic consulting to help you identify opportunities and develop a voice AI roadmap for your organization.</p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Strategy development</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>ROI analysis</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Technology roadmap</li>
          </ul>
        </div>

        <div className="group p-8 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-indigo-500 to-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <span className="text-2xl">🔒</span>
          </div>
          <h3 className="text-xl font-bold mb-4">Security & Compliance</h3>
          <p className="text-muted-foreground mb-6">Ensure your voice AI implementations meet the highest security standards and regulatory requirements.</p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Security audits</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Compliance guidance</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Data protection</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
