import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";

export const ProfileCenter = () => {
  return (
    <div className="center">
      <span>Jane Doe</span>
      <div className="info">
        <div className="item">
          <PlaceIcon />
          <span>USA</span>
        </div>
        <div className="item">
          <LanguageIcon />
          <span>Ale.dev</span>
        </div>
      </div>
      <button>follow</button>
    </div>
  );
};
