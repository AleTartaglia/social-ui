import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";

export const Info = ({ setCommentOpen, commentOpen }) => {
  //TEMPORARY
  const liked = true;
  return (
    <div className="info">
      <div className="item">
        {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
        12 Likes
      </div>
      <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
        <TextsmsOutlinedIcon />
        12 Comments
      </div>
      <div className="item">
        <ShareOutlinedIcon />
        Share
      </div>
    </div>
  );
};
