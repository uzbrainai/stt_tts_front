import React, { useEffect, useRef, useState } from 'react';

interface ScrollFadeProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
}

const ScrollFade: React.FC<ScrollFadeProps> = ({
  children,
  className = '',
  threshold = 0.1,
  delay = 0,
  direction = 'up',
  duration = 800
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, hasAnimated]);

  const getTransformValue = () => {
    switch (direction) {
      case 'up':
        return 'translateY(30px)';
      case 'down':
        return 'translateY(-30px)';
      case 'left':
        return 'translateX(30px)';
      case 'right':
        return 'translateX(-30px)';
      default:
        return 'none';
    }
  };

  const baseClasses = 'transition-all duration-700 ease-out';
  const transformClasses = direction !== 'none' ? 'transform' : '';
  
  const animationClasses = isVisible
    ? 'opacity-100 translate-y-0 translate-x-0'
    : `opacity-0 ${getTransformValue()}`;

  return (
    <div
      ref={ref}
      className={`${baseClasses} ${transformClasses} ${animationClasses} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`
      }}
    >
      {children}
    </div>
  );
};

export default ScrollFade; 