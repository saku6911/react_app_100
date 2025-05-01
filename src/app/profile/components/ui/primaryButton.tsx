import { ButtonProps } from "../../type";

export const PrimaryButton = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer rounded-md bg-neutral-950 px-4 py-2 text-neutral-100 border-1 transition-colors hover:opacity-80 "
    >
      {children}
    </button>
  );
};
