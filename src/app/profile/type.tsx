export type InputBoxProps = {
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
};

export type HeadingProps = {
  children: string;
};

export type ButtonProps = {
  children: string;
  onClick: () => void;
};
