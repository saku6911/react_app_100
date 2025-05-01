import { atom } from "jotai";

export const InputNameAtom = atom("");

export const InputDateAtom = atom("");

export const InputTelAtom = atom("");

export const InputImgAtom = atom<File | null>(null);
