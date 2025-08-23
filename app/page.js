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

export default async function Home() {
    const profile = await getGitProfile();
    const projects = await getGitProjects();

    const { jsonLd } = generateSEO(profile, projects.items);

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
        const projects = await getGitProjects();
        const { meta } = generateSEO(profile, projects.items);

        return meta;
    } catch (error) {
        return {
            title: "Error",
            description: "An error occurred while fetching the GitHub profile.",
        };
    }
}
