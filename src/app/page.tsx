import HelloWorld from "./helloworld/page";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="text-4xl  text-center font-bold py-20">
        React App 100 knock
      </h1>
      <Link href="/helloworld" className="hover:text-neutral-500">
        01. Hello World
      </Link>
    </div>
  );
}
