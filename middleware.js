import { NextResponse } from "next/server";

export function middleware(request) {
    const url = request.nextUrl;

    // Handle index page redirects
    if (url.pathname === "/index.html" || url.pathname === "/index.php") {
        return NextResponse.redirect(new URL("/", request.url));
    }

    const response = NextResponse.next();

    // Add X-Robots-Tag header
    response.headers.set("X-Robots-Tag", "index, follow");

    // Add canonical link header
    const canonicalUrl = new URL(
        url.pathname,
        "https://elmorsi.vercel.app"
    ).toString();
    response.headers.set("Link", `<${canonicalUrl}>; rel="canonical"`);

    return response;
}

// Configure which paths the middleware should run on
export const config = {
    matcher: ["/:path*", "/index.html", "/index.php"],
};
