import React from 'react';
import './FAQ.css';

const FAQ = () => {
  return (
    <section className="section" id="faqs">
      <div className="container">
        <div className="row text-center">
          <div className="col-sm-12">
            <h2 className="title">FAQ</h2>
            <p className="title-alt">
              Looks beautiful &amp; ultra-sharp on Retina Screen Displays. Retina Icons, Fonts &amp; all <br />
              other graphics are optimized.
            </p>

            <div className="row text-left">
              <div className="col-sm-6">
                <div className="question-box">
                  <h4><span className="text-primary">Q.</span>What is Lorem Ipsum?</h4>
                  <p>
                    <span><b>A. </b></span>Lorem ipsum dolor sit amet, in mea nonumes dissentias dissentiunt, pro te solet oratio iriure. Cu sit consetetur moderatius intellegam, ius decore accusamus te. Ne primis
                    suavitate disputando nam. Mutat convenirete.
                  </p>
                </div>

                <div className="question-box">
                  <h4><span className="text-primary">Q.</span>How many variations exist?</h4>
                  <p>
                    <span><b>A. </b></span>Lorem ipsum dolor sit amet, in mea nonumes dissentias dissentiunt, pro te solet oratio iriure. Cu sit consetetur moderatius intellegam, ius decore accusamus te. Ne primis
                    suavitate disputando nam. Mutat convenirete.
                  </p>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="question-box">
                  <h4><span className="text-primary">Q.</span>Is safe to use Lorem Ipsum?</h4>
                  <p>
                    <span><b>A. </b></span>Lorem ipsum dolor sit amet, in mea nonumes dissentias dissentiunt, pro te solet oratio iriure. Cu sit consetetur moderatius intellegam, ius decore accusamus te. Ne primis
                    suavitate disputando nam. Mutat convenirete.
                  </p>
                </div>

                <div className="question-box">
                  <h4><span className="text-primary">Q.</span>License & Copyright</h4>
                  <p>
                    <span><b>A. </b></span>Lorem ipsum dolor sit amet, in mea nonumes dissentias dissentiunt, pro te solet oratio iriure. Cu sit consetetur moderatius intellegam, ius decore accusamus te. Ne primis
                    suavitate disputando nam. Mutat convenirete.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
