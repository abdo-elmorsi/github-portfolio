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
    return (
        <>
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
