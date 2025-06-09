import { defineCollection, z } from 'astro:content';

const textCollection = defineCollection({
  schema: z.object({
    bio: z.string(), // Frontmatter field you're using
  }),
});

const artworksCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string().url().optional(),
    
  }),
});

export const collections = {
  text: textCollection,
  artworks: artworksCollection,
};
