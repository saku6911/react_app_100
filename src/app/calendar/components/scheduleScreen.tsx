"use client";
import { inputAtom } from "@/app/calc/atom";
import { useAtom } from "jotai";
import { scheduleListAtom, selecteDateAtom } from "../atom";
import { format } from "date-fns";

export default function ScheduleScreen() {
  const [inputItem, setInputItem] = useAtom(inputAtom);
  const [scheduleList, setScheduleList] = useAtom(scheduleListAtom);
  const [selecteDate] = useAtom(selecteDateAtom);

  const handleAdd = () => {
    if (!selecteDate) return;

    const key = format(selecteDate, "yyyy-MM-dd");
    const prev = scheduleList[key] || [];
    const updated = {
      ...scheduleList,
      [key]: [...prev, inputItem],
    };
    setScheduleList(updated);
    setInputItem("");
  };

  const handleDelete = (index: number) => {
    if (!selecteDate) return;

    const key = format(selecteDate, "yyyy-MM-dd");
    const items = scheduleList[key] || [];

    const updatedItems = [...items];
    updatedItems.splice(index, 1);

    const updated = {
      ...scheduleList,
      [key]: updatedItems,
    };

    setScheduleList(updated);
  };

  const scheduleForDate = selecteDate
    ? scheduleList[format(selecteDate, "yyyy-MM-dd")] || []
    : [];

  return (
    <div className="flex flex-col  border-2 border-solid border-blue-300 p-10 gap-10 w-3/6 max-lg:w-full">
      <div>
        <h2 className="text-2xl font-bold">
          {selecteDate ? format(selecteDate, "yyyy-MM-dd") : ""} の予定を追加
        </h2>
        <input
          type="text"
          value={inputItem}
          onChange={(e) => setInputItem(e.target.value)}
          className="border-solid border-gray-300 border-2 rounded-md p-1"
        />
        <button
          onClick={handleAdd}
          className="cursor-pointer rounded-md bg-neutral-800 px-4 py-2 text-neutral-100 border-1 hover:opacity-80 font-bold transition duration-300"
        >
          追加
        </button>
      </div>
      <div>
        <h2 className="text-2xl font-bold">
          {" "}
          {selecteDate ? format(selecteDate, "yyyy-MM-dd") : ""}の予定
        </h2>
        <ul>
          {scheduleForDate.map((item, index) => (
            <li key={index}>
              {item}
              <button
                onClick={() => handleDelete(index)}
                className="cursor-pointer rounded-md bg-neutral-800 px-4 py-2 text-neutral-100 border-1 hover:opacity-80 font-bold transition duration-300"
              >
                削除
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
