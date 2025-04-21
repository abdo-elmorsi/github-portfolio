import Navbar from "@/app/components/navbar";
import HeroSection from "@/app/components/hero-section";
import GitStats from "@/app/components/stats";
import Projects from "@/app/components/projects";
import GitLanguage from "@/app/components/language";
import Rank from "@/app/components/rank";
import Contributions from "@/app/components/contributions";
import Contact from "@/app/components/contact";
import { getGitProfile, getGitProjects } from "./actions";

export default async function Home() {
    const profile = await getGitProfile();
    const projects = await getGitProjects();

    // Add structured data
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: profile.name,
        description: profile.bio,
        url: profile.blog,
        sameAs: [
            `https://github.com/${profile.login}`,
            profile.twitter_username
                ? `https://twitter.com/${profile.twitter_username}`
                : null,
            `https://www.facebook.com/abdoelmorsii`,
            `https://www.instagram.com/abdoelmorsii`,
        ].filter(Boolean),
        image: profile.avatar_url,
        jobTitle: profile.bio?.split(",")[0] || "Software Developer",
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navbar name={profile.name} />
            <HeroSection profile={profile} />
            <GitStats />
            <Projects projects={projects.items} profile={profile} />
            <GitLanguage />
            <Rank />
            <Contributions />
            <Contact />
        </>
    );
}

export async function generateMetadata() {
    try {
        const profile = await getGitProfile();

        const keywords = [
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
            "Abdo Elmorsi Portfolio",
            "Abdo Elmorsi GitHub",
            "Abdo Elmorsi LinkedIn",
            "Abdo Elmorsi Twitter",
            "Abdelrahman Morsi",
            "Abdelrahman Morsi Portfolio",
            "Abdelrahman Morsi GitHub",
            "Abdelrahman Morsi LinkedIn",
            "Abdelrahman Morsi Twitter",
            profile.login,
            ...(profile.bio?.split(" ").filter((word) => word.length > 3) ||
                []),
        ].join(", ");

        return {
            title: `${profile.name} | Portfolio`,
            description: `${profile.bio.slice(0, 150)} - ${profile.name}'s personal portfolio showcasing projects, skills, and contributions.`,
            keywords,
            authors: [{ name: profile.name }],
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
                title: `${profile.name} | Portfolio`,
                description: `${profile.bio} - ${profile.name}'s personal portfolio showcasing projects, skills, and contributions.`,
                siteName: `${profile.name}'s Portfolio`,
                images: [
                    {
                        url: profile.avatar_url,
                        width: 1200,
                        height: 630,
                        alt: profile.name,
                    },
                ],
                locale: "en_US",
            },
            twitter: {
                card: "summary_large_image",
                site: `@${profile.twitter_username}`,
                creator: `@${profile.twitter_username}`,
                title: `${profile.name} | Portfolio`,
                description: `${profile.bio} - ${profile.name}'s personal portfolio showcasing projects, skills, and contributions.`,
                images: [
                    {
                        url: profile.avatar_url,
                        width: 1200,
                        height: 630,
                        alt: profile.name,
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
    } catch (error) {
        return {
            title: "Error",
            description: "An error occurred while fetching the GitHub profile.",
        };
    }
}
