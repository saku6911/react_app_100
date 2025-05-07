import { atom } from "jotai";

export const currentDateAtom = atom(new Date());
export const inputTextAtom = atom<string>("");
export const scheduleListAtom = atom<{
  [date: string]: string[];
}>({});
export const selecteDateAtom = atom<Date | null>(null);
