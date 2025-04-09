import RegisterForm from "../../components/RegisterForm";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/components/_auth.scss";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) {
      return setError("Please fill in all fields.");
    }

    // Mock registration logic
    setError("");
    navigate("/login"); // go to login after registration
  };

  return (
    <div className="auth">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        {error && <p className="auth-error">{error}</p>}
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />
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
        <button type="submit">Register</button>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
