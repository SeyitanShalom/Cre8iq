import { createClient } from "next-sanity";
import { apiVersion, dataset, studioProjectId } from "@/sanity/env";

export const client = createClient({
  projectId: studioProjectId,
  dataset,
  apiVersion,
  useCdn: true,
});
