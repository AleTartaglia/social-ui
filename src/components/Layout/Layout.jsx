import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { DarkModeContext } from "../../context";
import { LeftBar, Navbar, RightBar } from "../index";
import "../../style.scss";

export const Layout = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={`theme-${darkMode ? "dark" : "light"}`}>
      <Navbar />
      <div style={{ display: "flex" }}>
        <LeftBar />
        <div style={{ flex: 6 }}>
          <Outlet />
        </div>
        <RightBar />
      </div>
    </div>
  );
};
