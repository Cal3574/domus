import {
  IProjectServiceInterface,
  projectService,
} from "./modules/project.service";

/**
 * Defines all the services that will be interacting with APIs
 */
export interface IServicesApis {
  projectService: IProjectServiceInterface;
}

/**
 * Defines the different services that are available
 */
export interface IServices {
  api: IServicesApis;
}

/**
 * Implementation of services that will be interacting with APIs
 */

export const services: IServices = {
  api: {
    projectService: projectService,
  },
};
