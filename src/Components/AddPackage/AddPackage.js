import React, { useRef } from "react";

const AddPackage = () => {
  const nameRef = useRef();
  const destinationRef = useRef();
  const budgetRef = useRef();
  const imgRef = useRef();

  const handleAddService = e => {
    const city = nameRef.current.value;
    const country = destinationRef.current.value;
    const image = imgRef.current.value;
    const budget = budgetRef.current.value;

    // new service
    const newService = { city, country, image, budget };

    // fetch data
    fetch("http://localhost:5000/addPackage", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newService),
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          alert("New Package Added Successfully");
          e.target.reset();
        }
      });

    e.preventDefault();
  };

  return (
    <div>
      <div className="w-50  mx-auto py-5">
        <h2 className="text-center pb-5 text-secondary">
          Add details of your tour
        </h2>
        <form onSubmit={handleAddService}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Your destination
            </label>
            <input
              type="text"
              ref={nameRef}
              className="form-control  border-success"
              placeholder="City Name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Country
            </label>
            <input
              type="text"
              ref={destinationRef}
              placeholder="Destination Country"
              className="form-control border-success"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Image URL
            </label>
            <input
              type="text"
              ref={imgRef}
              placeholder="Destination Image URL"
              className="form-control border-success"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Total Budget
            </label>
            <input
              type="number"
              ref={budgetRef}
              placeholder="Your Budget"
              className="form-control border-success"
              required
            />
          </div>
          <div className="col-auto">
            <button
              type="submit"
              className="btn btn-success mb-5 mt-3 px-4 rounded-pill "
            >
              Add Destination
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPackage;
