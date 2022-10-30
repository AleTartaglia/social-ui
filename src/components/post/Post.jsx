import { useState } from "react";

import { Comments } from "../comments/Comments";
import { Info, User } from "./components";
import "./post.scss";

export const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);

  return (
    <div className="post">
      <div className="container">
        <User post={post} />
        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt="" />
        </div>
        <Info commentOpen={commentOpen} setCommentOpen={setCommentOpen} />
        {commentOpen && <Comments />}
      </div>
    </div>
  );
};
