import client from "@/utils/contentful";
import axios from "axios";
export interface IProjectServiceInterface {
  /**
   * Get all projects to display on projects page
   */
  getAllProjects: () => any;

  getProjectBySlug: (slug: string) => any;
}
export const projectService: IProjectServiceInterface = {
  getAllProjects: async () => {
    console.log("Getting all projects");

    const projects = await client.getEntries({
      content_type: "projects",
    });
    return projects;
  },

  getProjectBySlug: async (slug: string) => {
    console.log("Getting project by slug");

    const project = await client.getEntries({
      content_type: "projects",
      "fields.slug": slug,
    });
    return project;
  },
};
