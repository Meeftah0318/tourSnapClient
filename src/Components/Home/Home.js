import React from "react";
import { Link } from "react-router-dom";
import Newsletter from "../Newsletter/Newsletter";
import Packages from "../Packages/Packages";
import Testimonials from "../Testimonials/Testimonials";
import "./Home.css";

const Home = () => {
  return (
    <div>
      {/* banner  */}
      <div className="banner-container">
        <div className="banner pt-5">
          <div className="w-75 mx-auto pt-5 text-center">
            <div className="pt-5">
              {/* banner text */}
              <h1 className="fs-1">
                Let,s Take a{" "}
                <span className="px-3 bg-primary rounded">BREAK</span> From Busy
                Life
                <br />
                Let's Go Somewhere <br />
                Calm & Quiet.
              </h1>
              <p className="text-center mt-4">
                Just Book Your destination, We Take Care of The Rest
              </p>{" "}
              <Link to="packages">
                <button className="btn btn-primary rounded-pill px-5 mt-4">
                  Book Now
                </button>
              </Link>
            </div>
          </div>

          {/* <div className="w-75 mx-auto"> */}
          {/* banner cards */}
          {/* <div className=" mt-5 row">
              <div className="col-md-6 d-flex my-3 p-3 banner-card">
                <div className="my-auto fs-1 me-4">
                  <i class="far fa-clock"></i>
                </div>
                <div>
                  <h5>24hrs Available Doctors</h5>
                  <p>Dont worry about the time, we are always available</p>
                </div>
              </div>
              <div
                className="col-md-6 
              d-flex my-3 p-3 banner-card"
              >
                <div className="my-auto fs-1 me-4">
                  <i class="fas fa-mobile-alt"></i>
                </div>
                <div>
                  <h5>24/7 Available Customer Service</h5>
                  <p>
                    We are always there for you, call us whenever you need help.
                  </p>
                </div>
              </div>
            </div> */}
          {/* </div> */}
        </div>
      </div>
      {/* banner stop  */}
      <Packages></Packages>
      {/* testimonials */}
      <Testimonials></Testimonials>
      {/* newsletter */}
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
