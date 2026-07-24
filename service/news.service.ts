import { PostsResponse } from "@/types/news";

export async function getPosts(page = 1) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/posts?page=${page}`,
        {
            cache: "no-store",
        }
    );

    if (!response.ok) {
        throw new Error("Failed to fetch posts");
    }

    const result: PostsResponse = await response.json();

    return result.data;
}

export async function getPost(id: string) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/posts/${id}`,
        {
            cache: "no-store",
        }
    );

    if (!response.ok) {
        throw new Error("Failed to fetch post");
    }

    return response.json();
}