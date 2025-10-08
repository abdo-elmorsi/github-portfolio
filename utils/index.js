// utils/generateSEO.js

// Consolidated and improved SEO metadata generator.
// Merges the older `seo.js` and the existing `generateSEO` implementation
// to provide bilingual titles/descriptions, prioritized keywords, structured
// JSON-LD, Open Graph, Twitter cards, alternates, icons, and safe fallbacks.
export const generateSEO = (profile = {}, projects = []) => {
    // --- safe defaults/fallbacks ---
    const fullName = profile?.name || "Abdelrahman (Abdo) Elmorsi";
    const username = profile?.login || "elmorsi";
    const defaultBlog = "https://elmorsi.vercel.app";
    const profileBlog = profile?.blog || defaultBlog;
    const profileBio = profile?.bio || "Full Stack Developer specializing in React, React Native, and Node.js.";
    const avatarUrl = profile?.avatar_url || "https://placehold.co/1200x630";

    // --- name variants for broader coverage ---
    const englishNameVariants = [
        "Abdelrahman Elmorsi",
        "Abdelrahman Morsi",
        "Abdo Elmorsi",
        "Abdo Morsi",
        "A. Elmorsi",
        "A. Morsi",
    ];

    const arabicNameVariants = [
        "عبدالرحمن المرسي",
        "عبده المرسي",
        "عبده مرسى",
        "عبده المرسى",
        "عبدالرحمن المرسى",
    ];

    // --- keywords: merge, dedupe, include profile bio tokens and project names ---
    const bioKeywords = (profileBio || "")
        .split(/\s+/)
        .map((w) => w.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ""))
        .filter((w) => w.length > 3 && !w.includes("@"));

    const projectNames = Array.isArray(projects)
        ? projects.slice(0, 8).map((p) => p?.name).filter(Boolean)
        : [];

    const englishKeywords = [
        ...englishNameVariants,
        "Full Stack Developer",
        "React Developer",
        "React Native Developer",
        "Node.js Developer",
        "JavaScript Developer",
        "Frontend Developer",
        "Backend Developer",
        "Software Engineer",
        "Portfolio",
        "Elmorsi Portfolio",
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        username,
        ...bioKeywords,
        ...projectNames,
    ];

    const arabicKeywords = [
        ...arabicNameVariants,
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
        "نكست جي اس",
        "تايلويند سي اس اس",
    ];

    // build final keywords string (dedupe, limit)
    const combinedKeywords = [...new Set([...(englishKeywords || []), ...(arabicKeywords || [])])]
        .slice(0, 40)
        .filter(Boolean);
    const keywords = combinedKeywords.join(", ");

    // --- bilingual descriptions and titles ---
    const fullDescription = `${profileBio} | Portfolio of ${fullName} | عبده المرسي — Full Stack Developer specializing in React, React Native, and Node.js.`;
    const shortTitle = `${fullName} | Full Stack Developer`;
    const arabicTitle = `بورتفوليو ${arabicNameVariants[0]} | مطور برمجيات`;

    // Ensure metadataBase is a valid URL (Next.js app metadata sometimes expects a URL instance)
    let metadataBase;
    try {
        metadataBase = new URL(profileBlog);
    } catch (e) {
        metadataBase = new URL(defaultBlog);
    }

    // --- OpenGraph & Twitter image ---
    const ogImage = profile?.twitter_banner || avatarUrl;

    // --- assemble meta object used by Next.js / HTML head ---
    const meta = {
        metadataBase,
        title: `${shortTitle} | ${arabicTitle}`,
        description: fullDescription.substring(0, 320),
        keywords,
        authors: [{ name: fullName }, { name: arabicNameVariants[0] }],
        creator: fullName,
        publisher: fullName,
        formatDetection: {
            telephone: false,
            date: false,
            address: false,
            email: false,
            url: false,
        },
        openGraph: {
            type: "website",
            url: profileBlog,
            title: `${shortTitle} | ${arabicTitle}`,
            description: fullDescription.substring(0, 320),
            siteName: `${fullName} Portfolio`,
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: `${fullName} Portfolio`,
                    type: "image/jpeg",
                },
            ],
            locale: "en_US",
            alternateLocale: "ar_EG",
        },
        twitter: {
            card: "summary_large_image",
            site: profile?.twitter_username ? `@${profile.twitter_username}` : "@abdoelmorsii",
            creator: profile?.twitter_username ? `@${profile.twitter_username}` : "@abdoelmorsii",
            title: `${shortTitle} | مطور برمجيات`,
            description: fullDescription.substring(0, 320),
            images: [ogImage],
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
                { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
                { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
            ],
            apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
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

    // --- JSON-LD structured data ---
    const sameAs = [
        `https://github.com/${username}`,
        profile?.blog || null,
        profile?.twitter_username ? `https://twitter.com/${profile.twitter_username}` : null,
        profile?.linkedin ? profile.linkedin : null,
    ].filter(Boolean);

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: fullName,
        alternateName: [...englishNameVariants, ...arabicNameVariants],
        jobTitle: profileBio.split(/[.,]/)[0]?.trim() || "Full Stack Developer",
        description: (profileBio || fullDescription).substring(0, 300),
        url: profileBlog,
        image: avatarUrl,
        sameAs,
        knowsAbout: ["React", "React Native", "Node.js", "JavaScript", "Next.js", "Web Development", "Mobile Development"],
        worksFor: {
            "@type": "Organization",
            name: profile?.company || "Freelance / Remote",
        },
        hasPart: Array.isArray(projects)
            ? projects.slice(0, 10).map((project) => ({
                  "@type": "SoftwareSourceCode",
                  name: project?.name,
                  description: project?.description,
                  url: project?.html_url || project?.url,
                  programmingLanguage: project?.language || "JavaScript",
              }))
            : undefined,
    };

    return { meta, jsonLd };
};
