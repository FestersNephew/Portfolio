import client from './client';

export const fetchPost = async (slug) => {
  const query = `*[_type == "post" && slug.current == $slug][0]{
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
    publishedAt,
    additionalImages[]{
      asset->{
        _id,
        url
      }
    }
  }`;

  const params = { slug };
  const post = await client.fetch(query, params);
  return post;
};

export const fetchRecentPosts = async (excludeSlug) => {
  const query = `*[_type == "post" && slug.current != $excludeSlug] | order(publishedAt desc)[0...5]{
    title,
    slug,
    mainImage{
      asset->{
        _id,
        url
      }
    },
    publishedAt
  }`;

  const params = { excludeSlug };
  const recentPosts = await client.fetch(query, params);
  return recentPosts;
};
