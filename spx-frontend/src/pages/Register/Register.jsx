import RegisterForm from "../../components/RegisterForm";
import "../../styles/components/_auth.scss";

const Register = () => {
  return (
    <div className="auth-page">
      <div className="auth-box">
        <h2>Create Account</h2>
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
