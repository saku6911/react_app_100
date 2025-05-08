import { Editor } from "@tiptap/react";
import {
  MdFormatBold,
  MdFormatStrikethrough,
  MdRedo,
  MdUndo,
  MdOutlineTextFields,
  MdCode,
  MdFormatQuote,
  MdOutlineAddLink,
  MdLinkOff,
} from "react-icons/md";
import { FaListUl, FaListOl } from "react-icons/fa";

export const ToolMenu = ({ editor }: { editor: Editor }) => {
  if (!editor) {
    return null;
  }
  const headings = [
    { label: "H1", level: 1 },
    { label: "H2", level: 2 },
    { label: "H3", level: 3 },
  ] as const;
  return (
    <div className="flex flex-wrap gap-2 border-b border-gray-600 p-4 text-2xl">
      <div className="relative group">
        <button className={!editor.isActive("heading") ? "opacity-20" : ""}>
          <MdOutlineTextFields />
        </button>
        <div className="absolute left-0 top-full z-10 hidden flex-col gap-1 bg-white text-black p-2 rounded shadow-md group-hover:flex">
          {headings.map((h) => (
            <button
              key={h.level}
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: h.level }).run()
              }
              className={`text-left px-2 py-1 hover:bg-gray-200  ${
                editor.isActive("heading", { level: h.level })
                  ? "font-bold"
                  : ""
              }`}
            >
              {h.label}
            </button>
          ))}
          <button
            onClick={() => editor.chain().focus().setParagraph().run()}
            className={`text-left px-2 py-1 hover:bg-gray-200 ${
              editor.isActive("paragraph") ? "font-bold" : ""
            }`}
          >
            P
          </button>
        </div>
      </div>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={!editor.isActive("bold") ? "opacity-20" : ""}
      >
        <MdFormatBold />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={!editor.isActive("strike") ? "opacity-20" : ""}
      >
        <MdFormatStrikethrough />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={!editor.isActive("bulletList") ? "opacity-20" : ""}
      >
        <FaListOl />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={!editor.isActive("orderedList") ? "opacity-20" : ""}
      >
        <FaListUl />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={!editor.isActive("blockquote") ? "opacity-20" : ""}
      >
        <MdFormatQuote />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={!editor.isActive("codeBlock") ? "opacity-20" : ""}
      >
        <MdCode />
      </button>
      <button
        type="button"
        onClick={() => {
          const url = prompt("リンク先のURLを入力してください");
          if (url) {
            editor
              .chain()
              .focus()
              .extendMarkRange("link")
              .setLink({ href: url })
              .run();
          }
        }}
        className={!editor.isActive("orderedlist") ? "opacity-20" : ""}
      >
        <MdOutlineAddLink />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().unsetLink().run()}
        className={!editor.isActive("orderedlist") ? "opacity-20" : ""}
      >
        <MdLinkOff />
      </button>
      <button onClick={() => editor.chain().focus().undo().run()} type="button">
        <MdUndo />
      </button>
      <button onClick={() => editor.chain().focus().redo().run()} type="button">
        <MdRedo />
      </button>
    </div>
  );
};
