import React from "react";

const Testimonial = () => {
  return (
    <div>
      <div className="pb-3 my-5 w-75 mx-auto ">
        <div className="text-center pb-3 text-success">
          <h1>Patients Testimonials</h1>
        </div>
        <br />

        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner w-75 mx-auto">
            <div className="carousel-item active">
              {/* <img src="..." className="d-block w-100" alt="..." /> */}
              <p className="fs-5">
                <em>
                  &ldquo; I recently found myself under your care for a cardiac
                  issue. While there, accompanied by my wife, we found that the
                  entire staff at Jamaica Hospital was exceedingly professional
                  and efficient, from your E.R. receptionists to the cardiac
                  care team. You should be proud of your outstanding staff and
                  service. I loved my experience at Jamaica Hospital and would
                  recommend this hospital to family and friends. Keep up the
                  phenomenal work. &rdquo;
                </em>
              </p>
              <h4 className="text-end">
                <em>--Robert</em>
              </h4>
            </div>
            <div className="carousel-item">
              <p className="fs-5">
                <em>
                  &ldquo; I am writing to express my gratitude from my family
                  for the care given to my mother. In the SICU, there was care,
                  compassion, and respect. A special thank you to your social
                  workers as well; they provided professional guidance, comfort,
                  and strength to make our own decisions. Finally, I cannot
                  praise the Palliative Care and Hospice team enough. They were
                  patient and helpful. All our hope that you continue along this
                  path. &rdquo;
                </em>
              </p>
              <h4 className="text-end">
                <em>--Anna</em>
              </h4>
            </div>
            <div className="carousel-item">
              <p className="fs-5">
                <em>
                  &ldquo; I was recently cared for at Jamaica Hospital following
                  a heart attack while at JFK. I just wanted to say a few words
                  about the exceptional care I received in the Jamaica Hospital
                  Cardiac Care Unit and the MICU. All of the doctors and nurses
                  were friendly, pleasant, kind, thorough, conscientious and
                  professional. I am happy to have been in their care. In the
                  SICU, there was care, compassion, and respect. &rdquo;
                </em>
              </p>
              <h4 className="text-end">
                <em>--Frank</em>
              </h4>
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

export default Testimonial;
