import Link from "next/link";


export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      This is Prisma Press UI. Blogs Page--: <Link href={"/blogs"}>Blogs</Link>
    </div>
  );
}
