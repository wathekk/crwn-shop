import React from "react";
import "./login-signup.styles.scss";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const LoginSignup = () => (
  <div className="login-signup">
    <SignIn />
    <SignUp />
  </div>
);

export default LoginSignup;
