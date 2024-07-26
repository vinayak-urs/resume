import React, { useState, useEffect, useRef } from 'react';

const CustomCursor = () => {
  const elRef = useRef(null);
  const positionRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const targetRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const ease = 0.075;
  const [position, setPosition] = useState(positionRef.current);

  useEffect(() => {
    const handleMouseMove = (event) => {
      targetRef.current = { x: event.clientX, y: event.clientY };
    };

    const update = () => {
      const dx = targetRef.current.x - positionRef.current.x;
      const dy = targetRef.current.y - positionRef.current.y;
      const vx = dx * ease;
      const vy = dy * ease;

      positionRef.current = { x: positionRef.current.x + vx, y: positionRef.current.y + vy };
      setPosition(positionRef.current);
      requestAnimationFrame(update);
    };

    window.addEventListener('mousemove', handleMouseMove);
    update();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={elRef}
      className="absolute w-7 h-7 bg-purple-400 rounded-full border-2 border-green-500 pointer-events-none z-50"
      style={{
        left: `${position.x - 14}px`,
        top: `${position.y - 14}px`,
      }}
    />
  );
};

export default CustomCursor;
