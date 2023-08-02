import React from "react";
import "./Pricing.css";

const Pricing = (properties) => {
  return (
    <div className="inner-box">
      <div className="plan-header text-center">
        <h3 className="plan-title">{properties.plan}</h3>
        <h2 className="plan-price">{properties.price}</h2>
        <div className="plan-duration">Per Month</div>
      </div>
      <ul className="plan-stats list-unstyled">
        <li>
          <i className="pe-7s-server" />
          {properties.storage} Storage
        </li>
        <li>
          <i className="pe-7s-graph" />
          {properties.bandwidth} Bandwidth
        </li>
        <li>
          <i className="pe-7s-mail-open" />
          Email Support
        </li>
        <li>
          <i className="pe-7s-tools" />
          24x7 Support
        </li>
      </ul>
      <div class="text-center">
        <a href="#" class="pricing-btn">
          Signup Now
        </a>
      </div>
    </div>
  );
};

export default Pricing;
