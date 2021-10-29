import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="bg-dark text-secondary py-5">
      <div>
        <div className="w-75 mx-auto row footer-link">
          <div className="col-md-4">
            <h5>Actions</h5>
            <Link to="">About us</Link>
            <br />
            <Link to="">Insurance policy</Link>
            <br />
            <Link to="">Pay Your Bills Online</Link>
            <br />
            <Link to="">Leave a Review</Link>
          </div>
          <div className="col-md-4">
            <h5>New and Career</h5>
            <Link to="">Work with us</Link>
            <br />
            <Link to="">Latest News From Healthcare Services</Link>
            <br />
            <Link to="">For Employees</Link>
            <br />
            <Link to="">Our Branches</Link>
            <br />
            <Link to="">Essential Contact Numbers</Link>
          </div>
          <div className="col-md-4">
            <h5>Information</h5>
            <Link to="">Site Map</Link>
            <br />
            <Link to="">Privacy Policy</Link>
            <br />
            <Link to="">Terms and Conditions</Link>
            <Link to=""></Link>
            <br />

            <div className="mt-3">
              <h5>Follow Us</h5>
              <div className="d-flex justify-content-between fs-4 mt-3 me-2 social-icon">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-google-plus-g"></i>
                <i class="fab fa-youtube"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-linkedin-in"></i>
              </div>
            </div>
          </div>
          <hr className="mt-4" />
          <div className="text-center">
            <small>
              00940 The Avenue 35A, Gothenburg, Krakosia | +46767512345 | © 2021
              AlphaCare. All Rights Reserved.
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
