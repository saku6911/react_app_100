import { atom } from "jotai";
import { Weather } from "./type";
export const weatherAtom = atom<Weather>({
  title: "",
  forecasts: [],
});
