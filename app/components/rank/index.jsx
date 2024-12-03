// @flow strict
import { userData } from "@/app/assets/user-data";
import GlowCard from "../helper/glow-card";
import SectionTitle from "../helper/section-title";

function Rank() {
  return (
    <div id="rank" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <SectionTitle title="Streak & Rank" />

      <div className="py-8 grid grid-cols-1 md:grid-cols-2 gap-5">
        <>
          <GlowCard identifier="streak">
            <img
              loading="lazy"
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${userData.githubUser}&theme=algolia&hide_border=true`}
              alt="github streak"
              className="rounded-lg md:h-52 lg:h-60 w-full bg-primary-bg"
            />
          </GlowCard>
          <GlowCard identifier="productive-time">
            <img
              loading="lazy"
              src={`https://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=${userData.githubUser}&theme=algolia&utcOffset=${userData.timezone}`}
              alt="github productive-time"
              className="rounded-lg md:h-52 lg:h-60 w-full bg-primary-bg"
            />
          </GlowCard>
        </>

        <>
          <img
            loading="lazy"
            src={`https://stardev.io/developers/${userData.githubUser}/badge/languages/global.svg`}
            alt="github global"
            height={520}
            className="rounded-lg w-full"
          />
          <img
            loading="lazy"
            src={`https://stardev.io/developers/${userData.githubUser}/badge/languages/locality.svg`}
            alt="github locality"
            height={520}
            className="rounded-lg w-full"
          />
        </>
      </div>
    </div>
  );
};

export default Rank;