import { Skeleton } from "@/components/ui/skeleton";

interface NewsSkeletonProps {
    count?: number;
}

export default function NewsSkeleton({
    count = 6,
}: NewsSkeletonProps) {
    return (
        <section className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: count }).map((_, index) => (
                <div
                    key={index}
                    className="overflow-hidden rounded-2xl border bg-background"
                >
                    {/* Thumbnail */}
                    <Skeleton className="h-60 w-full rounded-none" />

                    <div className="space-y-5 p-6">
                        {/* Badge */}
                        <Skeleton className="h-6 w-24 rounded-full" />

                        {/* Title */}
                        <div className="space-y-2">
                            <Skeleton className="h-7 w-4/5" />
                            <Skeleton className="h-7 w-2/3" />
                        </div>

                        {/* Description */}
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-3/4" />
                        </div>

                        {/* Tags */}
                        <div className="flex gap-2">
                            <Skeleton className="h-7 w-16 rounded-full" />
                            <Skeleton className="h-7 w-20 rounded-full" />
                            <Skeleton className="h-7 w-14 rounded-full" />
                        </div>

                        {/* Author */}
                        <div className="flex items-center gap-3">
                            <Skeleton className="h-10 w-10 rounded-full" />

                            <div className="space-y-2">
                                <Skeleton className="h-4 w-28" />
                                <Skeleton className="h-3 w-20" />
                            </div>
                        </div>

                        {/* Meta */}
                        <div className="flex justify-between">
                            <Skeleton className="h-4 w-14" />
                            <Skeleton className="h-4 w-14" />
                            <Skeleton className="h-4 w-20" />
                        </div>

                        {/* Button */}
                        <Skeleton className="h-11 w-full rounded-xl" />
                    </div>
                </div>
            ))}
        </section>
    );
}