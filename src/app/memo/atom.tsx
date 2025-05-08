import { atom } from "jotai";

export const inputValueAtom = atom<string>("");
export const memoListAtom = atom<Array<string>>([]);
export const selectedMemoAtom = atom<string | null>(null);
export const selectedIndexAtom = atom<number | null>(null);
