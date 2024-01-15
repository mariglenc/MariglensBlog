import {useEffect, Fragment } from "react";
import Hero from "@/components/home-page/hero";
import FeaturedPosts from "@/components/home-page/featured-posts";
import { fetchFeaturedPosts } from "@/lib/posts-util";

export default function Home(props) {

  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const featuredPosts = await fetchFeaturedPosts();
  let ip;

  const { req } = context;

  if (req.headers['x-forwarded-for']) {
    console.log("req.headers['x-forwarded-for req.connection.remoteAddress")
    ip = req.headers['x-forwarded-for'].split(',')[0];
  } else if (req.headers['x-real-ip']) {
    console.log("req.headers['x-real-ip req.connection.remoteAddress")
    ip = req.connection.remoteAddress;
  } else {
    console.log("req.connection.remoteAddress")
    ip = req.connection.remoteAddress;
  }
  return { props: { posts: featuredPosts } };
}
