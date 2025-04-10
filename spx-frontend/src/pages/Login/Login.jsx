import LoginForm from "../../components/LoginForm";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/components/_auth.scss";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      return setError("Please fill in all fields.");
    }

    // Mock login logic
    if (form.email === "user@example.com" && form.password === "123456") {
      setError("");
      navigate("/"); // redirect to home after login
    } else {
      setError("Invalid credentials.");
    }
  };

  return (
    <div className="auth">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        {error && <p className="auth-error">{error}</p>}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
        <p>
          Don’t have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
