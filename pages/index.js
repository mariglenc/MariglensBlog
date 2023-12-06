import { Fragment } from "react";
import Hero from "@/components/home-page/hero";
import FeaturedPosts from "@/components/home-page/featured-posts";
import { fetchFeaturedPosts } from "@/lib/posts-util";

export default function Home(props) {
  console.log("process.env.NODE_ENV", process.env.NODE_ENV);
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const featuredPosts = await fetchFeaturedPosts();

  return { props: { posts: featuredPosts } };
}
