// @flow strict
import { userData } from "@/app/assets/user-data";
import GlowCard from "../helper/glow-card";
import SectionTitle from "../helper/section-title";

function GitLanguage() {
  return (
    <div id="languages" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <SectionTitle title="GitHub Languages" />

      <div className="py-8 grid grid-cols-1 md:grid-cols-2 gap-5">
        <>
          <GlowCard identifier="repos-per-language">
            <img
              loading="lazy"
              src={`https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=${userData.githubUser}&theme=algolia`}
              alt="github repos-per-language"
              height={560}
              className="rounded-lg lg:h-64 w-full bg-primary-bg"
            />
          </GlowCard>

          <GlowCard identifier="most-commit-language">
            <img
              loading="lazy"
              src={`https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=${userData.githubUser}&theme=algolia`}
              alt="github most-commit-language"
              height={560}
              className="rounded-lg lg:h-64 w-full bg-primary-bg"
            />
          </GlowCard>
        </>

        <div className="md:col-span-2">
          <GlowCard identifier="top-langs">
            <img
              loading="lazy"
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${userData.githubUser}&layout=compact&theme=algolia&hide_border=true&&langs_count=8`}
              alt="github top-langs"
              height={560}
              className="rounded-lg md:h-52 lg:h-64 w-full bg-primary-bg"
            />
          </GlowCard>
        </div>
      </div>
    </div>
  );
};

export default GitLanguage;