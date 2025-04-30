"use client";

import { useAtom } from "jotai";
import Button from "./button";
import { inputAtom, resultAtom } from "../atom";
import { evaluate } from "mathjs";
import { memo } from "react";

export default function CalcComponents() {
  const [input, setInput] = useAtom(inputAtom);
  const [, setResult] = useAtom(resultAtom);

  const pushNumber = (number: number) => {
    setInput((prev) => prev + number.toString());
  };
  const pushAddition = () => {
    setInput((prev) => prev + "+");
  };
  const pushSubtraction = () => {
    setInput((prev) => prev + "-");
  };
  const pushMultiplication = () => {
    setInput((prev) => prev + "*");
  };
  const pushDivision = () => {
    setInput((prev) => prev + "/");
  };
  const pushDecimalPoint = () => {
    setInput((prev) => prev + ".");
  };
  const pushEqual = () => {
    try {
      const result = evaluate(input);
      setResult(result);
      setInput(result.toString());
    } catch {
      setInput("Error");
    }
  };
  const pushClear = () => {
    setInput("");
    setResult(0);
  };

  const ButtonMemo = memo(function ButtonMemo({
    onclick,
    children,
  }: {
    onclick: () => void;
    children: React.ReactNode;
  }) {
    return <Button onclick={onclick}>{children}</Button>;
  });
  return (
    <div className="grid gap-4 ">
      <input
        type="text"
        value={input}
        readOnly
        className="bg-gray-900 h-20 rounded-md text-3xl text-white"
      />
      <div className="flex gap-4 items-center">
        <ButtonMemo onclick={() => pushNumber(7)}>7</ButtonMemo>
        <ButtonMemo onclick={() => pushNumber(8)}>8</ButtonMemo>
        <ButtonMemo onclick={() => pushNumber(9)}>9</ButtonMemo>
        <ButtonMemo onclick={pushAddition}>+</ButtonMemo>
      </div>
      <div className="flex gap-4 items-center">
        <ButtonMemo onclick={() => pushNumber(4)}>4</ButtonMemo>
        <ButtonMemo onclick={() => pushNumber(5)}>5</ButtonMemo>
        <ButtonMemo onclick={() => pushNumber(6)}>6</ButtonMemo>
        <ButtonMemo onclick={pushSubtraction}>-</ButtonMemo>
      </div>
      <div className="flex gap-4 items-center">
        <ButtonMemo onclick={() => pushNumber(1)}>1</ButtonMemo>
        <ButtonMemo onclick={() => pushNumber(2)}>2</ButtonMemo>
        <ButtonMemo onclick={() => pushNumber(3)}>3</ButtonMemo>
        <ButtonMemo onclick={pushMultiplication}>*</ButtonMemo>
      </div>
      <div className="flex gap-4 items-center">
        <ButtonMemo onclick={() => pushNumber(0)}>0</ButtonMemo>
        <ButtonMemo onclick={pushDivision}>/</ButtonMemo>
        <ButtonMemo onclick={pushDecimalPoint}>.</ButtonMemo>
        <ButtonMemo onclick={pushEqual}>=</ButtonMemo>
      </div>
      <ButtonMemo onclick={pushClear}>Clear</ButtonMemo>
    </div>
  );
}
