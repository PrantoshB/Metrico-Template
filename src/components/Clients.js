import React from 'react';
import './Clients.css';
import ConverseLogo from '../assets/images/clients/converse.png';
import GoogleLogo from '../assets/images/clients/google.png';
import InstagramLogo from '../assets/images/clients/instagram.png';
import MicrosoftLogo from '../assets/images/clients/microsoft.png';

const Clients = () => {
  return (
    <section className="section bg-white" id="clients">
      <div className="container">
        <div className="row text-center">
          <div className="col-sm-12">
            <h2 className="title">Trusted by Thousands</h2>
            <p className="slogan">Lorem ipsum dolor sit amet, consectetur adipis.</p>
            <ul className="list-inline pt-4">
              <li className="list-inline-item">
                <img src={MicrosoftLogo} alt="Microsoft" />
              </li>
              <li className="list-inline-item">
                <img src={GoogleLogo} alt="Google" />
              </li>
              <li className="list-inline-item">
                <img src={InstagramLogo} alt="Instagram" />
              </li>
              <li className="list-inline-item">
                <img src={ConverseLogo} alt="Converse" />
              </li>
            </ul>
          </div>
          {/* end Col */}
        </div>
      </div>
    </section>
  );
};

export default Clients;
