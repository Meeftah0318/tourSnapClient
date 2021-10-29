import React from "react";

const NotFound = () => {
  return (
    <div className="py-5">
      <div className="w-75 mx-auto ">
        <div className="bg-dark rounded py-5 text-white text-center">
          <h1>Error</h1>
          <p style={{ fontSize: "200px" }} className="text-danger">
            404
          </p>
          <h2>
            The page does not exist <br /> please navigate from the top menu.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
