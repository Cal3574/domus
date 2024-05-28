import { services } from "@/services";
import Image from "next/image";

interface IndividualProjectProps {
  slug: string;
}
export default async function IndividualProject(props: IndividualProjectProps) {
  const projects = await services.api.projectService.getProjectBySlug(
    props.slug
  );

  console.log(projects);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Projects</h1>
      <div className="grid grid-cols-3 gap-4"></div>
    </main>
  );
}
