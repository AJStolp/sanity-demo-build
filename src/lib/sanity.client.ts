import { createClient } from "next-sanity";

export const projectId: string =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
export const dataset: string = process.env.NEXT_PUBLIC_SANITY_DATASET || "";
export const apiVersion: string =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
