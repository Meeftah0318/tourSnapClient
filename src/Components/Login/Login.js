import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";

const Login = () => {
  const {
    signInUsingGoogle,
    handelRegistration,
    handelEmailChange,
    handelPassChange,
    passWordError,
  } = useFirebase();
  return (
    <div>
      <div className="my-5">
        <div className="w-75 mx-auto row">
          <div className="col-md-5 ">
            <div className=" p-5">
              <h2 className="text-success pb-3">Welcome</h2>
            </div>
          </div>

          {/* register form */}
          <div className="col-md-7 bg-light p-5">
            <h2 className="text-success">Login</h2>
            <form onSubmit={handelRegistration}>
              <div className="mb-2">
                <label htmlFor="formGroupExampleInput2" className="form-label">
                  Email
                </label>
                <input
                  onBlur={handelEmailChange}
                  type="email"
                  className="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-2">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Password
                </label>
                <input
                  onBlur={handelPassChange}
                  type="password"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Type your password"
                  required
                />
              </div>
              <div>
                {" "}
                <p>{passWordError}</p>
              </div>

              <button type="submit" className="my-2 btn px-4 btn-success me-4 ">
                Submit
              </button>
              <button
                onClick={signInUsingGoogle}
                type="submit"
                className="my-2 btn px-4 btn-primary"
              >
                Google Sign In
              </button>
              <br />
              <label className="form-check-label" htmlFor="exampleCheck1">
                New here? <br />
                <button
                  type="submit"
                  className="my-2 btn px-4 btn-outline-success"
                >
                  <Link
                    className="text-decoration-none text-dark"
                    to="/register"
                  >
                    Please register
                  </Link>
                </button>
              </label>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
