import React from "react";
import useFirebase from "../../Hooks/useFirebase";

const Login = () => {
  const { signInWithGoogle } = useFirebase();
  return (
    <div>
      <div className="w-75 mx-auto my-5 container-div">
        <div className="text-center text-secondary">
          <h1 className="py-2">Welcome</h1>
          <h2 className="py-2 mb-4">Please Login With Your Google Account</h2>
          <hr />
          <button
            onClick={signInWithGoogle}
            className="btn btn-primary rounded-pill fs-5 py-3 px-5 mt-4"
          >
            Please Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
