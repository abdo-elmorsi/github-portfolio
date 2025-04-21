import { FaLongArrowAltRight } from 'react-icons/fa';
import GlowCard from '../helper/glow-card';
import SectionTitle from '../helper/section-title';
import ProjectCard from './project-card';
import Button from '../ui/button';

const Projects = ({ projects, profile }) => {
  return (
    <section 
      id="projects" 
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
      aria-labelledby="projects-title"
    >
      <SectionTitle title="Git Projects" id="projects-title" />
      <p className="sr-only">A collection of my GitHub projects showcasing my development skills and contributions</p>

      <div className="grid py-12 grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
        {
          projects.map(project => (
            <GlowCard key={project.id} identifier={`project-${project.id}`}>
              <ProjectCard project={project} />
            </GlowCard>
          ))
        }
      </div>

      <div className="w-full justify-center flex items-center">
        <Button
          href={profile.html_url} 
          title="View All Projects"
          aria-label="View all projects on GitHub"
        >
          <FaLongArrowAltRight size={16} />
        </Button>
      </div>
    </section>
  );
};

export default Projects;