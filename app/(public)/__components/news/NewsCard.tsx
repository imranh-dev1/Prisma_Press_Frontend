import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    CalendarDays,
    Eye,
    MessageCircle,
    Star,
    Crown,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { Post } from "@/types/news";
import newsImage from "@/public/news.avif"


interface Props {
    post: Post;
}

export default function NewsCard({ post }: Props) {
    return (
        <Card className="group overflow-hidden rounded-2xl border bg-background transition-all duration-300 hover:-translate-y-1 hover:shadow-xl pt-0">

            {/* Thumbnail */}

            <div className="relative h-60 overflow-hidden">

                <Image
                    src={newsImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute left-4 top-4 flex gap-2">

                    {post.isFeatured && (
                        <Badge className="gap-1 bg-amber-500 text-white">
                            <Star className="h-3 w-3 fill-white" />
                            Featured
                        </Badge>
                    )}

                    {post.isPremium && (
                        <Badge className="gap-1 bg-violet-600 text-white">
                            <Crown className="h-3 w-3" />
                            Premium
                        </Badge>
                    )}
                </div>

            </div>

            <CardContent className="space-y-5">

                {/* Status */}

                <Badge
                    variant="outline"
                    className="rounded-full"
                >
                    {post.status}
                </Badge>

                {/* Title */}

                <Link href={`/news/${post.id}`}>
                    <h2 className="line-clamp-2 text-2xl font-bold transition-colors group-hover:text-primary">
                        {post.title}
                    </h2>
                </Link>

                {/* Description */}

                <p className="line-clamp-3 text-sm leading-7 text-muted-foreground">
                    {post.content}
                </p>

                {/* Tags */}

                <div className="flex flex-wrap gap-2">

                    {post.tags.map((tag) => (
                        <Badge
                            key={tag}
                            variant="secondary"
                        >
                            #{tag}
                        </Badge>
                    ))}

                </div>

            </CardContent>

            <CardFooter className="flex flex-col items-start gap-5">

                {/* Author */}

                <div className="flex items-center justify-between w-full">

                    <div>

                        <p className="font-semibold">
                            {post.author.name}
                        </p>

                        <p className="text-xs text-muted-foreground">
                            {post.author.role}
                        </p>

                    </div>

                </div>

                {/* Meta */}

                <div className="flex flex-wrap gap-5 text-sm text-muted-foreground">

                    <div className="flex items-center gap-1">

                        <Eye size={16} />

                        {post.views}

                    </div>

                    <div className="flex items-center gap-1">

                        <MessageCircle size={16} />

                        {post.comments.length}

                    </div>

                    <div className="flex items-center gap-1">

                        <CalendarDays size={16} />

                        {new Date(post.createdAt).toLocaleDateString()}

                    </div>

                </div> 

                <Button className="w-full ">
                    <Link
                        href={`/news/${post.id}`}
                        className="flex items-center justify-center gap-2 w-full "
                    >
                        Read Article
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </Button>

            </CardFooter>

        </Card>
    );
}