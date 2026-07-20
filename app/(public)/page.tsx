import Link from "next/link";


export default async function Home() {

  return (
    <div className="flex flex-col flex-1 items-center justify-center  font-sans">
      This is Prisma Press UI. Blogs Page--: <Link href={"/blogs"}>Blogs</Link>
    </div>
  );
}
