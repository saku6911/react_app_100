"use client";

import { useEffect, useState } from "react";
import {
  InputDateAtom,
  InputImgAtom,
  InputNameAtom,
  InputTelAtom,
} from "../atom";
import { useAtom } from "jotai";

export const Card = () => {
  const [name] = useAtom(InputNameAtom);
  const [date] = useAtom(InputDateAtom);
  const [tel] = useAtom(InputTelAtom);
  const [img] = useAtom(InputImgAtom);
  const [imgUrl, setImgUrl] = useState<string>("");

  useEffect(() => {
    if (img) {
      const url = URL.createObjectURL(img);
      setImgUrl(url);
      return () => URL.revokeObjectURL(url);
    } else {
      setImgUrl("");
    }
  }, [img]);

  return (
    <div className="w-full max-w-sm  rounded-lg shadow-sm" id="target-card">
      <div className="flex flex-col items-center p-10">
        {imgUrl && (
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src={imgUrl}
            alt="プロフィール画像"
          />
        )}
        <h5 className="mb-1 text-xl font-medium  ">{name}</h5>
        <span className="text-sm ">誕生日：{date}</span>
        <span className="text-sm ">電話番号：{tel}</span>
      </div>
    </div>
  );
};
