import { Props } from "../types";
import { memo } from "react";
export const StopButtonComponent = (props: Props) => {
  const { children, handleStop } = props;
  return (
    <button
      onClick={handleStop}
      className="cursor-pointer rounded-full border-solid font-bold text-white border-emerald-500 bg-emerald-500 border-1 px-5 py-11 hover:opacity-80 duration"
    >
      <p className="w-18"> {children}</p>
    </button>
  );
};

export const StopButton = memo(StopButtonComponent);
StopButton.displayName = "StopButton";
