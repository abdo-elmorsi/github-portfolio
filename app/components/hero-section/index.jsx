// @flow strict

import { userData } from "@/app/assets/user-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";
import Button from "../ui/button";

function HeroSection({ profile }) {
  return (
    <section 
      className="relative flex flex-col items-center justify-between py-4 lg:py-12"
      aria-labelledby="hero-title"
    >
      <div className="grid grid-cols-1 items-center md:grid-cols-2 lg:gap-12 gap-y-8">
        <article className="flex flex-col items-start justify-center rounded-lg p-3 lg:py-5 lg:px-12 bg-primary-bg h-full">
          <div className="flex w-full justify-center">
            <Image
              src={profile.avatar_url}
              width={128}
              height={128}
              alt={`${profile.name}'s profile picture`}
              title={`${profile.name}'s profile picture`}
              className="rounded-full transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
              priority
            />
          </div>
          <h1 id="hero-title" className="sr-only">{profile.name}'s Portfolio</h1>
          <p className="text-gray-300 text-sm lg:text-base my-4 lg:my-6 text-center">
            {profile.bio}
          </p>

          <nav aria-label="Social media links" className="w-full flex justify-center items-center gap-5">
            <Link
              aria-label="Visit GitHub profile"
              href={profile.html_url}
              target='_blank'
              rel="noopener noreferrer"
              className="transition-all text-teal-500 hover:scale-125 duration-300"
            >
              <BsGithub size={24} />
            </Link>
            <Link
              aria-label="Visit LinkedIn profile"
              href={userData.linkedIn}
              target='_blank'
              rel="noopener noreferrer"
              className="transition-all text-teal-500 hover:scale-125 duration-300"
            >
              <BsLinkedin size={24} />
            </Link>
            <Link
              aria-label="Visit Facebook profile"
              href={userData.facebook}
              target='_blank'
              rel="noopener noreferrer"
              className="transition-all text-teal-500 hover:scale-125 duration-300"
            >
              <FaFacebook size={24} />
            </Link>
            <Link
              aria-label="Visit LeetCode profile"
              href={userData.leetcode}
              target='_blank'
              rel="noopener noreferrer"
              className="transition-all text-teal-500 hover:scale-125 duration-300"
            >
              <SiLeetcode size={24} />
            </Link>
            <Link
              aria-label="Visit Twitter profile"
              href={`https://x.com/${profile.twitter_username}`}
              target='_blank'
              rel="noopener noreferrer"
              className="transition-all text-teal-500 hover:scale-125 duration-300"
            >
              <FaTwitterSquare size={24} />
            </Link>
          </nav>

          <div className="w-full justify-center flex-wrap flex items-center gap-3 mt-6">
            <Button
              href={userData.resume}
              title="Download Resume"
              aria-label="Download resume"
            >
              <MdDownload size={16} />
            </Button>
            <Button
              href={userData.rnVersion}
              title="Download React Native Version"
              aria-label="Download React Native version"
            >
              <MdDownload size={16} />
            </Button>
          </div>
        </article>

        <div className="h-full from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-orange-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-400"></div>
            </div>
          </div>
          <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
            <pre>
              <code className="text-sm lg:text-base">
                <div className="blink">
                  <span className="mr-2 text-pink-400">const</span>
                  <span className="mr-2 text-violet-400">coder</span>
                  <span className="mr-2 text-pink-400">=</span>
                  <span className="text-gray-400">{'{'}</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                  <span className="text-gray-400">{`'`}</span>
                  <span className="text-green-400">{profile.name}</span>
                  <span className="text-gray-400">{`',`}</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-white">company:</span>
                  <span className="text-gray-400">{`'`}</span>
                  <span className="text-green-400">{profile.company}</span>
                  <span className="text-gray-400">{`',`}</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-white">location:</span>
                  <span className="text-gray-400">{`'`}</span>
                  <span className="text-green-400">{profile.location}</span>
                  <span className="text-gray-400">{`',`}</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-white">followers:</span>
                  <span className="text-orange-400">{profile.followers}</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-white">following:</span>
                  <span className="text-orange-400">{profile.following}</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-white">repositories:</span>
                  <span className="text-orange-400">{profile.public_repos}</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div className="ml-4 lg:ml-8 mr-2 text-wrap">
                  <span className=" text-white">skills:</span>
                  <span className="text-gray-400">{`['`}</span>
                  {
                    userData.skills.map((skill, i) => (
                      <React.Fragment key={skill}>
                        <span className="text-cyan-400">{skill}</span>
                        {
                          i !== userData.skills.length - 1 &&
                          <span className="text-gray-400">{"', '"}</span>
                        }
                      </React.Fragment>
                    ))
                  }
                  <span className="text-gray-400">{"'],"}</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-white">hireable:</span>
                  <span className="text-orange-400">{profile?.hireable.toString()}</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div><span className="text-gray-400">{`};`}</span></div>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;