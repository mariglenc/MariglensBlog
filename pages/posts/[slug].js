import Head from "next/head";
import { Fragment } from "react";

import PostContent from "../../components/posts/post-detail/post-content";
import { fetchAllPostsId, fetchPostById } from "../../lib/posts-util";

function PostDetailPage(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = await fetchPostById(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export async function getStaticPaths() {
  const slugs = await fetchAllPostsId();
  console.log("slugs", slugs);
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: "blocking",
  };
}

export default PostDetailPage;
