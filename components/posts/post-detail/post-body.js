import React from "react";
import classes from "./post-body.module.css";

function PostBody({
  author,
  category,
  date,
  description,
  excerpt,
  isFeatured,
}) {
  return (
    <div className={classes.body}>
      <p>
        <strong>Author:</strong> {author}
      </p>
      <p>
        <strong>Category:</strong> {category}
      </p>
      <p>
        <strong>Date:</strong> {new Date(date).toLocaleDateString("en-US")}
      </p>
      <p>
        <strong>Description:</strong> {description}
      </p>
      <p>
        <strong>Excerpt:</strong> {excerpt}
      </p>
      <p>
        <strong>Featured:</strong> {isFeatured ? "Yes" : "No"}
      </p>
    </div>
  );
}

export default PostBody;
