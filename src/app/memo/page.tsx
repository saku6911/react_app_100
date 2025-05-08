import { Editor } from "./components/editor";
import { MemoList } from "./components/memoList.s";

export default function Memo() {
  return (
    <div className="flex ">
      <MemoList />
      <Editor />
    </div>
  );
}
