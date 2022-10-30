import { Link } from "react-router-dom";

export const Left = () => {
  return (
    <div className="left">
      <h1>Hello World.</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
        facere ab, earum quae eligendi possimus! doloremque in expedita adipisci
        pariatur iste!
      </p>
      <span>Don't you have an account?</span>
      <Link to="/register">
        <button>Register</button>
      </Link>
    </div>
  );
};
