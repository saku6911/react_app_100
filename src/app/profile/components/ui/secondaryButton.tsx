import { ButtonProps } from "../../type";

export const SecondaryButton = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer rounded-md px-4 py-2 border-neutral-900 border-1 transition-colors bg-white hover:opacity-50 "
    >
      {children}
    </button>
  );
};
