'use server'

import { cookies } from 'next/headers';

export const getMe = async () => {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    if (!accessToken) {
        return {
            success: false,
            message: "User not logged in"
        };
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/users/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
            // cookies: `accessToken=${accessToken}` 
        },
        credentials: 'include',
    });

    if (!res.ok) {
        throw new Error(`Failed to fetch user: ${res.status}`);
    }

    return res.json();
};