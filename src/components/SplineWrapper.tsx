import { Suspense, lazy, useState, useEffect } from 'react';

// Lazy load Spline to prevent SSR issues
const Spline = lazy(() => import('@splinetool/react-spline'));

interface SplineWrapperProps {
  scene: string;
  className?: string;
}

export function SplineWrapper({ scene, className }: SplineWrapperProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Reset error state when scene changes
    setHasError(false);
    setIsLoaded(false);
  }, [scene]);

  const handleError = () => {
    console.warn('Spline animation failed to load');
    setHasError(true);
  };

  const handleLoad = () => {
    setIsLoaded(true);
    // Optimize canvas touch events
    setTimeout(() => {
      const canvas = document.querySelector('canvas');
      if (canvas) {
        canvas.style.touchAction = 'pan-y pinch-zoom';
        canvas.style.pointerEvents = 'auto';
      }
    }, 100);
  };

  // Fallback component
  const FallbackAnimation = () => (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#313a6f]/20 to-transparent rounded-2xl">
      <div className="text-center space-y-4">
        <div className="w-20 h-20 mx-auto bg-[#313a6f]/20 rounded-full flex items-center justify-center">
          <img
            src="/images/mobiguard_logo.png"
            alt="MOBIGUARD"
            className="h-12 w-12 object-contain animate-pulse"
          />
        </div>
        <div className="space-y-2">
          <div className="h-2 bg-[#313a6f]/20 rounded animate-pulse"></div>
          <div className="h-2 bg-[#313a6f]/10 rounded animate-pulse w-3/4 mx-auto"></div>
        </div>
      </div>
    </div>
  );

  // Loading component
  const LoadingAnimation = () => (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#313a6f]/10 to-transparent rounded-2xl">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 mx-auto border-4 border-[#313a6f]/20 border-t-[#313a6f] rounded-full animate-spin"></div>
        <p className="text-sm text-muted-foreground">Yükleniyor...</p>
      </div>
    </div>
  );

  if (hasError) {
    return <FallbackAnimation />;
  }

  return (
    <div className={className}>
      <Suspense fallback={<LoadingAnimation />}>
        <div className="relative w-full h-full">
          {!isLoaded && <LoadingAnimation />}
          <div 
            className={`w-full h-full transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            style={{ 
              touchAction: 'pan-y pinch-zoom',
              WebkitTouchCallout: 'none',
              WebkitUserSelect: 'none',
              userSelect: 'none'
            }}
          >
            <Spline
              scene={scene}
              style={{ 
                width: '100%', 
                height: '100%',
                touchAction: 'pan-y pinch-zoom'
              }}
              onLoad={handleLoad}
              onError={handleError}
            />
          </div>
        </div>
      </Suspense>
    </div>
  );
}
