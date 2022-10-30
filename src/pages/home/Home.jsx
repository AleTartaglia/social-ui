import { Posts, Share, Stories } from "../../components";
import "./home.scss";

export const Home = () => {
  return (
    <div className="home">
      <Stories />
      <Share />
      <Posts />
    </div>
  );
};
