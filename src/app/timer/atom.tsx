import { atom } from "jotai";

export const minutesAtom = atom(0);

export const secondsAtom = atom(0);

export const timerCount = atom(0);

export const timerActive = atom(false);

export const startTimer = atom(false);

export const hasPlayed = atom(false);
