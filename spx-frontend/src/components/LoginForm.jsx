const LoginForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <h2>Login</h2>
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
