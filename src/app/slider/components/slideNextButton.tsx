"use client";
import type { Swiper as SwiperType } from "swiper";

export default function SlideNextButton({
  swiper,
}: {
  swiper: SwiperType | null;
}) {
  return (
    <button
      onClick={() => swiper?.slideNext()}
      disabled={!swiper}
      className="cursor-pointer bg-gray-800 hover:opacity-70 text-white px-5 py-2 rounded-full shadow disabled:opacity-50 transition"
    >
      ➡ Next
    </button>
  );
}
