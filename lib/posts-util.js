// fetch isFetaured posts
export async function fetchFeaturedPosts() {
  try {
    const postsResponse = await fetch("http://localhost:3000/api/all-posts");
    const imagesResponse = await fetch(
      "http://localhost:3000/api/google-drive"
    );

    const postsData = await postsResponse.json();
    const imagesData = await imagesResponse.json();

    const posts = postsData.posts;
    const images = imagesData.files;

    const featuredPosts = posts.filter((post) => post.isFeatured);

    const featuredPostsWithImages = featuredPosts.map((post) => {
      const image = images.find((img) => img.name === post.image);

      const imagePath = image
        ? `https://drive.google.com/uc?id=${image.id}`
        : "https://drive.google.com/uc?id=1DhVjLMUGn2dDpsG9Ndi2aq9QBlJ9KD0o"; // this second one is image not found ...

      return { ...post, imagePath };
    });

    return featuredPostsWithImages;
  } catch (error) {
    console.error("Error fetching featured posts:", error);
    return [];
  }
}

// fetch all posts
export async function fetchPostsAndImages() {
  try {
    const postsResponse = await fetch("http://localhost:3000/api/all-posts");
    const imagesResponse = await fetch(
      "http://localhost:3000/api/google-drive"
    );

    const postsData = await postsResponse.json();
    const imagesData = await imagesResponse.json();

    const posts = postsData.posts;
    const images = imagesData.files;

    const postsWithImages = posts.map((post) => {
      const image = images.find((img) => img.name === post.image);

      const imagePath = image
        ? `https://drive.google.com/uc?id=${image.id}`
        : "https://drive.google.com/uc?id=1DhVjLMUGn2dDpsG9Ndi2aq9QBlJ9KD0o"; // this second one is image not found ...

      return { ...post, imagePath };
    });

    return postsWithImages;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

// fetch a single post by ID
export async function fetchPostById(postId) {
  try {
    const postResponse = await fetch(`http://localhost:3000/api/one-post?id=${postId}`);
    const imageResponse = await fetch("http://localhost:3000/api/google-drive");

    const postData = await postResponse.json();
    const imagesData = await imageResponse.json();

    const post = postData.post;
    const images = imagesData.files;

    const image = images.find((img) => img.name === post.image);

    const imagePath = image
      ? `https://drive.google.com/uc?id=${image.id}`
      : "https://drive.google.com/uc?id=1DhVjLMUGn2dDpsG9Ndi2aq9QBlJ9KD0o"; // this second one is image not found ...

    const postWithImage = { ...post, imagePath };

    return postWithImage;
  } catch (error) {
    console.error(`Error fetching post with ID ${postId}:`, error);
    return null;
  }
}

// fetch all posts ids
export async function fetchAllPostsId() {
  try {
    const postsResponse = await fetch("http://localhost:3000/api/all-posts");
    const postsData = await postsResponse.json();
    const posts = postsData.posts;
    
    // Extracting post IDs
    const postIds = posts.map((post) => post._id);

    return postIds;
  } catch (error) {
    console.error("Error fetching post IDs:", error);
    return [];
  }
}
