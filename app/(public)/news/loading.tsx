import NewsSkeleton from "../__components/news/NewsSkeleton";


export default function Loading() {
    return (
        <main className="mx-auto container px-5 py-10">
            <NewsSkeleton />
        </main>
    );
}