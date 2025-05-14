"use client";
import { useRouter } from "next/navigation";

export default function Quizz() {
  const router = useRouter();

  const handleStart = () => {
    router.push("/quizz/start");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <h1 className="text-4xl">早押しクイズ</h1>
      <button
        onClick={handleStart}
        className="bg-gray-900 text-white px-6 py-3 rounded text-xl hover:opacity-80 transition duration-150"
      >
        スタート
      </button>
    </div>
  );
}
