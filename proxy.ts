import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';


const AUTH_ROUTES = ["/login", "/register"];

export async function proxy(request: NextRequest) {

    const pathname = request.nextUrl.pathname;

    const cookieStore = await cookies();

    let aceessToken = request.cookies.get("accessToken")?.value;
    let refreshToken = request.cookies.get("refreshToken")?.value;


    let decodedAccessToken = accessToken ? jwtUtils.verifyToken(accessToken, process.env.JWT_ACCESS_SECRET as string) : null;

    const decodedRefreshToken = refreshToken ? jwtUtils.verifyToken(refreshToken, process.env.JWT_REFRESH_SECRET as string) : null;

    return NextResponse.redirect(new URL('/', request.url));
}

export const config = {
    matcher: [
        // '/dashboard/:path*',
        // '/admin-dashboard/:path*',
        // '/author-dashboard/:path*',
        '/((?!api|_next/static|_next/image|.*\\.png$).*)',
    ]
}