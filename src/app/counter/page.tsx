"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleCountUp = () => {
    setCount((prev) => prev + 1);
  };

  const handleCountDown = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col gap-10 items-center justify-center p-20 border-solid border-gray-800 border-2 rounded-4xl">
        <h1 className="text-4xl">Counter App</h1>
        <p className="text-3xl font-bold">{count}</p>
        <div className="flex gap-6">
          <button
            className="relative h-12 overflow-hidden rounded-4xl border border-neutral-200 bg-transparent px-6 text-neutral-950 before:absolute before:left-0 before:top-0 before:block before:h-full before:w-full before:-translate-y-full before:bg-neutral-100 before:transition-transform hover:before:translate-y-0"
            onClick={handleCountDown}
          >
            <span className="relative">－</span>
          </button>
          <button
            className="relative h-12 overflow-hidden rounded-4xl border border-neutral-200 bg-transparent px-6 text-neutral-950 before:absolute before:left-0 before:top-0 before:block before:h-full before:w-full before:-translate-y-full before:bg-neutral-100 before:transition-transform hover:before:translate-y-0"
            onClick={handleCountUp}
          >
            <span className="relative">＋</span>
          </button>
        </div>
      </div>
    </div>
  );
}
