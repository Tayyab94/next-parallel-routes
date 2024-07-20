import { delay } from "@/lib/utils";
import Image from "next/image";

export default async function Home() {
  await delay(1000)
  return (
    <div className='h-60 rounded-xl bg-sky-800 p-10 text-white'>
      <h1 className='text-3xl font-bold'>Parallel Routes</h1>
    </div>
  );
}
