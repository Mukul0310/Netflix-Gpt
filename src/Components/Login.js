import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidate } from "../Utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Utils/firebase";

const Login = () => {
  const [IsSingInform, setIsSingInform] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const toogleSingInform = () => {
    setIsSingInform(!IsSingInform);
  };
  const handleButtonClicked = () => {
    const fullNameValue = fullName.current ? fullName.current.value : "";
    const message = checkValidate(
      email.current.value,
      password.current.value,
      fullNameValue
    );
    seterrorMessage(message);
    if (message) return;

    if (!IsSingInform) {
      //sing Up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + " " + errorMessage);
        });
    }
    // console.log(email.current.value);
    // console.log(password.current.value);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/150c4b42-11f6-4576-a00f-c631308b1e43/web/IN-en-20241216-TRIFECTA-perspective_915a9055-68ad-4e81-b19a-442f1cd134dc_medium.jpg"
          alt="netflix-banner"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg bg-black text-white w-3/12 p-12 my-36 mx-auto right-0 left-0 bg-opacity-90 rounded-md"
      >
        <h1 className="font-bold text-3xl py-4">
          {IsSingInform ? "Sign In" : "Sign Up"}
        </h1>
        {!IsSingInform && (
          <input
            ref={fullName}
            type="text"
            placeholder="Full Name"
            className="my-2 p-2 rounded-md text-black w-full opacity-80"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="my-2 p-2 rounded-md text-black w-full opacity-80"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="my-2 p-2 rounded-md text-black w-full opacity-80"
        />
        <p className="text-red-600 font-bold">{errorMessage}</p>
        <button
          className="my-4 p-2 rounded-md bg-red-600 w-full"
          onClick={handleButtonClicked}
        >
          {IsSingInform ? "Sign In" : "Sign Up"}
        </button>

        <p className="my-4 cursor-pointer" onClick={toogleSingInform}>
          {IsSingInform
            ? "New to Netflix? SignUp Now"
            : "Already a Member? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
