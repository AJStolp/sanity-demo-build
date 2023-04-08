import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { defaultDocumentNode } from "./src/defaultDocumentNode";
import { dataset, projectId } from "@/lib/sanity.client";

export default defineConfig({
  name: "default",
  title: "demo-build",

  projectId,
  dataset,
  plugins: [
    deskTool({
      defaultDocumentNode,
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
