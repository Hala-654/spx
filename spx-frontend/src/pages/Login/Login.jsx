import LoginForm from "../../components/LoginForm";
import "../../styles/components/_auth.scss";

const Login = () => {
  return (
    <div className="auth-page">
      <div className="auth-box">
        <h2>Login</h2>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
