// utils/seo.js
export function generateSEO(profile, projects = []) {
    // Default values for fallback
    const defaultName = "Abdelrahman Morsi";
    const defaultBio =
        "Full Stack Developer specializing in React, React Native, and Node.js";
    const defaultBlog = "https://elmorsi.vercel.app";

    const profileName = profile?.name || defaultName;
    const profileBio = profile?.bio || defaultBio;
    const profileBlog = profile?.blog || defaultBlog;
    const profileLogin = profile?.login || "abdoelmorsi";
    const avatarUrl = profile?.avatar_url || "/default-avatar.png";

    // 🔹 English Keywords with prioritization
    const englishKeywords = [
        // Primary keywords
        "portfolio",
        "developer",
        "software engineer",
        "full stack developer",
        // Technologies
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
        "Web Development",
        // Personal identifiers
        "Abdo",
        "A. Morsi",
        "Abdo Elmorsi",
        "Abdelrahman Morsi",
        profileLogin,
        // Bio keywords (filter meaningful words)
        ...(profileBio
            ?.split(" ")
            .filter((word) => word.length > 3 && !word.includes("@")) || []),
        // Project names (limit to top 5)
        ...projects.slice(0, 5).map((p) => p.name),
    ];

    // 🔹 Arabic Keywords
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
        "مطور مواقع",
        "مطور برمجيات في مصر",
        "مصمم واجهات مستخدم",
    ];

    // Remove duplicates and limit keywords for better SEO
    const keywords = [
        ...new Set([
            ...englishKeywords.filter(Boolean),
            ...arabicKeywords.filter(Boolean),
        ]),
    ]
        .slice(0, 30)
        .join(", ");

    // 🔹 Structured Data (JSON-LD) with enhanced schema
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: profileName,
        alternateName: ["عبدالرحمن المرسي", "Abdo Elmorsi"],
        description: profileBio.substring(0, 200),
        url: profileBlog,
        sameAs: [
            `https://github.com/${profileLogin}`,
            profile?.twitter_username
                ? `https://twitter.com/${profile.twitter_username}`
                : null,
            "https://www.facebook.com/abdoelmorsii",
            "https://www.instagram.com/abdoelmorsii",
            "https://www.linkedin.com/in/abdelrahman-a-morsi-163263205/",
            profileBlog,
        ].filter(Boolean),
        image: avatarUrl,
        jobTitle: profileBio.split(",")[0]?.trim() || "Full Stack Developer",
        worksFor: {
            "@type": "Organization",
            name: "Freelance Developer",
        },
        knowsAbout: [
            "Web Development",
            "React",
            "Node.js",
            "JavaScript",
            "TypeScript",
            "Mobile App Development",
        ],
    };

    // 🔹 Titles and descriptions
    const shortTitle = `${profileName} | Full Stack Developer`;
    const arabicTitle = "بورتفوليو عبدالرحمن المرسي | مطور برمجيات";

    const descriptionText =
        `${profileBio} - ${profileName}'s portfolio showcasing projects and skills`.substring(
            0,
            155
        );
    const arabicDescription =
        `بورتفوليو ${profileName} يعرض مشاريع وتجارب مطور برمجيات محترف`.substring(
            0,
            155
        );

    const meta = {
        metadataBase: new URL(profileBlog),
        title: `${shortTitle} | ${arabicTitle}`,
        description: `${descriptionText} | ${arabicDescription}`,
        keywords,
        authors: [{ name: profileName }, { name: "عبدالرحمن المرسي" }],
        creator: profileName,
        publisher: profileName,
        formatDetection: {
            telephone: false,
            date: false,
            address: false,
            email: false,
            url: false,
        },
        openGraph: {
            type: "profile",
            url: profileBlog,
            title: `${shortTitle} | ${arabicTitle}`,
            description: `${descriptionText} | ${arabicDescription}`,
            siteName: `${profileName} Portfolio`,
            images: [
                {
                    url: avatarUrl,
                    width: 1200,
                    height: 630,
                    alt: `${profileName} | عبدالرحمن المرسي - Full Stack Developer`,
                    type: "image/jpeg",
                },
            ],
            locale: "en_US",
            alternateLocale: "ar_EG",
            profile: {
                firstName: "Abdelrahman",
                lastName: "Morsi",
                username: profileLogin,
                gender: "male",
            },
        },
        twitter: {
            card: "summary_large_image",
            site: profile?.twitter_username
                ? `@${profile.twitter_username}`
                : "@abdoelmorsii",
            creator: profile?.twitter_username
                ? `@${profile.twitter_username}`
                : "@abdoelmorsii",
            title: `${shortTitle} | مطور برمجيات`,
            description: `${descriptionText} | ${arabicDescription}`,
            images: [avatarUrl],
        },
        robots: {
            index: true,
            follow: true,
            nocache: false,
            googleBot: {
                index: true,
                follow: true,
                noimageindex: false,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
        icons: {
            icon: [
                { url: "/favicon.ico" },
                {
                    url: "/favicon-16x16.png",
                    sizes: "16x16",
                    type: "image/png",
                },
                {
                    url: "/favicon-32x32.png",
                    sizes: "32x32",
                    type: "image/png",
                },
            ],
            apple: [
                {
                    url: "/apple-touch-icon.png",
                    sizes: "180x180",
                    type: "image/png",
                },
            ],
        },
        manifest: "/site.webmanifest",
        verification: {
            google: process.env.GOOGLE_VERIFICATION_ID,
            yandex: process.env.YANDEX_VERIFICATION_ID,
        },
        alternates: {
            canonical: profileBlog,
            languages: {
                "en-US": `${profileBlog}/en`,
                "ar-EG": `${profileBlog}/ar`,
            },
        },
        category: "technology",
    };

    return { meta, jsonLd };
}
