"use client";
import { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface AllProjectsProps {
  projects: any;
}

const AllProjects: FC<AllProjectsProps> = (props) => {
  const router = useRouter();

  const navigateToProject = (slug: string) => {
    router.push(`/projects/${slug}`);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Projects</h1>
      <div className="grid grid-cols-3 gap-4">
        {props.projects.items.map((project: any) => (
          <div
            className="bg-gray-100 p-4 rounded-md"
            key={project.sys.id}
            onClick={() => {
              navigateToProject(project.fields.slug);
            }}
          >
            <h2 className="text-2xl font-bold">{project.fields.client}</h2>
            <p>{project.fields.description}</p>
            <Image
              src={`https:${project.fields.images[0].fields.file.url}`}
              alt={"title"}
              width={200}
              height={200}
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default AllProjects;
