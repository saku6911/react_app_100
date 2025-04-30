export default function Loading() {
  return (
    <div
      className="flex justify-center items-center h-screen"
      aria-label="読み込み中"
    >
      <div className="animate-spin h-10 w-10 border-4 border-gray-400 rounded-full border-t-transparent"></div>
    </div>
  );
}
