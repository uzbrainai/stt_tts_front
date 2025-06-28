
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';

const NewsView = () => {
  const { id } = useParams();

  // Mock data - in a real app, this would come from an API or database
  const newsItems = [
    {
      id: 1,
      title: "VoiceAI Announces Major Breakthrough in Real-Time Voice Translation",
      excerpt: "Our latest AI model achieves 98% accuracy in real-time multilingual voice translation, supporting 50+ languages.",
      content: `
        <p>We are excited to announce a major breakthrough in our real-time voice translation technology. Our latest AI model has achieved an unprecedented 98% accuracy rate in multilingual voice translation, supporting over 50 languages including rare dialects and regional variations.</p>
        
        <p>This breakthrough represents years of research and development in neural network architectures, acoustic modeling, and cross-lingual transfer learning. Our team has developed a novel approach that combines transformer-based models with advanced noise reduction algorithms to deliver crystal-clear translations even in challenging acoustic environments.</p>
        
        <h3>Key Features:</h3>
        <ul>
          <li>Support for 50+ languages and dialects</li>
          <li>Real-time processing with less than 200ms latency</li>
          <li>Advanced noise cancellation and echo suppression</li>
          <li>Context-aware translation for improved accuracy</li>
          <li>Seamless integration with existing voice systems</li>
        </ul>
        
        <p>The technology is already being tested by several enterprise clients in the telecommunications and hospitality industries, with overwhelmingly positive feedback. We expect to make this feature available to all customers by Q1 2025.</p>
        
        <p>"This breakthrough will revolutionize how people communicate across language barriers," said Dr. Sarah Chen, our Chief Technology Officer. "We're not just translating words; we're preserving the intent, emotion, and cultural context that makes human communication so rich."</p>
      `,
      date: "December 1, 2024",
      category: "Product Update",
      image: "🌐",
      author: "VoiceAI Team",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Partnership with Leading Healthcare Provider",
      excerpt: "VoiceAI partners with HealthTech Inc. to implement voice-enabled patient documentation systems.",
      content: `
        <p>We are thrilled to announce our strategic partnership with HealthTech Inc., a leading healthcare technology provider, to revolutionize patient documentation through advanced voice recognition technology.</p>
        
        <p>This partnership will bring our cutting-edge speech-to-text technology directly into hospitals and clinics, enabling healthcare professionals to document patient interactions more efficiently and accurately than ever before.</p>
        
        <h3>Partnership Highlights:</h3>
        <ul>
          <li>Integration with existing Electronic Health Record (EHR) systems</li>
          <li>HIPAA-compliant voice processing and storage</li>
          <li>Medical terminology optimization for 99.5% accuracy</li>
          <li>Real-time transcription during patient consultations</li>
          <li>Automated clinical note generation</li>
        </ul>
        
        <p>The initial rollout will begin with three major hospital systems, covering over 200 healthcare facilities across the United States. Early pilot programs have shown a 40% reduction in documentation time and a 25% increase in patient interaction quality.</p>
        
        <p>"Healthcare providers spend too much time on paperwork and not enough time with patients," said Michael Rodriguez, VP of Partnerships. "Our technology gives doctors back the time they need to focus on what matters most - patient care."</p>
      `,
      date: "November 28, 2024",
      category: "Partnership",
      image: "🏥",
      author: "Michael Rodriguez",
      readTime: "4 min read"
    }
  ];

  const newsItem = newsItems[0];

  if (!newsItem) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">News Article Not Found</h1>
        <Link to="/news" className="text-primary hover:underline">
          ← Back to News
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Link 
        to="/news" 
        className="inline-flex items-center gap-2 text-primary hover:underline mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to News
      </Link>

      <article className="prose prose-lg max-w-none dark:prose-invert">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-4xl">{newsItem.image}</span>
          <span className="inline-flex items-center gap-1 text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
            <Tag className="h-3 w-3" />
            {newsItem.category}
          </span>
        </div>

        <h1 className="text-4xl font-bold mb-6 leading-tight">
          {newsItem.title}
        </h1>

        <div className="flex items-center gap-4 text-muted-foreground mb-8 not-prose">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <time>{newsItem.date}</time>
          </div>
          <span>•</span>
          <span>{newsItem.author}</span>
          <span>•</span>
          <span>{newsItem.readTime}</span>
        </div>

        <div 
          className="prose-content"
          dangerouslySetInnerHTML={{ __html: newsItem.content }}
        />
      </article>

      <div className="mt-12 pt-8 border-t">
        <Link 
          to="/news" 
          className="inline-flex items-center gap-2 text-primary hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to all news
        </Link>
      </div>
    </div>
  );
};

export default NewsView;
