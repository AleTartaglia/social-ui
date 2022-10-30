export const Right = ({ login }) => {
  const handleLogin = () => {
    login();
  };

  return (
    <div className="right">
      <h1>Login</h1>
      <form action="">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="password" />
        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};
