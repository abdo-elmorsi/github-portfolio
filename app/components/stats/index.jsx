// @flow strict
import { userData } from "@/app/assets/user-data";
import GlowCard from "../helper/glow-card";
import SectionTitle from "../helper/section-title";

function GitStats() {
  return (
    <div id="statistics" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <SectionTitle title="GitHub Statistics" />
      <div className="py-8 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="md:col-span-2">
          <GlowCard identifier="profile-details">
            <div className="bg-primary-bg">
              <img
                src={`https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=${userData.githubUser}&theme=algolia`}
                alt="github profile-details"
                height={520}
                className="rounded-lg  min-w-[1080px] mx-auto"
              />
            </div>
          </GlowCard>
        </div>
        <>
          <GlowCard identifier="github-stats">
            <img
              loading="lazy"
              src={`https://github-readme-stats.vercel.app/api?username=${userData.githubUser}&show_icons=true&include_all_commits=true&theme=algolia&hide_border=true`}
              alt="github stats"
              height={520}
              className="rounded-lg w-full"
            />
          </GlowCard>
          <GlowCard identifier="github-stats-2">
            <img
              loading="lazy"
              src={`https://github-readme-stats.vercel.app/api?username=${userData.githubUser}&show_icons=true&include_all_commits=true&theme=algolia&hide_border=true&show=reviews,discussions_started,discussions_answered,prs_merged,prs_merged_percentage&hide=stars,commits,prs,issues,contribs`}
              alt="github stats"
              height={520}
              className="rounded-lg w-full"
            />
          </GlowCard>
        </>
      </div>
    </div>
  );
};

export default GitStats;