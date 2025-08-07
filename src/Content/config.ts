import { defineCollection, z } from "astro:content";

const bioCollection = defineCollection({
  type: "content",
  schema: z.object({
    bioTitle: z.string(),
    bioText: z.string(),
    artTitle: z.string(),
    artText: z.string(),
  }),
});



export const collections = {
  bio: bioCollection,
};
