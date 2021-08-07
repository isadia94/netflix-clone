import React, { useRef } from "react";
import { auth } from "../firebase.js";
import "./SignUpScreen.css";

const SignUpScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {})
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {})
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="signUpScreen">
      <form>
        <h1 style={{ marginBottom: "30px", textAlign: "left" }}>Sign In</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="Password" type="Password" />
        <button onClick={signIn}>Sign In</button>
        <h4
          style={{
            textAlign: "left",
            marginTop: "40px",
            fontWeight: "300",
            color: "grey",
          }}
        >
          New to Netflix?{" "}
          <span
            style={{ color: "white", fontWeight: "bold", cursor: "pointer" }}
            onClick={register}
          >
            Sign up now
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignUpScreen;
