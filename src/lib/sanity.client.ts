import { createClient } from "next-sanity";

// export const projectId: string = "qosix616";
// export const dataset: string = "production";
// export const apiVersion: string = "2021-10-21";

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
