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
        `https://api.github.com/search/repositories?q=user:${userData.githubUser}+fork:false&sort=stars&per_page=10&type=Repositories`,
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
    console.log({ profile });
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
    const profile = await getGitProfile();

    return {
        title: profile.name,
        description: profile.bio,
    };
}
