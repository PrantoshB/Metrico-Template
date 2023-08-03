import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <section class="section bg-dark-color">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="text-center subscribe-form">
                <h3>Subscribe to recive free updates!</h3>
                <form action="#">
                  <input type="text" placeholder="Email" />
                  <button type="submit">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer class="footer bg-dark-color">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 text-center">
              <p class="copyright">© 2023 HRMS. Design by PranLu</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
