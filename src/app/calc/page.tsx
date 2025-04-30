import CalcComponents from "./components/calcComponents";

export default function Calc() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800 gap-10">
      <h1 className="text-4xl text-white">Calc</h1>
      <CalcComponents />
    </div>
  );
}
