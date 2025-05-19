"use client";

import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { clockAtom } from "../atom";

export default function ClockPage() {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useAtom(clockAtom);

  useEffect(() => {
    setMounted(true);

    setTime(new Date());

    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, [setTime]);

  if (!mounted || !time) return null; // 時刻が取得できるまで表示しない

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const second = seconds * 6;
  const minute = minutes * 6 + seconds * 0.1;
  const hour = ((hours % 12) + minutes / 60) * 30;

  const hourDeg = hour + 90;
  const minuteDeg = minute + 90;
  const secondDeg = second + 90;

  return (
    <div className="relative w-70 h-68 rounded-full border-4 border-orange-300 flex items-center justify-center bg-cyan-800 shadow-lg">
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i + 1) * 30 - 90;
        const radius = 110;
        const x = radius * Math.cos((angle * Math.PI) / 180);
        const y = radius * Math.sin((angle * Math.PI) / 180);
        return (
          <div
            key={i}
            className="absolute text-white text-sm font-bold"
            style={{
              transform: `translate(${x}px, ${y}px)`,
              left: "48%",
              top: "47%",
            }}
          >
            {i + 1}
          </div>
        );
      })}

      <div
        className="absolute w-[30%] h-[4px] bg-white origin-right rounded"
        style={{
          left: "50%",
          top: "50%",
          transform: `translateX(-100%) translateY(-50%) rotate(${hourDeg}deg)`,
        }}
      />
      <div
        className="absolute w-[40%] h-[3px] bg-neutral-200 origin-right rounded"
        style={{
          left: "50%",
          top: "50%",
          transform: `translateX(-100%) translateY(-50%) rotate(${minuteDeg}deg)`,
        }}
      />
      <div
        className="absolute w-[35%] h-[2px] bg-red-500 origin-right rounded"
        style={{
          left: "50%",
          top: "50%",
          transform: `translateX(-100%) translateY(-50%) rotate(${secondDeg}deg)`,
        }}
      />

      <div className="absolute w-4 h-4 bg-white rounded-full z-10" />
    </div>
  );
}
