import { InputBoxProps } from "../../type";

export const InputBox = ({ type, onChange, value }: InputBoxProps) => {
  return (
    <input
      type={type}
      onChange={onChange}
      value={value}
      className="border-solid border-gray-300 border-2 rounded-md p-1"
    />
  );
};
