import { useEffect, useState, useRef, useCallback } from 'react';

interface CursorPosition {
  x: number;
  y: number;
}

interface TrailDot {
  x: number;
  y: number;
  id: string;
  timestamp: number;
}

export function CustomCursor() {
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [trail, setTrail] = useState<TrailDot[]>([]);
  const animationFrameRef = useRef<number>();
  const lastUpdateRef = useRef<number>(0);

  const updateCursor = useCallback((e: MouseEvent) => {
    const now = performance.now();

    // Throttle updates for better performance
    if (now - lastUpdateRef.current < 8) return; // ~120fps max

    lastUpdateRef.current = now;

    setPosition({ x: e.clientX, y: e.clientY });

    // Add trail dot with unique timestamp-based ID
    setTrail(prev => {
      const newDot: TrailDot = {
        x: e.clientX,
        y: e.clientY,
        id: `${now}-${Math.random()}`,
        timestamp: now
      };

      // Keep only last 6 trail dots and filter old ones
      const filtered = prev.filter(dot => now - dot.timestamp < 200);
      return [...filtered, newDot].slice(-6);
    });
  }, []);

  const handleMouseDown = useCallback(() => setIsClicking(true), []);
  const handleMouseUp = useCallback(() => setIsClicking(false), []);

  const handleMouseEnter = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (
      target.tagName === 'BUTTON' ||
      target.tagName === 'A' ||
      target.classList.contains('cursor-pointer') ||
      target.closest('button') ||
      target.closest('a') ||
      target.closest('[role="button"]')
    ) {
      setIsHovering(true);
    }
  }, []);

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (
      target.tagName === 'BUTTON' ||
      target.tagName === 'A' ||
      target.classList.contains('cursor-pointer') ||
      target.closest('button') ||
      target.closest('a') ||
      target.closest('[role="button"]')
    ) {
      setIsHovering(false);
    }
  }, []);

  useEffect(() => {
    // Use passive listeners for better performance
    document.addEventListener('mousemove', updateCursor, { passive: true });
    document.addEventListener('mousedown', handleMouseDown, { passive: true });
    document.addEventListener('mouseup', handleMouseUp, { passive: true });
    document.addEventListener('mouseover', handleMouseEnter, { passive: true });
    document.addEventListener('mouseout', handleMouseLeave, { passive: true });

    // Add touch event listeners with passive flag
    document.addEventListener('touchstart', handleMouseDown, { passive: true });
    document.addEventListener('touchend', handleMouseUp, { passive: true });

    // Cleanup function
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
      document.removeEventListener('touchstart', handleMouseDown);
      document.removeEventListener('touchend', handleMouseUp);
    };
  }, [updateCursor, handleMouseDown, handleMouseUp, handleMouseEnter, handleMouseLeave]);

  return (
    <>
      {/* Main Cursor */}
      <div
        className={`custom-cursor ${isHovering ? 'hover' : ''} ${isClicking ? 'click' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      
      {/* Trail Dots */}
      {trail.map((dot, index) => (
        <div
          key={dot.id}
          className="custom-cursor-trail"
          style={{
            left: `${dot.x}px`,
            top: `${dot.y}px`,
            opacity: (index + 1) / trail.length * 0.6,
            transform: `translate(-50%, -50%) scale(${(index + 1) / trail.length})`,
          }}
        />
      ))}
    </>
  );
}
