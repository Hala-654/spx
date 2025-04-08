const RegisterForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <h2>Register</h2>
      <input type="text" name="name" placeholder="Name" required />
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
