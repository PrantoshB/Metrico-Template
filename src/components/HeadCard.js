import React from 'react';
import './HeadCard.css'

const HeadCard = () => {
  return (
    <>
        <section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="facts-box text-center">
                            <div className="row">
                                <div className="col-sm-3 col-6">
                                    <h2>687</h2>
                                    <p className="text-muted">Completed Projects</p>
                                </div>

                                <div className="col-sm-3 col-6">
                                    <h2>142</h2>
                                    <p className="text-muted">Happy Clients</p>
                                </div>

                                <div className="col-sm-3 col-6">
                                    <h2>742</h2>
                                    <p className="text-muted">Total Download</p>
                                </div>

                                <div className="col-sm-3 col-6">
                                    <h2>1548</h2>
                                    <p className="text-muted">Cup Of Coffee</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default HeadCard