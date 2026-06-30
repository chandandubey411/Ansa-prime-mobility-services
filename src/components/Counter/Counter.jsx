import React, { useState, useEffect, useRef } from 'react';

export default function Counter({ value, duration = 1500 }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const started = useRef(false);

  const cleanVal = value.replace(/,/g, '');
  const target = parseInt(cleanVal, 10) || 0;
  const suffix = value.replace(/[0-9,]/g, '');

  useEffect(() => {
    let observer;
    const startAnimation = () => {
      if (started.current) return;
      started.current = true;
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setCount(Math.floor(progress * target));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };

    const currentEl = elementRef.current;
    if (currentEl) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            startAnimation();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(currentEl);
    }

    return () => {
      if (observer && currentEl) {
        observer.unobserve(currentEl);
      }
    };
  }, [target, duration]);

  const formatted = count.toLocaleString() + suffix;

  return <span ref={elementRef}>{formatted}</span>;
}
