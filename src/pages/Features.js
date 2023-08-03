import React from "react";
import "./Features.css";
import iPad from "../assets/images/ipad.png";

const Features = () => {
  return (
    <>
      <section className="section" id="features">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="features-box text-center">
                <div className="feature-icon">
                  <i className="pe-7s-science"></i>
                </div>
                <h3>Strategy Solutions</h3>

                <p className="text-muted">
                  We put a lot of effort in design, as it’s the most important
                  ingredient of successful website.Sed ut perspiciatis unde
                  omnis iste natus error sit.
                </p>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="features-box text-center">
                <div className="feature-icon">
                  <i className="pe-7s-light"></i>
                </div>
                <h3>Dedicated Support</h3>

                <p className="text-muted">
                  We put a lot of effort in design, as it’s the most important
                  ingredient of successful website.Sed ut perspiciatis unde
                  omnis iste natus error sit.
                </p>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="features-box text-center">
                <div className="feature-icon">
                  <i className="pe-7s-display1"></i>
                </div>
                <h3>Digital Design</h3>

                <p className="text-muted">
                  We put a lot of effort in design, as it’s the most important
                  ingredient of successful website.Sed ut perspiciatis unde
                  omnis iste natus error sit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ipad-image">
        <img src={iPad} alt="" className="ipad" />
      </section>
    </>
  );
};

export default Features;
