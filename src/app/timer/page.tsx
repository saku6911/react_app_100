"use client";

import { useAtom } from "jotai";
import Input from "./input";
import Start from "./start";
import { timerActive } from "./atom";

export default function Timer() {
  const [active] = useAtom(timerActive);
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-25">
      <h1 className="text-4xl font-bold">Timer</h1>
      {active == true ? <Start /> : <Input />}
    </div>
  );
}
