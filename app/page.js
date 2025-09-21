import Navbar from "@/app/components/navbar";
import HeroSection from "@/app/components/hero-section";
import GitStats from "@/app/components/stats";
import Projects from "@/app/components/projects";
import GitLanguage from "@/app/components/language";
import Rank from "@/app/components/rank";
import Contributions from "@/app/components/contributions";
import Contact from "@/app/components/contact";
import { getGitProfile, getGitProjects } from "./actions";
import { generateSEO } from "@/utils";
import { userData } from "./assets/user-data";

export const revalidate = 86400; // 1 day

export default async function Home() {
    try {
        // Run requests in parallel for performance
        const [profile, projects] = await Promise.all([
            getGitProfile(userData.githubUser),
            getGitProjects(userData.githubUser),
        ]);

        // Generate SEO schema
        const { jsonLd } = generateSEO(profile, projects.items);

        return (
            <>
                {/* SEO structured data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />

                {/* Page sections */}
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
    } catch (error) {
        console.error("Error loading home page data:", error);

        return (
            <div className="flex h-screen items-center justify-center text-center">
                <p className="text-lg font-semibold text-red-500">
                    An error occurred while fetching the GitHub profile.
                </p>
            </div>
        );
    }
}

export async function generateMetadata() {
    const FALLBACK_DATA = {
        title: "Abdelrahman Morsi | Full Stack Developer",
        description:
            "Portfolio of Abdelrahman Morsi - Full Stack Developer specializing in React, React Native, and Node.js",
        canonical: "https://elmorsi.vercel.app",
    };

    try {
        const [profile, projects] = await Promise.allSettled([
            getGitProfile(userData.githubUser),
            getGitProjects(userData.githubUser),
        ]);

        // Handle partial failures
        const profileData =
            profile.status === "fulfilled" ? profile.value : null;
        const projectsData =
            projects.status === "fulfilled" ? projects.value : { items: [] };

        if (!profileData) {
            console.warn(
                "GitHub profile data unavailable, using fallback metadata"
            );
            return {
                title: FALLBACK_DATA.title,
                description: FALLBACK_DATA.description,
                alternates: {
                    canonical: FALLBACK_DATA.canonical,
                    languages: {
                        en: `${FALLBACK_DATA.canonical}/en`,
                        ar: `${FALLBACK_DATA.canonical}/ar`,
                    },
                },
            };
        }

        const { meta, jsonLd } = generateSEO(profileData, projectsData.items);

        return {
            ...meta,
            alternates: {
                canonical: profileData.blog || FALLBACK_DATA.canonical,
                languages: {
                    en: profileData.blog
                        ? `${profileData.blog}/en`
                        : `${FALLBACK_DATA.canonical}/en`,
                    ar: profileData.blog
                        ? `${profileData.blog}/ar`
                        : `${FALLBACK_DATA.canonical}/ar`,
                },
            },
            other: {
                jsonld: JSON.stringify(jsonLd),
            },
        };
    } catch (error) {
        console.error("Critical error generating metadata:", error);

        return {
            title: "Abdelrahman Morsi | Portfolio",
            description:
                "Full Stack Developer specializing in modern web technologies",
            alternates: {
                canonical: FALLBACK_DATA.canonical,
                languages: {
                    en: `${FALLBACK_DATA.canonical}/en`,
                    ar: `${FALLBACK_DATA.canonical}/ar`,
                },
            },
        };
    }
}
