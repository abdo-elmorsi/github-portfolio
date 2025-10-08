// @flow strict
import { userData } from "@/app/assets/user-data";
import Link from "next/link";
import { CgGitFork } from "react-icons/cg";
import { IoStar } from "react-icons/io5";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t bg-[#0d1224] border-[#353951] text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        {/* Decorative gradient line */}
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>

        {/* Footer content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          {/* Developer credit */}
          <p className="text-base text-gray-300">
            © {currentYear}{" "}
            <span className="text-primary-icon font-medium">
              {userData.devUsername} (Abdelrahman / عبده المرسي)
            </span>
            . All Rights Reserved.
          </p>

          {/* Action links */}
          <div className="flex items-center gap-5 text-sm font-semibold">
            <Link
              target="_blank"
              href={userData.github}
              className="flex items-center gap-2 uppercase transition-all hover:text-primary-icon hover:scale-105"
            >
              <IoStar className="text-lg" />
              <span>Star</span>
            </Link>

            <Link
              target="_blank"
              href={`${userData.github}/github-portfolio/fork`}
              className="flex items-center gap-2 uppercase transition-all hover:text-primary-icon hover:scale-105"
            >
              <CgGitFork className="text-lg" />
              <span>Fork</span>
            </Link>
          </div>
        </div>

        {/* Extra bilingual tagline for SEO */}
        <div className="mt-4 text-center text-sm text-gray-400">
          <p>
            Built by <Link href={userData.linkedIn} target="_blank" className="text-primary-icon hover:underline">Abdelrahman (Abdo) Elmorsi</Link> — Full Stack Developer | مطور فول ستاك
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
