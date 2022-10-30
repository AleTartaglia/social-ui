import { Link } from "react-router-dom";

export const RegisterRight = () => {
  return (
    <div className="left">
      <h1>Ale Social.</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
        facere ab, earum quae eligendi possimus! doloremque in expedita adipisci
        pariatur iste!
      </p>
      <span>Do you have an account?</span>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
};
