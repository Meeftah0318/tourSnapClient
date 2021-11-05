import React, { useEffect, useState } from "react";
import Package from "../Package/Package";

const Packages = () => {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    fetch("https://afternoon-spire-52223.herokuapp.com/packages")
      .then(res => res.json())
      .then(data => setPackages(data));
  }, []);

  const [cart, setCart] = useState([]);

  const handlebooking = item => {
    setCart([...cart, item]);
  };

  return (
    <div>
      <div>
        <h1 className="text-center mt-3 pt-4 text-secondary">
          Most Popular Destinations
        </h1>
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 w-75 mx-auto pb-5 my-3">
        {packages.map(pkg => (
          <Package
            key={pkg._id}
            pkg={pkg}
            handleBooking={handlebooking}
          ></Package>
        ))}
      </div>
    </div>
  );
};

export default Packages;

// .splice(0, 3)
