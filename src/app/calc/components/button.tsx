import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  onclick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Button({ children, onclick }: Props) {
  return (
    <button
      onClick={onclick}
      className="bg-gray-300 py-4 px-8 text-center rounded-md text-2xl font-bold"
    >
      {children}
    </button>
  );
}
