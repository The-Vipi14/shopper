import { Link } from "react-router-dom";

import "./CSS/loginSignup.css";
const LoginSignup = () => {
  return (
    <div className="login-signup">
      <div className="login-signup-overlay">
          <div className="login-signup-container">
            <h1>Sign up</h1>
            <div className="login-signup-fields">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Email Address" />
              <input type="password" placeholder="Password" />
            </div>
            <button>Continue</button>
            <p className="login-signup-login">
              Already have an acount?
              <Link to={'/login'}>Login here</Link>
            </p>
            <div className="login-signup-agree">
              <input type="checkbox" name="" id="" />
              <p>By continuing, I agree to the terms of use & privacy policy</p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default LoginSignup;
