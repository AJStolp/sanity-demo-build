import { createClient } from "next-sanity";

export const projectId = process.env.SANITY_PROJECT_ID;
export const dataset = process.env.SANITY_DATASET;
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
