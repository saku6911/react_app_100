"use client";

import { useAtom } from "jotai";
import { PrimaryButton } from "./ui/primaryButton";
import { Heading } from "./ui/heading";
import { InputBox } from "./ui/inputBox";
import {
  InputDateAtom,
  InputImgAtom,
  InputNameAtom,
  InputTelAtom,
} from "../atom";
import html2canvas from "html2canvas";

export const Input = () => {
  const [name, setName] = useAtom(InputNameAtom);
  const [date, setDate] = useAtom(InputDateAtom);
  const [tel, setTel] = useAtom(InputTelAtom);
  const [, setImg] = useAtom(InputImgAtom);
  const handleDownload = () => {
    const target = document.getElementById("target-card") as HTMLElement;
    html2canvas(target).then((canvas: HTMLCanvasElement) => {
      const targetImgUrl = canvas.toDataURL("image/png");
      saveAsImage(targetImgUrl);
    });
  };

  const saveAsImage = (url: string): void => {
    const downloadLink = document.createElement("a");
    if (typeof downloadLink.download === "string") {
      downloadLink.href = url;
      downloadLink.download = "component.png";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    } else {
      window.open(url);
    }
  };
  return (
    <div className="flex flex-col gap-5">
      <div>
        <Heading>お名前</Heading>
        <InputBox
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
      </div>
      <div>
        <Heading>お誕生日</Heading>
        <InputBox
          value={date}
          onChange={(e) => setDate(e.target.value)}
          type="date"
        />
      </div>
      <div>
        <Heading>電話番号</Heading>
        <InputBox
          value={tel}
          onChange={(e) => setTel(e.target.value)}
          type="tel"
        />
      </div>
      <div>
        <Heading>プロフィール写真</Heading>
        <InputBox
          onChange={(e) => setImg(e.target.files?.[0] ?? null)}
          type="file"
        />
      </div>
      <PrimaryButton onClick={handleDownload}>
        ダウンロード（PNG形式）
      </PrimaryButton>
    </div>
  );
};
