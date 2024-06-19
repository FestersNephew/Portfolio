import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
  projectId: 'se0q8nq0', 
  dataset: 'blog', 
  apiVersion: '2023-01-01',
  useCdn: true, 
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;
