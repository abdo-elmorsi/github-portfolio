// utils/seo.js
export function generateSEO(profile, projects = []) {
    const englishKeywords = [
        "portfolio",
        "developer",
        "software engineer",
        "React",
        "React Native",
        "Node.js",
        "Express",
        "MongoDB",
        "MySQL",
        "PostgreSQL",
        "Next.js",
        "Tailwind CSS",
        "JavaScript",
        "TypeScript",
        "full stack developer",
        "A",
        "Morsi",
        "Abdo",
        "Abdo Elmorsi",
        "Abdelrahman Morsi",
        profile.login,
        ...(profile.bio?.split(" ").filter((word) => word.length > 3) || []),
        ...projects.map((p) => p.name),
    ];

    const arabicKeywords = [
        "بورتفوليو",
        "مطور",
        "مهندس برمجيات",
        "مطور ويب",
        "مطور تطبيقات",
        "تطوير الويب",
        "مطور فول ستاك",
        "جافاسكربت",
        "تايب سكربت",
        "ريأكت",
        "ريأكت نيتيف",
        "نود جي اس",
        "اكسبريس",
        "مونجو دي بي",
        "ماي اس كيو ال",
        "بوستجري اس كيو ال",
        "نكست جي اس",
        "تايلويند سي اس اس",
        "عبدالرحمن المرسي",
        "عبده المرسي",
        "سيرة ذاتية للمطور",
    ];

    const keywords = [...englishKeywords, ...arabicKeywords].join(", ");

    // JSON-LD structured data (bilingual)
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: profile.name,
        alternateName: "عبدالرحمن المرسي",
        description: profile.bio,
        url: profile.blog,
        sameAs: [
            `https://github.com/${profile.login}`,
            profile.twitter_username
                ? `https://twitter.com/${profile.twitter_username}`
                : null,
            "https://www.facebook.com/abdoelmorsii",
            "https://www.instagram.com/abdoelmorsii",
        ].filter(Boolean),
        image: profile.avatar_url,
        jobTitle: profile.bio?.split(",")[0] || "Software Developer",
    };

    const shortTitle = `${profile.name} | Full Stack Developer`; // ✅ under 60 chars
    const arabicTitle = "بورتفوليو عبدالرحمن المرسي"; // ✅ short Arabic version

    const meta = {
        title: `${shortTitle} | ${arabicTitle}`, // ✅ fits in 70–75 chars
        description:
            `${profile.bio} - ${profile.name}'s portfolio | ${arabicTitle}`.slice(
                0,
                150
            ),
        keywords,
        authors: [{ name: profile.name }, { name: "عبدالرحمن المرسي" }],
        creator: profile.name,
        publisher: profile.name,
        viewport: {
            width: "device-width",
            initialScale: 1,
            maximumScale: 1,
        },
        openGraph: {
            type: "website",
            url: profile.blog,
            title: `${shortTitle} | ${arabicTitle}`,
            description:
                `${profile.bio} - ${profile.name}'s portfolio | بورتفوليو`.slice(
                    0,
                    150
                ),
            siteName: `${profile.name} Portfolio`,
            images: [
                {
                    url: profile.avatar_url,
                    width: 1200,
                    height: 630,
                    alt: `${profile.name} | عبدالرحمن المرسي`,
                },
            ],
            locale: "en_US",
            alternateLocale: "ar_EG",
        },
        twitter: {
            card: "summary_large_image",
            site: profile.twitter_username
                ? `@${profile.twitter_username}`
                : undefined,
            creator: profile.twitter_username
                ? `@${profile.twitter_username}`
                : undefined,
            title: `${shortTitle} | مطور برمجيات`, // shorter Twitter title
            description:
                `${profile.bio} - ${profile.name}'s portfolio | بورتفوليو`.slice(
                    0,
                    150
                ),
            images: [
                {
                    url: profile.avatar_url,
                    width: 1200,
                    height: 630,
                    alt: `${profile.name} | عبدالرحمن المرسي`,
                },
            ],
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
        icons: [
            {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                url: "/favicon-32x32.png",
            },
            {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                url: "/favicon-16x16.png",
            },
            {
                rel: "apple-touch-icon",
                sizes: "180x180",
                url: "/apple-touch-icon.png",
            },
        ],
        manifest: "/site.webmanifest",
        alternates: {
            canonical: profile.blog,
        },
    };

    return { meta, jsonLd };
}
