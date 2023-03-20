// Imports
import Image from "next/image";
import Link from "next/link";
import projects from "../../../../public/data/projects.json";

// Functions
const Projects = () => (
  <section className="page-width section-padding-y flex flex-col gap-12">
    <h2 className="text-2xl font-bold text-[#212529]">
      Explore selected projects
    </h2>
    <ul className="grid gap-y-12 gap-x-6 sm:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <Project
          title={project.title}
          description={project.description}
          link={project.link}
          image={project.image}
        />
      ))}
    </ul>
  </section>
);

const Project = ({ title, description, link, image }: IProjectProps) => (
  <li>
    <article className="flex flex-col gap-6">
      <div className="relative h-[15rem]">
        <Image src={image} alt={title} className="rounded object-cover" fill />
      </div>
      <section className="flex flex-col gap-4">
        <section className="flex flex-col gap-2">
          <h4 className="font-medium text-[#212529]">{title}</h4>
          <p className="text-xs text-[#495057]">{description}</p>
        </section>
        <Link href={link} className="text-xs text-[#40594D] underline">
          More information
        </Link>
      </section>
    </article>
  </li>
);

// Exports
export default Projects;
