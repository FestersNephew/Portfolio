export const filterPosts = (posts, query) => {
    if (!query) {
      return posts;
    }
    const lowerCaseQuery = query.toLowerCase();
    return posts.filter((post) => {
      const titleMatch = post.title && post.title.toLowerCase().includes(lowerCaseQuery);
      const authorMatch = post.authorName && post.authorName.toLowerCase().includes(lowerCaseQuery);
      const bodyMatch = post.body && Array.isArray(post.body) && post.body.some((block) => 
        block.children && Array.isArray(block.children) && block.children.some((child) => 
          child.text && child.text.toLowerCase().includes(lowerCaseQuery)
        )
      );
      return titleMatch || authorMatch || bodyMatch;
    });
  };
  