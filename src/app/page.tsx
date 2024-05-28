import { services } from "@/services";

export default async function Home() {
  const projects = await services.api.projectService.getAllProjects();

  console.log(projects);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
