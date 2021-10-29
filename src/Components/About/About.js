import React from "react";

const About = () => {
  return (
    <div>
      <div className="w-75 mx-auto py-5">
        <div className="row">
          {/* about banner */}
          <div className="col-md-8">
            <h2 className="text-success mb-4">About AlphaCare</h2>
            <p className="fs-5">
              {" "}
              We are the best in class care center with a mission to bring
              academic medical center that integrates clinical and hospital care
              with research and education. We are growing slowly and maintaining
              the quality that we drive for.
            </p>
          </div>
          <div className="col-md-4 text-end">
            <p className="fs-5">Got Questions? Call Us</p>
            <p className="fs-5">+46-76-751-2345</p>
            <button className="btn btn-warning px-4 fs-5">
              <i className="fas fa-envelope"></i> Send and Email
            </button>
          </div>
        </div>
      </div>
      {/* about main */}
      <div className="bg-light py-5">
        <div className="w-75 mx-auto row">
          <div className="col-md-6 pe-4">
            <h2 className="text-success mb-4">Who We Are?</h2>
            <p className="fs-6">
              We are a group of doctors from different countries of europe witth
              a passion for healthcare and healthy lives. Over the last 15
              years, we have transformed healthcare services by combining our
              strong technical ability with our deep understanding of the
              digital landscape. Over time, the digital landscape has
              transformed, and the way healthcare use online technology has
              changed. <br /> AlphaCare has also evolved, mastering new skills,
              developing new services and continuing to provide best treatments,
              services, diagnosis, and insurance solutions to our clients. Our
              customer-oriented approach has been a staple of the company over
              the years, and we’ll continue to measure our success by the
              accomplishments of our clients. <br />
              Soon we are going to expand our reach by developing a fully
              functional medical university at the heart of the capital of
              Krakosia, Our president Hom Tanks has given use the assurance to
              help with all the resources we will need.
            </p>
          </div>
          <div className="col-md-6 bg-dark rounded">
            <h4 className="text-success text-center my-4">
              Want to know more? <br />
              Subscribe to our Newsletter
            </h4>

            {/* Form  */}
            <form className="text-light px-3">
              <div className="mb-2">
                <label for="formGroupExampleInput" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Your Full Name"
                />
              </div>
              <div className="mb-2">
                <label for="formGroupExampleInput2" className="form-label">
                  City of residence
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput2"
                  placeholder="City, Zip Code"
                />
              </div>
              <div className="mb-2">
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Your Email"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>

              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  I have read and agreed the terms and conditions.
                </label>
              </div>
              <button type="submit" className="btn px-4 btn-success">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
