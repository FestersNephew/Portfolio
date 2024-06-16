import { client } from './client';

export const fetchPosts = async () => {
  const query = `*[_type == "post"]{
    title,
    slug,
    mainImage{
      asset->{
        _id,
        url
      }
    },
    body,
    "authorName": author->name,
    "categories": categories[]->title,
    publishedAt
  }`;

  const posts = await client.fetch(query);
  return posts;
};
