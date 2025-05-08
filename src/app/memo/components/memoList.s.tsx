"use client";

import { useAtom } from "jotai";
import { memoListAtom, selectedMemoAtom, selectedIndexAtom } from "../atom";
import { MdDeleteForever } from "react-icons/md";

export const MemoList = () => {
  const [memoList, setMemoList] = useAtom(memoListAtom);
  const [, setSelectedMemo] = useAtom(selectedMemoAtom);
  const [, setSelectedIndex] = useAtom(selectedIndexAtom);

  const handleSelect = (index: number) => {
    setSelectedMemo(memoList[index]);
    setSelectedIndex(index);
  };

  const handleDelete = (index: number) => {
    const newList = [...memoList];
    newList.splice(index, 1);
    setMemoList(newList);
  };

  return (
    <div className="flex flex-col h-screen w-1/6 bg-gray-100 p-4 overflow-y-auto gap-4">
      {memoList.map((memo, index) => (
        <div
          key={index}
          className="bg-white p-2 rounded shadow text-left relative"
        >
          <button
            onClick={() => handleDelete(index)}
            className="absolute top-1 right-1 hover:opacity-70"
          >
            <MdDeleteForever className="text-3xl" />
          </button>
          <div
            onClick={() => handleSelect(index)}
            dangerouslySetInnerHTML={{ __html: memo }}
            className="cursor-pointer"
          />
        </div>
      ))}
    </div>
  );
};
