import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { useContext } from "react";
import { AuthContext } from "../../../context";

export const RightNavbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="right">
      <PersonOutlinedIcon />
      <EmailOutlinedIcon />
      <NotificationsOutlinedIcon />
      <div className="user">
        <img src={currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
      </div>
    </div>
  );
};
