"use client";

import { useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState<string>("");
  const [list, setList] = useState<string[]>([]);

  const handleTodoAdd = () => {
    if (todo.length < 1) {
      alert("一文字以上のタスクを入力してください。");
    } else {
      const NewTodos = [...list, todo];
      setList(NewTodos);
      setTodo("");
    }
  };

  const handleDelete = (index: number) => {
    const NewTodos = [...list];
    NewTodos.splice(index, 1);
    setList(NewTodos);
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10 text-base">
      <h1 className="text-4xl font-bold">TO DO App</h1>
      <div className="flex gap-6">
        <input
          type="text"
          className="border-solid border-gray-300 border-2 rounded-md p-1"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="タスクを入力"
        />
        <button
          onClick={handleTodoAdd}
          className="cursor-pointer rounded-md bg-neutral-950 px-4 py-2 text-neutral-100 border-1 transition-colors hover:bg-neutral-100 hover:text-neutral-800 hover:border-1 active:bg-neutral-700 "
        >
          追加
        </button>
      </div>
      <div className="flex flex-col gap-5 border-solid border-gray-800 border-1 p-10 w-4/5 rounded-md">
        <h2 className="text-2xl font-bold">タスクリスト</h2>
        <ul className="flex flex-col gap-3 ml-4">
          {list.map((task, index) => (
            <li className="list-disc" key={task}>
              {task}
              <button
                onClick={() => handleDelete(index)}
                className="cursor-pointer rounded-md  px-3 py-1 border-solid border-gray-600 border-1 transition-colors hover:bg-neutral-800 hover:text-neutral-100 active:bg-neutral-700 ml-4"
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
