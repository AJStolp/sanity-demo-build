import { createClient } from "next-sanity";

export const projectId: string = process.env.SANITY_PROJECT_ID!;
export const dataset: string = process.env.SANITY_DATASET!;
export const apiVersion: string = process.env.SANITY_API_VERSION!;

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
