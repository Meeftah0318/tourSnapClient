import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";

const Header = () => {
  const { user, logOut, signInWithGoogle } = useFirebase();
  return (
    <div>
      <div className="primary-text">
        {/* navigation bar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-2">
          <div className="container-fluid w-75 d-flex justify-content-between">
            <div>
              {/* link the brand name with home tab */}
              <Link
                className="navbar-brand fs-1 brand-name text-secondary"
                to="home"
              >
                <span className="me-2">
                  <i class="fas fa-umbrella-beach"></i>
                </span>
                TourSnap
              </Link>
            </div>
            <div>
              <div>
                <button
                  className="navbar-toggler ms-5"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarNavDropdown"
                >
                  {/* link to routes */}
                  <ul className="navbar-nav link-item">
                    <Link className="ms-5" to="/home">
                      Home
                    </Link>
                    <Link className="ms-5" to="packages">
                      Destinations
                    </Link>
                    <Link className="ms-5" to="about">
                      About Us
                    </Link>
                    <Link className="ms-5" to="contact">
                      Contact Us
                    </Link>
                  </ul>
                </div>
              </div>
              <div className="d-flex justify-content-end mt-2">
                {!user.email ? (
                  <button
                    onClick={signInWithGoogle}
                    className="btn btn-primary"
                  >
                    {" "}
                    <Link
                      className="text-decoration-none text-white "
                      to="login"
                    >
                      Google Sign In
                    </Link>{" "}
                  </button>
                ) : (
                  <button onClick={logOut} className="btn btn-danger">
                    Logout {user.displayName}
                    {/* {" "}
                    <Link
                      className="text-decoration-none text-white "
                      to="login"
                    >
                    </Link>{" "} */}
                  </button>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
