
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Tag } from 'lucide-react';

const ArticleView = () => {
  const { id } = useParams();

  // Mock data - in a real app, this would come from an API or database
  const articles = [
    {
      id: 1,
      title: "The Future of Voice Authentication: Beyond Passwords",
      excerpt: "Explore how voice biometrics are revolutionizing digital security and replacing traditional authentication methods.",
      content: `
        <p>In an era where cybersecurity threats are evolving at an unprecedented pace, traditional password-based authentication is proving increasingly inadequate. Voice biometrics represents a paradigm shift in how we approach digital security, offering a more natural, secure, and user-friendly alternative to conventional authentication methods.</p>
        
        <h2>The Problem with Passwords</h2>
        <p>Despite decades of security awareness campaigns, password-related vulnerabilities remain one of the most significant security risks facing organizations today. Users continue to create weak passwords, reuse them across multiple platforms, and fall victim to phishing attacks. The average person manages over 100 online accounts, making it virtually impossible to maintain unique, strong passwords for each service.</p>
        
        <h2>Voice Biometrics: A Natural Solution</h2>
        <p>Voice biometrics leverages the unique characteristics of an individual's voice to verify their identity. Unlike passwords, which can be forgotten, stolen, or shared, your voice is inherently personal and difficult to replicate convincingly.</p>
        
        <h3>Key Advantages:</h3>
        <ul>
          <li><strong>Uniqueness:</strong> Every person's voice has distinctive characteristics including pitch, tone, cadence, and accent</li>
          <li><strong>Convenience:</strong> No need to remember complex passwords or carry physical tokens</li>
          <li><strong>Accessibility:</strong> Works for users with visual impairments or mobility issues</li>
          <li><strong>Multi-factor ready:</strong> Can be combined with other biometric factors for enhanced security</li>
        </ul>
        
        <h2>Technical Implementation</h2>
        <p>Modern voice authentication systems use advanced machine learning algorithms to create a unique "voiceprint" for each user. This process involves:</p>
        
        <ol>
          <li><strong>Enrollment:</strong> The user speaks a predetermined phrase multiple times to create their baseline voiceprint</li>
          <li><strong>Feature extraction:</strong> The system analyzes various acoustic properties of the speech signal</li>
          <li><strong>Model creation:</strong> Machine learning algorithms create a unique mathematical model representing the user's voice</li>
          <li><strong>Authentication:</strong> Subsequent voice samples are compared against the stored model</li>
        </ol>
        
        <h2>Challenges and Considerations</h2>
        <p>While voice biometrics offers significant advantages, there are important considerations to address:</p>
        
        <h3>Environmental Factors</h3>
        <p>Background noise, poor audio quality, and acoustic environments can affect authentication accuracy. Modern systems incorporate noise reduction and adaptive algorithms to mitigate these challenges.</p>
        
        <h3>Health and Aging</h3>
        <p>Temporary illnesses, aging, and permanent voice changes must be accounted for in system design. Adaptive learning algorithms can help maintain accuracy over time.</p>
        
        <h3>Spoofing Attacks</h3>
        <p>While sophisticated voice synthesis technology poses a theoretical threat, liveness detection and anti-spoofing measures continue to evolve to counter these risks.</p>
        
        <h2>The Road Ahead</h2>
        <p>As voice biometric technology continues to mature, we can expect to see widespread adoption across various industries. From banking and healthcare to smart homes and automotive systems, voice authentication is poised to become a cornerstone of future security infrastructure.</p>
        
        <p>The key to successful implementation lies in understanding that voice biometrics is not just a technology upgrade—it's a fundamental shift toward more human-centered security design.</p>
      `,
      author: "Dr. Sarah Chen",
      readTime: "8 min read",
      date: "December 5, 2024",
      category: "Security",
      tags: ["Authentication", "Biometrics", "Security"],
      image: "🔐"
    },
    {
      id: 2,
      title: "Understanding Voice Watermarking: Protecting Audio Content in the AI Era",
      excerpt: "A comprehensive guide to digital audio watermarking and its crucial role in combating AI-generated content fraud.",
      content: `
        <p>As artificial intelligence capabilities in audio generation reach unprecedented levels of sophistication, the need for robust content protection mechanisms has never been more critical. Voice watermarking emerges as a essential technology for maintaining content authenticity and protecting intellectual property in our increasingly digital world.</p>
        
        <h2>What is Voice Watermarking?</h2>
        <p>Voice watermarking is a digital rights management technique that embeds imperceptible identifying information directly into audio content. Think of it as a digital fingerprint that remains with the audio file regardless of how it's processed, compressed, or transmitted.</p>
        
        <h2>The Technology Behind Watermarking</h2>
        <p>Modern voice watermarking systems employ sophisticated signal processing techniques to embed data within the audio signal itself:</p>
        
        <h3>Frequency Domain Embedding</h3>
        <p>Watermarks are often embedded in specific frequency ranges that are less perceptible to human hearing, ensuring the audio quality remains uncompromised while maintaining the watermark's integrity.</p>
        
        <h3>Spread Spectrum Techniques</h3>
        <p>Similar to GPS and cellular communications, spread spectrum watermarking distributes the watermark signal across multiple frequencies, making it extremely difficult to remove without destroying the original audio.</p>
        
        <h3>Psychoacoustic Modeling</h3>
        <p>By leveraging our understanding of human hearing perception, watermarking systems can hide information in audio components that the human ear naturally masks or ignores.</p>
        
        <h2>Applications and Use Cases</h2>
        
        <h3>Content Protection</h3>
        <p>Media companies use watermarking to track unauthorized distribution of copyrighted audio content, enabling them to identify and take action against piracy.</p>
        
        <h3>AI-Generated Content Detection</h3>
        <p>With the rise of sophisticated voice synthesis, watermarking helps distinguish between human-recorded and AI-generated audio, crucial for combating deepfake audio attacks.</p>
        
        <h3>Broadcast Monitoring</h3>
        <p>Radio and streaming services use watermarking to monitor airplay, track royalty obligations, and gather audience analytics.</p>
        
        <h3>Forensic Applications</h3>
        <p>Law enforcement and legal professionals rely on audio watermarking for evidence integrity verification and chain of custody documentation.</p>
        
        <h2>Challenges in Implementation</h2>
        
        <h3>Robustness vs. Imperceptibility</h3>
        <p>The fundamental challenge lies in creating watermarks that are both completely inaudible and resilient to various forms of audio processing and attacks.</p>
        
        <h3>Compression Survival</h3>
        <p>With most audio content distributed in compressed formats like MP3 or AAC, watermarks must survive lossy compression while maintaining their detectability.</p>
        
        <h3>Real-time Processing</h3>
        <p>Live broadcasting and streaming applications require watermarking systems capable of real-time embedding and detection without introducing latency.</p>
        
        <h2>Future Developments</h2>
        <p>The future of voice watermarking lies in AI-enhanced systems that can adapt to new threats and audio processing techniques. Machine learning algorithms are being developed to create more robust watermarks that can survive even sophisticated removal attempts.</p>
        
        <h3>Blockchain Integration</h3>
        <p>Emerging approaches combine watermarking with blockchain technology to create immutable records of content ownership and distribution history.</p>
        
        <h3>Multi-modal Watermarking</h3>
        <p>Future systems may embed watermarks across multiple media types simultaneously, creating cross-referenced protection schemes that are exponentially more difficult to circumvent.</p>
        
        <h2>Conclusion</h2>
        <p>As we navigate the challenges of an AI-driven content landscape, voice watermarking stands as a crucial guardian of authenticity and intellectual property rights. The technology continues to evolve, adapting to new threats while maintaining the delicate balance between protection and user experience.</p>
      `,
      author: "Michael Rodriguez",
      readTime: "12 min read",
      date: "November 30, 2024",
      category: "Technology",
      tags: ["Watermarking", "Copyright", "AI"],
      image: "🌊"
    }
  ];

  const article = articles.find(item => item.id === parseInt(id || '1'));

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
        <Link to="/articles" className="text-primary hover:underline">
          ← Back to Articles
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Link 
        to="/articles" 
        className="inline-flex items-center gap-2 text-primary hover:underline mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Articles
      </Link>

      <article className="prose prose-lg max-w-none dark:prose-invert">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-4xl">{article.image}</span>
          <span className="inline-flex items-center gap-1 text-sm font-medium px-3 py-1 rounded-full bg-accent text-accent-foreground">
            <Tag className="h-3 w-3" />
            {article.category}
          </span>
        </div>

        <h1 className="text-4xl font-bold mb-6 leading-tight">
          {article.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6 not-prose">
          <div className="flex items-center gap-1">
            <User className="h-4 w-4" />
            <span>{article.author}</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <time>{article.date}</time>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{article.readTime}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8 not-prose">
          {article.tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>

        <div 
          className="prose-content"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </article>

      <div className="mt-12 pt-8 border-t">
        <Link 
          to="/articles" 
          className="inline-flex items-center gap-2 text-primary hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to all articles
        </Link>
      </div>
    </div>
  );
};

export default ArticleView;
