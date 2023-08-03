import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section className="section" id="features">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="features-box text-center">
              <div className="feature-icon">
                <i className="pe-7s-science" />
              </div>
              <h3>Strategy Solutions</h3>
              <p className="text-muted">
                We put a lot of effort into design, as it’s the most important ingredient of a successful website. Sed ut perspiciatis unde omnis iste natus error sit.
              </p>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="features-box text-center">
              <div className="feature-icon">
                <i className="pe-7s-light" />
              </div>
              <h3>Dedicated Support</h3>
              <p className="text-muted">
                We put a lot of effort into design, as it’s the most important ingredient of a successful website. Sed ut perspiciatis unde omnis iste natus error sit.
              </p>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="features-box text-center">
              <div className="feature-icon">
                <i className="pe-7s-display1" />
              </div>
              <h3>Digital Design</h3>
              <p className="text-muted">
                We put a lot of effort into design, as it’s the most important ingredient of a successful website. Sed ut perspiciatis unde omnis iste natus error sit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
