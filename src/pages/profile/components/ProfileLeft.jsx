import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";

export const ProfileLeft = () => {
  return (
    <div className="left">
      <a href="http://facebook.com">
        <FacebookTwoToneIcon fontSize="large" />
      </a>
      <a href="http://facebook.com">
        <InstagramIcon fontSize="large" />
      </a>
      <a href="http://facebook.com">
        <TwitterIcon fontSize="large" />
      </a>
      <a href="http://facebook.com">
        <LinkedInIcon fontSize="large" />
      </a>
      <a href="http://facebook.com">
        <PinterestIcon fontSize="large" />
      </a>
    </div>
  );
};
