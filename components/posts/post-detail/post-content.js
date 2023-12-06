import PostBody from "./post-body";
import classes from "./post-content.module.css";
import PostHeader from "./post-header";

function PostContent(props) {
  const { title, imagePath, ...rest } = props.post;

  return (
    <article className={classes.content}>
      <PostHeader title={title} image={imagePath} />
      <PostBody {...rest} />
    </article>
  );
}

export default PostContent;
