"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { ToolMenu } from "./ui/toolmenu";
import Link from "@tiptap/extension-link";
import { useAtom } from "jotai";
import {
  inputValueAtom,
  memoListAtom,
  selectedMemoAtom,
  selectedIndexAtom,
} from "../atom";
import { MdOutlineSaveAlt } from "react-icons/md";
import { useEffect } from "react";

export const Editor = () => {
  const [inputValue, setInputValue] = useAtom(inputValueAtom);
  const [memoList, setMemoList] = useAtom(memoListAtom);
  const [selectedMemo, setSelectedMemo] = useAtom(selectedMemoAtom);
  const [selectedIndex, setSelectedIndex] = useAtom(selectedIndexAtom);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: true,
        autolink: true,
        linkOnPaste: true,
      }),
    ],
    content: "<p>Hello Tiptap!</p>",
    onUpdate: ({ editor }) => {
      setInputValue(editor.getHTML());
    },
  });

  useEffect(() => {
    if (editor && selectedMemo !== null) {
      editor.commands.setContent(selectedMemo);
      setInputValue(selectedMemo);
    }
  }, [selectedMemo, editor, setInputValue]);

  const handleSave = () => {
    if (!inputValue.trim()) return;

    const newList = [...memoList];
    if (selectedIndex !== null) {
      newList[selectedIndex] = inputValue;
    } else {
      newList.push(inputValue);
    }

    setMemoList(newList);
    setInputValue("");
    editor?.commands.setContent("");
    setSelectedMemo(null);
    setSelectedIndex(null);
  };

  return (
    <>
      <div className="border p-4 w-full">
        {editor && <ToolMenu editor={editor} />}
        <EditorContent editor={editor} className="prose" />
      </div>
      <button
        onClick={handleSave}
        className="fixed bottom-10 right-10 border border-gray-500 px-4 py-7 rounded-full hover:opacity-70 transition duration-200"
      >
        <div className="flex items-center justify-center">
          保存
          <MdOutlineSaveAlt />
        </div>
      </button>
    </>
  );
};
