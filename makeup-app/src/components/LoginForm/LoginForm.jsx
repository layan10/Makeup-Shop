import { useState } from "react";
import PropTypes from "prop-types";
import "./LoginForm.css";

const LoginForm = ({ logo, handleLogin, handleSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isSignupMode, setIsSignupMode] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignupMode) {
      handleSignup({ email, password, username });
    } else {
      handleLogin({ email, password });
    }
  };

  const toggleMode = (e) => {
    e.preventDefault();
    setIsSignupMode(!isSignupMode);
    setEmail("");
    setPassword("");
    setUsername("");
  };

  return (
    <div className="form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
          <h2>{isSignupMode ? "Sign Up" : "Login"}</h2>
        </div>

        {isSignupMode && (
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
        )}

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="submit-button">
          {isSignupMode ? "Sign Up" : "Login"}
        </button>

        <p className="toggle-text">
          {isSignupMode ? "Already have an account?" : "Don't have an account?"}{" "}
          <button onClick={toggleMode} className="toggle-button">
            {isSignupMode ? "Login" : "Sign Up"}
          </button>
        </p>
      </form>
    </div>
  );
};
LoginForm.propTypes = {
  logo: PropTypes.string.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleSignup: PropTypes.func.isRequired,
};
export default LoginForm;