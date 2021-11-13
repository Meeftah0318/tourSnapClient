import React, { useEffect, useState } from "react";
import "./ManageDB.css";

const ManageDB = () => {
  // set packages
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetch("https://afternoon-spire-52223.herokuapp.com/packages")
      .then(res => res.json())
      .then(data => setPackages(data));
  }, []);

  // delete package

  const handelDeletePackage = id => {
    const proceed = window.confirm("Are your sure?");
    if (proceed) {
      const url = `https://afternoon-spire-52223.herokuapp.com/packages/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            alert("Successfully Deleted");
            const remainingPkg = packages.filter(pkg => pkg._id !== id);
            setPackages(remainingPkg);
          }
        });
    }
  };
  return (
    <div className="table-div">
      <div className="w-75 mx-auto pb-5">
        <h1 className="text-secondary pt-5 text-center">DataBase Management</h1>
        <h3 className="py-3 text-secondary text-center">
          Number of Packages : {packages.length}
        </h3>
        <table className="table border border-secondary ">
          <thead>
            <tr>
              <th scope="col">City</th>
              <th scope="col">Country</th>
              <th scope="col">ImageURL</th>
              <th scope="col">Budget</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {packages.map(pkg => (
              <tr key={pkg._id}>
                <td>{pkg.city}</td>
                <td>{pkg.country}</td>
                <td>{pkg.image ? "Image Uploaded" : "Image Missing"}</td>
                <td>$ {pkg.budget}</td>
                <td>
                  <button
                    onClick={() => handelDeletePackage(pkg._id)}
                    className="btn btn-danger"
                  >
                    Del
                  </button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDB;
