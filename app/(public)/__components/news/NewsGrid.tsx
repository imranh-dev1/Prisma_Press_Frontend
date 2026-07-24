import { Post } from "@/types/news";
import NewsCard from "./NewsCard";

interface NewsGridProps {
    posts: Post[];
}

export default function NewsGrid({ posts }: NewsGridProps) {
    if (!posts.length) {
        return (
            <section className="flex min-h-96 items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold">
                        No articles found
                    </h2>

                    <p className="mt-2 text-muted-foreground">
                        There are currently no published articles.
                    </p>
                </div>
            </section>
        );
    }

    return (
        <section
            className="
      grid
      gap-8
      md:grid-cols-2
      xl:grid-cols-3
      "
        >
            {posts.map((post) => (
                <NewsCard
                    key={post.id}
                    post={post}
                />
            ))}
        </section>
    );
}