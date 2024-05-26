import { userData } from "@/data/user-data";
import Contributions from "./components/contributions";
import HeroSection from "./components/hero-section";
import GitLanguage from "./components/language";
import Projects from "./components/projects";
import Rank from "./components/rank";
import GitStats from "./components/stats";
import Navbar from "./components/navbar";

// Revalidate every 1 day (86400 seconds)
const REVALIDATE_PERIOD = 86400;

async function getGitProfile() {
    const res = await fetch(
        `https://api.github.com/users/${userData.githubUser}`,
        { next: { revalidate: REVALIDATE_PERIOD } }
    );
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return await res.json();
}

async function getGitProjects() {
    const res = await fetch(
        `https://api.github.com/search/repositories?q=user:${userData.githubUser}+fork:false&sort=updated&per_page=10&type=Repositories`,
        { next: { revalidate: REVALIDATE_PERIOD } }
    );
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return await res.json();
}

export default async function Home() {
    const profile = await getGitProfile();
    const projects = await getGitProjects();
console.log(projects);
    return (
        <>
            <Navbar name={profile.name} />
            <HeroSection profile={profile} />
            <GitStats />
            <Projects projects={projects.items} profile={profile} />
            <GitLanguage />
            <Rank />
            <Contributions />
        </>
    );
}

export async function generateMetadata() {
    try {
        const profile = await getGitProfile();
        return {
            title: profile.name,
            description: profile.bio,
            openGraph: {
                type: "website",
                url: profile.blog,
                title: profile.name,
                description: profile.bio,
                images: [
                    {
                        url: profile.avatar_url,
                        width: 1200,
                        height: 630,
                        alt: profile.name,
                    },
                ],
            },
            twitter: {
                card: "summary_large_image",
                site: `@${profile.twitter_username}`,
                title: profile.name,
                description: profile.bio,
                images: [
                    {
                        url: profile.avatar_url,
                        width: 1200,
                        height: 630,
                    },
                ],
            },
            robots: {
                index: true,
                follow: true,
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
        };
    } catch (error) {
        console.error("Error fetching GitHub profile:", error);
        return {
            title: "Error",
            description: "An error occurred while fetching the GitHub profile.",
        };
    }
}
