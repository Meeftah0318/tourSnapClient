import React from "react";
import { Link } from "react-router-dom";

const Package = props => {
  const { id, destination, price, country, image } = props.pkg;
  return (
    <div className="container service-container">
      <div className="card-group mx-2">
        <div className="card shadow bg-dark text-white border border-3 border-secondary">
          <img
            src={image}
            height="190px"
            // width="400px"
            className="card-img-topp-2 m-1 rounded"
            alt="..."
          />
          <div className="card-body">
            <h3 className="card-title text-center pb-2">{destination}</h3>
            <h6>Destination: {country}</h6>
            <p className="card-text">
              Enjoy the Beautiful Life of <br />
              {destination}
            </p>
            <h5 className="card-text">
              Budget : <span className="fst-italic"> ${price}</span>
            </h5>
          </div>
          <div className="card-footer">
            <div className="d-flex justify-content-center">
              <button className="btn my-1 px-5 btn-primary rounded-pill">
                <Link
                  className="text-decoration-none  text-white"
                  to={`/${id}`}
                >
                  Book Now
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Package;
