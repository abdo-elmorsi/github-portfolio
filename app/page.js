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
    try {
        // Run metadata fetch in parallel
        const [profile, projects] = await Promise.all([
            getGitProfile(userData.githubUser),
            getGitProjects(userData.githubUser),
        ]);

        const { meta } = generateSEO(profile, projects.items);
        return meta;
    } catch (error) {
        console.error("Error generating metadata:", error);

        return {
            title: "Error",
            description: "An error occurred while fetching the GitHub profile.",
        };
    }
}
