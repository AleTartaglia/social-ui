import { Posts } from "../../components";
import { ProfileCenter, ProfileLeft, ProfileRight } from "./components";
import "./profile.scss";

export const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="cover"
        />
        <img
          src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <ProfileLeft />
          <ProfileCenter />
          <ProfileRight />
        </div>
        <Posts />
      </div>
    </div>
  );
};
