import {FC} from "react";

export const AIAnimation: FC<any> = ({type}) => {
    const animations:any = {
        stt: (
            <>
                <svg width="150" height="60" viewBox="0 0 150 60" className="sound-wave">
                    <g className="transform-gpu" transform-origin="center">
                        <rect x="10" y="5" width="15" height="50" rx="3" fill="#3b82f6"></rect>
                        <rect x="40" y="5" width="15" height="50" rx="3" fill="#3b82f6"></rect>
                        <rect x="70" y="5" width="15" height="50" rx="3" fill="#3b82f6"></rect>
                        <rect x="100" y="5" width="15" height="50" rx="3" fill="#3b82f6"></rect>
                        <rect x="130" y="5" width="15" height="50" rx="3" fill="#3b82f6"></rect>
                    </g>
                </svg>
                <p className="mt-4 text-lg font-semibold tracking-widest">TRANSCRIBING...</p>
            </>
        ),
        tts: (
            <>
                <div className="relative w-24 h-24">
                    <svg className="w-24 h-24 absolute inset-0 tts-anim-icon" style={{animationDelay: '0s'}} fill="none"
                         stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    <svg className="w-24 h-24 absolute inset-0 tts-anim-icon" style={{animationDelay: '1s'}} fill="none"
                         stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.636 18.364a9 9 0 010-12.728m2.828 9.9a5 5 0 010-7.072M12 6v12"></path>
                    </svg>
                </div>
                <p className="mt-4 text-lg font-semibold tracking-widest">SYNTHESIZING...</p>
            </>
        ),
        watermarking: (
            <>
                <div className="relative">
                    <svg width="150" height="60" viewBox="0 0 150 60" className="sound-wave">
                        <rect x="10" y="5" width="15" height="50" rx="3" fill="#6b7280"></rect>
                        <rect x="40" y="5" width="15" height="50" rx="3" fill="#6b7280"></rect>
                        <rect x="70" y="5" width="15" height="50" rx="3" fill="#6b7280"></rect>
                        <rect x="100" y="5" width="15" height="50" rx="3" fill="#6b7280"></rect>
                        <rect x="130" y="5" width="15" height="50" rx="3" fill="#6b7280"></rect>
                    </svg>
                    <svg
                        className="w-16 h-16 text-blue-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shield-icon"
                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                </div>
                <p className="mt-4 text-lg font-semibold tracking-widest">APPLYING WATERMARK...</p>
            </>
        ),
        haqiqiylik: (
            <>
                <div className="relative w-[200px] h-[60px]">
                    <svg width="200" height="60" viewBox="0 0 200 60" className="sound-wave">
                        <rect x="10" y="5" width="15" height="50" rx="3" fill="#6b7280"></rect>
                        <rect x="40" y="5" width="15" height="50" rx="3" fill="#6b7280"></rect>
                        <rect x="70" y="5" width="15" height="50" rx="3" fill="#6b7280"></rect>
                        <rect x="100" y="5" width="15" height="50" rx="3" fill="#6b7280"></rect>
                        <rect x="130" y="5" width="15" height="50" rx="3" fill="#6b7280"></rect>
                        <rect x="160" y="5" width="15" height="50" rx="3" fill="#6b7280"></rect>
                    </svg>
                    <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 rounded-full scanner-line"></div>
                </div>
                <p className="mt-4 text-lg font-semibold tracking-widest">ANALYZING...</p>
            </>
        )
    };
    return <div className="animation-container">{animations[type]}</div>;
};