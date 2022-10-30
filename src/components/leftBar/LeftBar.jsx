import Courses from "../../assets/12.png";
import Events from "../../assets/6.png";
import Friends from "../../assets/1.png";
import Fund from "../../assets/13.png";
import Gallery from "../../assets/8.png";
import Gaming from "../../assets/7.png";
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
import Memories from "../../assets/5.png";
import Messages from "../../assets/10.png";
import Tutorials from "../../assets/11.png";
import Videos from "../../assets/9.png";
import Watch from "../../assets/4.png";
import { Item, Menu } from "./components";
import "./leftBar.scss";
import { useContext } from "react";
import { AuthContext } from "../../context";

export const LeftBar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="leftBar">
      <div className="container">
        <Menu>
          <div className="user">
            <img src={currentUser.profilePic} alt="" />
            <span>{currentUser.name}</span>
          </div>
          <Item src={Friends} text="Friends" />
          <Item src={Groups} text="Groups" />
          <Item src={Market} text="MarketPlace" />
          <Item src={Watch} text="Watch" />
          <Item src={Memories} text="Memories" />
        </Menu>
        <hr />
        <Menu>
          <span>Your shortcuts</span>
          <Item src={Events} text="Events" />
          <Item src={Gaming} text="Gaming" />
          <Item src={Gallery} text="Gallery" />
          <Item src={Videos} text="Videos" />
          <Item src={Messages} text="Messages" />
        </Menu>
        <hr />
        <Menu>
          <span>Others</span>
          <Item src={Fund} text="Fundraiser" />
          <Item src={Tutorials} text="Tutorials" />
          <Item src={Courses} text="Courses" />
        </Menu>
      </div>
    </div>
  );
};
