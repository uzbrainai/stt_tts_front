
import React from 'react';

interface WaveAnimationProps {
  className?: string;
  color?: string;
}

const WaveAnimation: React.FC<WaveAnimationProps> = ({ 
  className = "w-16 h-16", 
  color = "text-primary" 
}) => {
  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 100 100"
        className={`w-full h-full ${color}`}
        fill="currentColor"
      >
        {/* Animated waves */}
        <g className="animate-pulse">
          <path
            d="M20,50 Q30,30 40,50 T60,50 T80,50"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="animate-[wave_2s_ease-in-out_infinite]"
          />
          <path
            d="M15,55 Q25,35 35,55 T55,55 T75,55 T95,55"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            opacity="0.7"
            className="animate-[wave_2s_ease-in-out_infinite_0.5s]"
          />
          <path
            d="M10,60 Q20,40 30,60 T50,60 T70,60 T90,60"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            opacity="0.5"
            className="animate-[wave_2s_ease-in-out_infinite_1s]"
          />
        </g>
        
        {/* Central AI core */}
        <circle
          cx="50"
          cy="50"
          r="8"
          className="animate-[pulse_2s_ease-in-out_infinite]"
          opacity="0.8"
        />
        <circle
          cx="50"
          cy="50"
          r="4"
          className="animate-[pulse_1.5s_ease-in-out_infinite_reverse]"
        />
      </svg>
    </div>
  );
};

export default WaveAnimation;
