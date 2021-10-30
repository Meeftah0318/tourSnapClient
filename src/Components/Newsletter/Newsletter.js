import React from "react";

const Newsletter = () => {
  return (
    <div>
      <div className="bg-light py-5">
        <div className="w-75 mx-auto">
          <h1 className="text-secondary text-center">
            Subscribe to our Newsletter
          </h1>

          <div class="input-group mb-3 py-5 w-75 mx-auto">
            <input
              type="text"
              class="form-control"
              placeholder="Your Email"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button class="btn btn-primary" type="button" id="button-addon2">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
