import React from 'react';

const ProgressBar: React.FC = () => {
    return (
        <div className="fixed top-0 left-0 right-0 h-5 z-[9999] bg-white/20">
            <div
                className="h-full bg-gradient-to-r from-green-700 to-green-900 animate-progress origin-left"
                style={{
                    animationDuration: '4s',
                    animationTimingFunction: 'linear',
                    animationIterationCount: 'infinite',
                }}
            />
        </div>
    );
};

export { ProgressBar };
