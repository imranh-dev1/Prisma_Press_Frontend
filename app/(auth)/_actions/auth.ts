'use server';

import { cookies } from "next/headers";

export interface LoginState {
    success: boolean;
    statusCode: number;
    message: string;
    data?: {
        accessToken: string;
        refressToken: string;
    };
}

export const loginAction = async (prevState: LoginState, formData: FormData) => {
    try {
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        const response = await fetch(`${process.env.BACKEND_API_URL}/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        const result: LoginState = await response.json();

        // console.log(result)

        if (result.success && result.data) {
            const cookieStore = await cookies();

            cookieStore.set("accessToken", result.data.accessToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
                path: "/",
                maxAge: 60 * 60 * 24,
            });

            cookieStore.set("refreshToken", result.data.refressToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
                path: "/",
                maxAge: 60 * 60 * 24 * 7,
            });
        }

        return result;

    } catch {
        return {
            success: false,
            statusCode: 500,
            message: "Something went wrong",
        };
    }
};