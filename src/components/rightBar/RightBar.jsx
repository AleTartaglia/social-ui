import { UserInfo } from "./components/UserInfo";
import "./rightBar.scss";

export const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <UserInfo cta />
          <UserInfo cta />
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <UserInfo text={"changed their cover picture"} time={"1 min ago"} />
          <UserInfo text={"changed their cover picture"} time={"1 min ago"} />
          <UserInfo text={"changed their cover picture"} time={"1 min ago"} />
          <UserInfo text={"changed their cover picture"} time={"1 min ago"} />
        </div>
        <div className="item">
          <span>Online Friends</span>
          <UserInfo online />
          <UserInfo online />
          <UserInfo online />
          <UserInfo online />
        </div>
      </div>
    </div>
  );
};
