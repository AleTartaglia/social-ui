import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";

export const User = ({ post }) => {
  return (
    <div className="user">
      <div className="userInfo">
        <img src={post.profilePic} alt="" />
        <div className="details">
          <Link
            to={`/profile/${post.userId}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <span className="name">{post.name}</span>
          </Link>
          <span className="date"> 1 min ago</span>
        </div>
      </div>
      <MoreHorizIcon />
    </div>
  );
};
