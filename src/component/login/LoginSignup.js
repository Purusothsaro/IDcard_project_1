import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const LoginSignup = () => {
  const [isLoginActive, setIsLoginActive] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    setIsLoginActive(true);
  };

  const handleSignupClick = () => {
    setIsLoginActive(false);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    // After successful login:
    navigate("/dashboard");
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here
    // After successful signup:
    navigate("/dashboard");
  };

  return (
    <section className={`wrapper ${isLoginActive ? "active" : ""}`}>
      <div className="form signup">
        <header onClick={handleSignupClick}>Signup</header>
        <form onSubmit={handleSignupSubmit}>
          <input type="text" placeholder="Full name" required />
          <input type="text" placeholder="Email address" required />
          <input type="password" placeholder="Password" required />
          <div className="checkbox">
            <input type="checkbox" id="signupCheck" required />
            <label htmlFor="signupCheck">I accept all terms & conditions</label>
          </div>
          <input type="submit" value="Signup" />
        </form>
      </div>

      <div className="form login">
        <header onClick={handleLoginClick}>Login</header>
        <form onSubmit={handleLoginSubmit}>
          <input type="text" placeholder="Email address" required />
          <input type="password" placeholder="Password" required />
          <a href="#">Forgot password?</a>
          <input type="submit" value="Login" />
        </form>
      </div>
    </section>
  );
};

export default LoginSignup;
