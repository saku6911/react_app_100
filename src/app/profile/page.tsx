import { Card } from "./components/card";
import { Input } from "./components/input";

export default function Profile() {
  return (
    <div className="flex max-md:flex-col items-center justify-center h-screen gap-30">
      <Card />
      <Input />
    </div>
  );
}
