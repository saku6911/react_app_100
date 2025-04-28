"use client";

import { useAtom } from "jotai";
import PrimaryButton from "./components/primaryButton";
import { minutesAtom, secondsAtom, startTimer, timerActive } from "./atom";
import { memo, useState } from "react";

export default function Input() {
  const [minutes, setMinutes] = useAtom(minutesAtom);
  const [seconds, setSeconds] = useAtom(secondsAtom);
  const [, setActive] = useAtom(timerActive);
  const [, setStart] = useAtom(startTimer);

  const [error, setError] = useState("");

  const handleStart = () => {
    if (minutes < 0 || minutes > 99) {
      setError("分は0〜99の範囲で入力してください");
      return;
    }
    if (seconds < 0 || seconds > 59 || seconds === 0) {
      setError("秒は0〜59の範囲で入力してください");
      return;
    }

    setError("正しい数値（時間）を入力してください");
    setActive(true);
    setStart(true);
  };

  const handleMinutesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value >= 0 && value <= 99) {
      setMinutes(value);
    }
  };

  const handleSecondsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value >= 0 && value <= 59) {
      setSeconds(value);
    }
  };
  const PrimaryButtonMemo = memo(() => (
    <PrimaryButton handleStart={handleStart}>スタート</PrimaryButton>
  ));
  PrimaryButtonMemo.displayName = "PrimaryButtonMemo";
  return (
    <div className="flex flex-col gap-25 items-center">
      <div className="flex gap-2 font-bold text-3xl">
        <div>
          <input
            type="number"
            min={0}
            max={99}
            value={minutes}
            onChange={handleMinutesChange}
            className="w-16 border-solid border-gray-300 border-2 rounded-md p-1"
          />
          分
        </div>
        <div>
          <input
            type="number"
            min={0}
            max={59}
            value={seconds}
            onChange={handleSecondsChange}
            className="w-16 border-solid border-gray-300 border-2 rounded-md p-1"
          />
          秒
        </div>
      </div>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <PrimaryButtonMemo />
    </div>
  );
}
