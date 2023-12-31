import classes from "./posts-grid.module.css";
import PostItem from "./posts-item";

function PostsGrid(props) {

  const { posts } = props;

  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem post={post} key={post._id}/>
      ))}
    </ul>
  );
}

export default PostsGrid;
