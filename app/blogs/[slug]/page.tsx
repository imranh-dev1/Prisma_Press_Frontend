import Link from "next/link"

export default async function BlogPostPage({ params, }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params


    return (
        <div className="min-h-full flex flex-col">
            <h1>Blog: {slug} </h1> Home Page: <Link href={"/"}>Home</Link>
        </div>
    )
}