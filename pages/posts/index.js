import AllPosts from "@/components/posts/all-posts";
import { fetchPostsAndImages } from "@/lib/posts-util";

function AllPostsPage(props) {
  
  // console.log("slugs", props.posts);

  return <AllPosts posts={props.posts} />;
}

export default AllPostsPage;

export async function getStaticProps() {
  const posts = await fetchPostsAndImages();

  return {
    props: {
      posts,
    },
  };
}
