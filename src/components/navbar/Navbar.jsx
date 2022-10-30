import { LeftNavbar, RightNavbar } from "./components";
import "./navbar.scss";

export const Navbar = () => {
  return (
    <div className="navbar">
      <LeftNavbar />
      <RightNavbar />
    </div>
  );
};
