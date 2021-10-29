import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./services.json")
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);
  return (
    <div>
      <div>
        <h1 className="text-center mt-3 py-4 text-success">Our services</h1>
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 w-75 mx-auto pb-5 my-3">
        {services.map(service => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
