import React from 'react';
import './Home.css';
import { Button } from 'react-bootstrap';

const Home = () => {
  return (
    <section className="section-lg home-alt bg-gradient-1" id="home">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="home-wrapper text-center">
              <p className="text-muted">Creative Landing Page Template</p>
              <h1>Here is the best way to present your apps</h1>
              <Button variant="primary" active>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
