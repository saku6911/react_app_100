import SecondaryButton from "./components/secondaryButton";
import {
  hasPlayed,
  minutesAtom,
  secondsAtom,
  startTimer,
  timerActive,
} from "./atom";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import StopButton from "./components/stopButton";
import PrimaryButton from "./components/primaryButton";
import useSound from "use-sound";

export default function Start() {
  const [minutes] = useAtom(minutesAtom);
  const [seconds] = useAtom(secondsAtom);
  const [, setActive] = useAtom(timerActive);
  const [start, setStart] = useAtom(startTimer);
  const [played, setPlayed] = useAtom(hasPlayed);
  const [totalSeconds, setTotalSeconds] = useState(minutes * 60 + seconds);

  const Sound = "/soundsAlarm.mp3";
  const [play, { stop }] = useSound(Sound, { soundEnabled: true });
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (totalSeconds === 0 && !played) {
      console.log(totalSeconds);
      play();
      setPlayed(true);
      alert("時間切れ");
      stop();
      setStart(false);
      return;
    }

    if (start) {
      interval = setInterval(() => {
        setTotalSeconds((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [start, totalSeconds, play, played, setPlayed, setStart, stop]);
  const handleStop = () => {
    setStart(false);
  };

  const handleReset = () => {
    setActive(false);
    setPlayed(false);
    setTotalSeconds(minutes * 60 + seconds);
  };

  const handleStart = () => {
    setActive(true);
    setStart(true);
  };

  return (
    <div className="flex flex-col gap-25">
      <h2 className="text-4xl font-bold text-center">{totalSeconds}</h2>
      <div className="flex gap-10">
        <SecondaryButton handleReset={handleReset}>リセット</SecondaryButton>
        {start == true ? (
          <StopButton handleStop={handleStop}>一時停止</StopButton>
        ) : (
          <PrimaryButton handleStart={handleStart}>再開</PrimaryButton>
        )}
      </div>
    </div>
  );
}
