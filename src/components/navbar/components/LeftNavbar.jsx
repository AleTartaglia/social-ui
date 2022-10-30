import { useContext } from "react";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../../context";

export const LeftNavbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  return (
    <div className="left">
      <Link to="/" style={{ textDecoration: "none" }}>
        <span>Alesocial</span>
      </Link>
      <HomeOutlinedIcon />
      {darkMode ? (
        <WbSunnyOutlinedIcon onClick={toggle} />
      ) : (
        <DarkModeOutlinedIcon onClick={toggle} />
      )}
      <GridViewOutlinedIcon />
      <div className="search">
        <input type="text" placeholder="Search..." />
        <SearchOutlinedIcon />
      </div>
    </div>
  );
};
