import { atom } from "jotai";
import React from "../../../public/reactIcon.svg.webp";
import { TabItem } from "./type";

export const tabAtom = atom<TabItem>({
  icon: React,
  label: "React",
});
