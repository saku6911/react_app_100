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
      <Link href="/counter" className="hover:text-neutral-500">
        02. Counter
      </Link>
      <Link href="/todo" className="hover:text-neutral-500">
        03. Todo
      </Link>
      <Link href="/timer" className="hover:text-neutral-500">
        04. Timer
      </Link>
      <Link href="/calc" className="hover:text-neutral-500">
        05. Calc
      </Link>
      <Link href="/profile" className="hover:text-neutral-500">
        06. Profile
      </Link>
    </div>
  );
}
