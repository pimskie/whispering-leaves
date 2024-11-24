"use client";

import { useState, useRef, useEffect, useMemo } from "react";

export interface KeyStatisicProps {
  statistic: number;
  suffix?: string;
  description: string;
  countDelay?: number;
  count?: boolean;
}

const defaultProps: Partial<KeyStatisicProps> = {
  count: true,
  suffix: "",
};

const COUNT_TIME = 1000; // MS

export const KeyStatistic = (props: KeyStatisicProps) => {
  const countInitialValue = props.count ? 0 : props.statistic;

  const [count, setCount] = useState(countInitialValue);

  const startTimeRef = useRef<number | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  const propsWithDefaults = { ...defaultProps, ...props };
  const statisticFormatted = useMemo(() => {
    return `${count}${propsWithDefaults.suffix}`;
  }, [count]);

  useEffect(() => {
    if (!propsWithDefaults.count) {
      return;
    }

    const animate = (timestamp: number) => {
      console.log("counting");

      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = timestamp - startTimeRef.current;
      const duration = COUNT_TIME;

      if (progress < duration) {
        const nextCount = Math.min(
          Math.floor((progress / duration) * propsWithDefaults.statistic),
          propsWithDefaults.statistic
        );
        setCount(nextCount);
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(propsWithDefaults.statistic);
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [propsWithDefaults.statistic]);

  return (
    <div className="flex flex-col items-center">
      <h3>{statisticFormatted}</h3>
      <div>{propsWithDefaults.description}</div>
    </div>
  );
};
