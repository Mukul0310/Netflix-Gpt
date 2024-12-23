import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [IsSingInform, setIsSingInform] = useState(true);
  const toogleSingInform = () => {
    setIsSingInform(!IsSingInform);
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

      <form className="absolute bg bg-black text-white w-3/12 p-12 my-36 mx-auto right-0 left-0 bg-opacity-90 rounded-md">
        <h1 className="font-bold text-3xl py-4">
          {IsSingInform ? "Sing In" : "Sing Up"}
        </h1>
        {!IsSingInform && (
          <input
            type="text"
            placeholder="Full Name"
            className="my-2 p-2 rounded-md text-black w-full opacity-80"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="my-2 p-2 rounded-md text-black w-full opacity-80"
        />
        <input
          type="password"
          placeholder="Password"
          className="my-2 p-2 rounded-md text-black w-full opacity-80"
        />
        <button className="my-4 p-2 rounded-md bg-red-600 w-full">
          {IsSingInform ? "Sing In" : "Sing Up"}
        </button>
        <p className="my-4" onClick={toogleSingInform}>
          {IsSingInform
            ? "New to Netflix? SingUp Now"
            : "Already a Member? Sing In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
