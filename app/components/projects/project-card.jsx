import { colors } from "@/app/assets/colors";
import Link from "next/link";
import { FaRegStar } from "react-icons/fa";
import { FaCodeFork } from "react-icons/fa6";
import { IoLinkSharp } from "react-icons/io5";

// @flow strict
function ProjectCard({ project }) {
  return (
    <article>
      <Link 
        href={project.html_url} 
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${project.name} project on GitHub`}
      >
        <div className="p-8 h-48 flex flex-col justify-between bg-primary-bg">
          <div>
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold capitalize text-primary-title">
                {project.name}
              </h3>
              <IoLinkSharp 
                className="text-primary-icon text-xl" 
                aria-hidden="true"
              />
            </div>
            <p className="line-clamp-2 text-primary-text my-5 text-sm">
              {project.description}
            </p>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <p className="flex items-center gap-2">
                <FaRegStar 
                  className="text-primary-icon" 
                  aria-hidden="true"
                />
                <span>{project.stargazers_count}</span>
              </p>
              <p className="flex items-center gap-2">
                <FaCodeFork 
                  className="text-primary-icon" 
                  aria-hidden="true"
                />
                <span>{project.forks_count}</span>
              </p>
            </div>
            <p className="flex items-center gap-2">
              <span
                style={{ backgroundColor: colors[project.language] }}
                className="w-3 h-3 rounded-full"
                aria-hidden="true"
              ></span>
              <span className="text-primary-text text-sm">{project.language}</span>
            </p>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default ProjectCard;