import AllProjects from "@/app/components/projects/AllProjects";
import { services } from "@/services";
export default async function Projects() {
  const projects = await services.api.projectService.getAllProjects();

  return <AllProjects projects={projects} />;
}
