import React, { useState } from 'react';

interface ProductCardProps {
  product: {
    image: string;
    video: string;
    title: string;
  };
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const togglePlay = async () => {
    if (videoRef.current) {
      try {
        if (isPlaying) {
          await videoRef.current.pause();
        } else {
          console.log('Video source:', videoRef.current.src);
          console.log('Video ready state:', videoRef.current.readyState);
          console.log('Video error:', videoRef.current.error);
          await videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
      } catch (error) {
        console.error('Video playback error:', error);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-[1.02] active:scale-[0.98] duration-300">
      <h3 className="text-xl sm:text-2xl font-bold p-4 sm:p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">{product.title}</h3>
      <div className="flex flex-col gap-4 sm:gap-6 p-4 sm:p-6">
        <div className="rounded-xl overflow-hidden h-[300px] sm:h-[400px] md:h-[500px] shadow-md">
          <img 
            src={product.image} 
            alt={product.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="relative rounded-xl overflow-hidden h-[300px] sm:h-[400px] md:h-[500px] shadow-md">
          <div className="relative">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="w-full h-full object-cover"
              onError={(e) => {
                console.error('Video loading error:', {
                  error: e.currentTarget.error,
                  networkState: e.currentTarget.networkState,
                  src: e.currentTarget.src
                });
                // Show the error message to the user
                if (e.currentTarget instanceof HTMLVideoElement) {
                  e.currentTarget.classList.add('hidden');
                  const errorDiv = e.currentTarget.parentElement?.querySelector('.video-error');
                  if (errorDiv instanceof HTMLDivElement) {
                    errorDiv.classList.remove('hidden');
                    errorDiv.classList.add('flex');
                  }
                }
              }}
            >
              <source src={product.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="video-error hidden absolute inset-0 bg-gray-100 items-center justify-center text-gray-500 text-sm">
              <p>Video failed to load. Please try refreshing the page.</p>
            </div>
          </div>
          <div className="absolute bottom-4 right-4 flex gap-2">
            <button
              onClick={togglePlay}
              className="bg-black/70 hover:bg-black active:bg-black text-white p-3 sm:p-2 rounded-full transition-colors"
            >
              {isPlaying ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                </svg>
              )}
            </button>
            <button
              onClick={toggleMute}
              className="bg-black/70 hover:bg-black active:bg-black text-white p-3 sm:p-2 rounded-full transition-colors"
            >
              {isMuted ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
