import React from "react";

export default function About() {
  return (
    <>
      <section className="about vh-100 text-center text-white d-flex justify-content-center align-items-center ">
        <div className="">
          <h2 className="  fw-bold mb-5">About Component</h2>
          <div className="icon my-2">
        <i class="fa-solid fa-star fa-xl"></i>
        </div>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
              <div className="col-md-6">
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
