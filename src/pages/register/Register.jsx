import "./register.scss";
import { RegisterLeft, RegisterRight } from "./components";
export const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <RegisterLeft />
        <RegisterRight />
      </div>
    </div>
  );
};
