import React from 'react';
import ScrollFade from '@/components/ui/scroll-fade';

const TestScrollFade = () => {
  return (
    <div className="container mx-auto px-4 py-12 space-y-8">
      <ScrollFade>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Scroll Fade Test</h1>
          <p className="text-lg text-muted-foreground">This page demonstrates the scroll fade effect</p>
        </div>
      </ScrollFade>

      <ScrollFade delay={200}>
        <div className="bg-card p-8 rounded-lg border">
          <h2 className="text-2xl font-bold mb-4">Section 1</h2>
          <p>This section will fade in with a 200ms delay.</p>
        </div>
      </ScrollFade>

      <ScrollFade delay={400}>
        <div className="bg-card p-8 rounded-lg border">
          <h2 className="text-2xl font-bold mb-4">Section 2</h2>
          <p>This section will fade in with a 400ms delay.</p>
        </div>
      </ScrollFade>

      <ScrollFade delay={600}>
        <div className="bg-card p-8 rounded-lg border">
          <h2 className="text-2xl font-bold mb-4">Section 3</h2>
          <p>This section will fade in with a 600ms delay.</p>
        </div>
      </ScrollFade>

      <ScrollFade delay={800}>
        <div className="bg-card p-8 rounded-lg border">
          <h2 className="text-2xl font-bold mb-4">Section 4</h2>
          <p>This section will fade in with a 800ms delay.</p>
        </div>
      </ScrollFade>

      <ScrollFade delay={1000}>
        <div className="bg-card p-8 rounded-lg border">
          <h2 className="text-2xl font-bold mb-4">Section 5</h2>
          <p>This section will fade in with a 1000ms delay.</p>
        </div>
      </ScrollFade>
    </div>
  );
};

export default TestScrollFade; 