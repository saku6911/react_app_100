"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function QuizzPage() {
  const totalTime = 10;
  const [timeLeft, setTimeLeft] = useState(totalTime);
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (timeLeft > 0 && !isSubmitted) {
      const timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !isSubmitted) {
      setResult("時間切れです！");
      setIsSubmitted(true);
    }
  }, [timeLeft, isSubmitted]);

  const handleSubmit = () => {
    if (isSubmitted) return;

    if (answer.trim() === "オクラ" || "おくら") {
      const timeTaken = totalTime - timeLeft;
      setResult(`正解！（${timeTaken}秒で解答）`);
    } else {
      setResult("不正解...");
    }
    setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-6 p-4">
      <h1 className="text-4xl">この野菜はなんて読む？「秋葵」</h1>

      {/* プログレスバー */}
      <div className="w-full max-w-xl h-4 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-green-500"
          initial={{ width: "100%" }}
          animate={{
            width: isSubmitted ? `${(timeLeft / totalTime) * 100}%` : "0%",
          }}
          transition={{ duration: timeLeft, ease: "linear" }}
        />
      </div>
      <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        className="border p-2 rounded w-64 text-center"
        disabled={isSubmitted}
      />
      <button
        onClick={handleSubmit}
        className="bg-gray-800 text-white px-4 py-2 rounded hover:opacity-80 transition duration-150"
        disabled={isSubmitted}
      >
        回答
      </button>

      {/* 結果表示 */}
      {result && (
        <p
          className={`text-2xl mt-4 ${
            result === "正解！"
              ? "text-red-600"
              : result === "不正解..."
              ? "text-red-600"
              : "text-orange-500"
          }`}
        >
          {result}
        </p>
      )}
    </div>
  );
}
