import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";

const Register = () => {
  const { signInUsingGoogle } = useFirebase();
  return (
    <div className="pt-5 row">
      <div className="col-md-8">
        <div style={{ height: "70vh" }} className=" w-75 mt-5 mx-auto">
          <h2>Register</h2>
          <div>
            <div className="mb-2">
              <label htmlFor="formGroupExampleInput2" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Type your password"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Repeat Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Re-type your password"
              />
            </div>
            <button type="submit" className="btn px-4 btn-success me-4">
              Submit
            </button>
            <button
              onClick={signInUsingGoogle}
              type="submit"
              className="btn px-4 btn-primary"
            >
              Sign In with Google
            </button>
          </div>
          <p>
            Already have an account? <Link to="/login">Login</Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
