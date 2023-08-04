// eslint-disable-next-line react/function-component-definition
import React, { useEffect } from "react";
import Pricing from "../components/Pricing";
import pricingData from "../app-data/pricing.json";
import "./AllPricing.css";
import Google from "../assets/images/google.png";
import Instagram from "../assets/images/instagram.png";
import Microsoft from "../assets/images/microsoft.png";
import Converse from "../assets/images/converse.png";

const AllPricing = () => {
  return (
    <div className="price-section">
      <div class="text-center">
        <h2 class="title">Simple Pricing</h2>
        <p class="title-alt">
          Looks beautiful & ultra-sharp on Retina Screen Displays. Retina Icons,
          Fonts & all <br />
          others graphics are optimized.
        </p>
      </div>

      <div className="plans">
        {pricingData &&
          pricingData.map((item, index) => (
            <Pricing
              key={index}
              plan={item.plan}
              price={item.price}
              storage={item.storage}
              bandwidth={item.bandwidth}
            />
          ))}
      </div>

      <div class="text-center">
        <div>
          <h2 class="title">Trusted by Thousands</h2>
          <p class="title-alt">
            Lorem ipsum dolor sit amet, consectetur adipis.
          </p>
        </div>

        <ul className="partner-logo-list list-unstyled">
          <li>
            <img src={Microsoft} />
          </li>
          <li>
            <img src={Google} />
          </li>
          <li>
            <img src={Instagram} />
          </li>
          <li>
            <img src={Converse} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AllPricing;
