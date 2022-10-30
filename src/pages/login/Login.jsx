import { useContext } from "react";
import { AuthContext } from "../../context";
import { Left, Right } from "./components";

import "./login.scss";
export const Login = () => {
  const { login } = useContext(AuthContext);

  return (
    <div className="login">
      <div className="card">
        <Left />
        <Right login={login} />
      </div>
    </div>
  );
};
