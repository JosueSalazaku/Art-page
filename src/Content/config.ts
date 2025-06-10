import { defineCollection, z } from 'astro:content';

const textCollection = defineCollection({
  schema: z.object({
    bio: z.string().optional()
  }),
});

const artworksCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string().url().optional(),
    date: z.number().optional()
    
  }),
});

export const collections = {
  text: textCollection,
  artworks: artworksCollection,
};
