import { getPosts } from "@/service/news.service";
import NewsGrid from "../__components/news/NewsGrid";


export const metadata = {
    title: "Latest News | Prisma Press",
    description: "Latest programming news and articles",
};

interface Props {
    searchParams: Promise<{
        page?: string;
    }>;
}

export default async function NewsPage({ searchParams, }: Props) {
    const params = await searchParams;

    const page = Number(params.page || 1);

    const { data: posts, meta } = await getPosts(page);

    return (
        <main className="">

            {/* Hero */}

            <section className="">
                <div className="mx-auto container px-5 md:px-0 py-10">
                    <h1 className="mt-5 text-5xl font-bold tracking-tight">
                        Latest News & Articles
                    </h1>

                    <p className="mt-4 max-w-2xl text-muted-foreground">
                        Discover tutorials, programming guides,
                        development tips and the latest technology news.
                    </p>

                </div>

            </section>

            {/* Grid */}

            <section className="mx-auto container px-5 md:px-0 py-4">

                <NewsGrid posts={posts} />

            </section>

            {/* Pagination */}

            <section className="pb-20">

                <div className="flex justify-center gap-3">

                    {Array.from(
                        { length: meta.totalPages },
                        (_, index) => (
                            <a
                                key={index}
                                href={`/news?page=${index + 1}`}
                                className={`
                rounded-lg border px-4 py-2 transition

                ${page === index + 1
                                        ? "bg-primary text-primary-foreground"
                                        : "hover:bg-muted"
                                    }
                `}
                            >
                                {index + 1}
                            </a>
                        )
                    )}

                </div>

            </section>

        </main>
    );
}