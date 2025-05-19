import ClockPage from "./components/clockPage";

export default function Clock() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl pb-6">Clock</h1>
      <ClockPage />
    </div>
  );
}
