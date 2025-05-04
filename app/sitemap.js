// app/sitemap.js
export default async function sitemap() {
    return [
        {
            url: "http://elmorsi.vercel.app",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
    ];
}
