"use client";

import { useAtom } from "jotai";
import {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  format,
  getDay,
  addMonths,
  subMonths,
} from "date-fns";
import { currentDateAtom, scheduleListAtom, selecteDateAtom } from "../atom";
import { isHoliday } from "@holiday-jp/holiday_jp";

export default function CalendarScreen() {
  const [currentDate, setCurrentDate] = useAtom(currentDateAtom);
  const [, setSelecteDate] = useAtom(selecteDateAtom);
  const [scheduleList] = useAtom(scheduleListAtom);

  const firstDay = startOfMonth(currentDate);
  const lastDay = endOfMonth(currentDate);
  const days = eachDayOfInterval({ start: firstDay, end: lastDay });

  const weekDays = ["日", "月", "火", "水", "木", "金", "土"];
  const leadingBlanks = Array(getDay(firstDay)).fill(null);

  // 祝日かどうかをチェックする関数
  const isJapaneseHoliday = (date: Date) => {
    return isHoliday(date);
  };
  return (
    <div className="md:mx-auto w-full">
      {/* 月移動ボタン */}
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => setCurrentDate(subMonths(currentDate, 1))}
          className="cursor-pointer px-2 py-1 bg-gray-200 rounded hover:bg-gray-400 transition duration-300"
        >
          ← 前の月
        </button>
        <h2 className="text-lg font-bold">
          {format(currentDate, "yyyy年 M月")}
        </h2>
        <button
          onClick={() => setCurrentDate(addMonths(currentDate, 1))}
          className="cursor-pointer px-2 py-1 bg-gray-200 rounded hover:bg-gray-400 transition duration-300"
        >
          次の月 →
        </button>
      </div>

      {/* 曜日ヘッダー */}
      <div className="grid grid-cols-7 text-center font-bold mb-2">
        {weekDays.map((d) => {
          if (d === "土")
            return (
              <div key={d} className="text-blue-500">
                {d}
              </div>
            );
          else if (d === "日")
            return (
              <div key={d} className="text-red-500">
                {d}
              </div>
            );
          else return <div key={d}>{d}</div>;
        })}
      </div>

      {/* 日付マス */}
      <div className="grid grid-cols-7 gap-2">
        {leadingBlanks.map((_, i) => (
          <div key={`blank-${i}`} />
        ))}
        {days.map((day) => {
          const dayOfWeek = getDay(day);
          const isSun = dayOfWeek === 0;
          const isSat = dayOfWeek === 6;

          const handleSelectDate = () => {
            setSelecteDate(day);
          };

          let textColor = "text-gray-800";
          if (isSun || isJapaneseHoliday(day)) textColor = "text-red-500";
          else if (isSat) textColor = "text-blue-500";

          return (
            <button
              key={day.toISOString()}
              className={`cursor-pointer border rounded-sm ${textColor} h-15 w-full flex items-start justify-start p-1 flex-col 2xl:h-30 xl:h-20`}
              onClick={handleSelectDate}
            >
              <p>{format(day, "d")}</p>
              {(scheduleList[format(day, "yyyy-MM-dd")] || []).length > 0 && (
                <p className="text-xs bg-blue-900 text-white rounded-sm p-1">
                  {scheduleList[format(day, "yyyy-MM-dd")].join(", ")}
                </p>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
