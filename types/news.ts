export interface Author {
    id: string;
    name: string;
    email: string;
    role: "USER" | "ADMIN";
    activeStatus: "ACTIVE" | "INACTIVE";
    createdAt: string;
    updatedAt: string;
}

export interface Comment {
    id: string;
    content: string;
    authorId: string;
    postId: string;
    status: "PENDING" | "APPROVED" | "REJECTED";
    createdAt: string;
    updatedAt: string;
}

export interface Post {
    id: string;
    title: string;
    content: string;
    thumbnail: string;
    isFeatured: boolean;
    isPremium: boolean;
    status: "PUBLISHED" | "DRAFT";

    tags: string[];

    views: number;

    createdAt: string;
    updatedAt: string;

    authorId: string;

    author: Author;

    comments: Comment[];
}

export interface PaginationMeta {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
}

export interface PostsResponse {
    success: boolean;
    statusCode: number;
    message: string;

    data: {
        data: Post[];
        meta: PaginationMeta;
    };
}