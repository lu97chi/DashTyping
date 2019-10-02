import { useState, useEffect, useRef } from 'react';
export function useScroll() {
  const prevScrollY = useRef(0);
  // const [goingUp, setGoingUp] = useState(false);
  const [YPosition, setYPosition] = useState(0);
  const [isTop, setIsTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // if (prevScrollY.current < currentScrollY && goingUp) {
      //   setGoingUp(false);
      // }
      // if (prevScrollY.current > currentScrollY && !goingUp) {
      //   setGoingUp(true);
      // }
      prevScrollY.current = currentScrollY;
      if (window.pageYOffset === 0) {
        setIsTop(true);
      } else{
        setIsTop(false);
      }
      setYPosition(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [YPosition]);
  return {
    YPosition,
    isTop
  }
}