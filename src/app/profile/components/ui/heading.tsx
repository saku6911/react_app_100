import { HeadingProps } from "../../type";

export const Heading = ({ children }: HeadingProps) => {
  return <p className="text-lg font-bold">{children}</p>;
};
