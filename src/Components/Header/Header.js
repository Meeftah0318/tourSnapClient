import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";

const Header = () => {
  const { user, logOut } = useFirebase();
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
                  <i className="fas fa-umbrella-beach"></i>
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
                      Packages
                    </Link>
                    <Link className="ms-5" to="addPackage">
                      Add Package
                    </Link>
                    <Link className="ms-5" to="manageDB">
                      Manage DB
                    </Link>
                  </ul>
                </div>
              </div>
              <div className="d-flex justify-content-end mt-2">
                {!user.email ? (
                  <button className="btn btn-primary rounded-pill px-4">
                    {" "}
                    <Link
                      className="text-decoration-none text-white "
                      to="login"
                    >
                      Sign In
                    </Link>{" "}
                  </button>
                ) : (
                  <button
                    onClick={logOut}
                    className="btn btn-outline-danger rounded-pill px-4"
                  >
                    Logout
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
