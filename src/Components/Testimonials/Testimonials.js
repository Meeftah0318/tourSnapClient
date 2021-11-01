import React from "react";

const Testimonials = () => {
  return (
    <div className="bg-dark text-white">
      <div className="pb-3 mt-5 w-75 mx-auto ">
        <div className="text-center pb-3 text-white pt-4">
          <h1>Customer Review</h1>
        </div>
        <br />

        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner w-75 mx-auto pb-5">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-md-4">
                  <img
                    src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                    className="d-block w-100 rounded"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <p className="fs-5">
                    <em>
                      &ldquo; Our favorite thing we did while in Paris. We
                      highly recommend this to everyone. You must do the all day
                      tour of Versailles and marvel at the beauty. &rdquo;
                    </em>
                  </p>

                  <h6 className="text-end pe-4">
                    <em>--John</em>
                  </h6>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-md-4">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                    className="d-block w-100 rounded"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <p className="fs-5">
                    <em>
                      &ldquo; Our tour guide Oliver, was absolutely wonderful
                      and a wealth of knowledge about New York. We did the full
                      day around the best places.&rdquo;
                    </em>
                  </p>

                  <h6 className="text-end pe-4">
                    <em>--Natalie</em>
                  </h6>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-md-4">
                  <img
                    src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                    className="d-block w-100 rounded"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <p className="fs-5">
                    <em>
                      &ldquo; The tallest buildings, biggest museums, and best
                      pizza—NYC is a city of superlatives, and it lives up to
                      every one of them. Those were the best days of my life.
                      &rdquo;
                    </em>
                  </p>
                  <h6 className="text-end pe-4">
                    <em>--Johanna</em>
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
