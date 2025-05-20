import ImageSlider from "./components/sliderPage";

export default function Slider() {
  return (
    <main className="flex flex-col gap-6 justify-center items-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold">Slider</h1>
      <ImageSlider />
    </main>
  );
}
