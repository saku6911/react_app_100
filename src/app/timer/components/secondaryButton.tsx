import { Props } from "../types";
export default function SecondaryButton(props: Props) {
  const { children, handleReset } = props;
  return (
    <button
      onClick={handleReset}
      className="cursor-pointer rounded-full border-solid font-bold text-emerald-500 border-emerald-500  border-1 px-5 py-11 hover:opacity-50 duration-300 "
    >
      <p className="w-18"> {children}</p>
    </button>
  );
}
