'use server';

interface LoginState {
    success: boolean;
    statusCode: number;
    message: string;
    data?: {
        accessToken: string;
        refreshToken: string;
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
        return await response.json();

    } catch {
        return {
            success: false,
            statusCode: 500,
            message: "Something went wrong",
        };
    }
};