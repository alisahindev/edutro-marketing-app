// React Basic and Bootstrap
import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

//import images
import ticket1 from '../../images/icon/ticket1.svg';
import ticket2 from '../../images/icon/ticket2.svg';
import ticket3 from '../../images/icon/ticket3.svg';

import roundLight from '../../images/shapes/round-light.png';

//images client
import client1 from '../../images/client/01.jpg';
import client2 from '../../images/client/02.jpg';
import client3 from '../../images/client/03.jpg';
import client4 from '../../images/client/04.jpg';
import client5 from '../../images/client/05.jpg';
import client6 from '../../images/client/06.jpg';

class Pricing extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
               <section className="section" id="tickets">
            <div className="container">
                <Row className="justify-content-center">
                    <Col className="text-center">
                        <div className="section-title mb-4 pb-2">
                            <h4 className="title mb-4">Our Tickets Rates</h4>
                            <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                    </Col>
                </Row>

                <Row className="align-items-center">
                    <Col md={4} className="col-12 mt-4 pt-2">
                        <div className="pricing-rates best-plan bg-light pt-5 pb-5 p-4 rounded text-center">
                            <img src={ticket1} className="mb-4" height="50" alt="" />
                            <h2 className="title text-uppercase mb-4">1 Day Tickets</h2>
                            <div className="d-flex justify-content-center mb-4">
                                <span className="h4 mb-0 mt-2">$</span>
                                <span className="price display-4 mb-0">09</span>
                                <span className="h4 align-self-end mb-1">/Day</span>
                            </div>
                            <p className="text-muted">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                            <Link to="javascript:void(0)" className="btn btn-outline-primary btn-sm mt-4">Buy Tickets</Link>
                        </div>
                    </Col>

                    <Col md={4} className="col-12 mt-4 pt-2">
                        <div className="pricing-rates best-plan position-relative overflow-hidden shadow bg-white pt-5 pb-5 p-4 rounded text-center">
                            <div className="lable text-center bg-primary pt-2 pb-2">
                                <h6 className="best text-white mb-0 text-uppercase">Full</h6>
                            </div>
                            <img src={ticket2} className="mb-4" height="50" alt="" />
                            <h2 className="title text-uppercase mb-4">Full Tickets</h2>
                            <div className="d-flex justify-content-center mb-4">
                                <span className="h4 mb-0 mt-2">$</span>
                                <span className="price display-4 mb-0">24</span>
                                <span className="h4 align-self-end mb-1">/Full</span>
                            </div>
                            
                            <p className="text-muted">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                            <a href="javascript:void(0)" className="btn btn-outline-primary btn-sm mt-4">Buy Tickets</a>
                        </div>
                    </Col>

                    <Col md={4} className="col-12 mt-4 pt-2">
                        <div className="pricing-rates best-plan bg-light pt-5 pb-5 p-4 rounded text-center">
                            <img src={ticket3} className="mb-4" height="50" alt="" />
                            <h2 className="title text-uppercase mb-4">Couple Tickets</h2>
                            <div className="d-flex justify-content-center mb-4">
                                <span className="h4 mb-0 mt-2">$</span>
                                <span className="price display-4 mb-0">16</span>
                                <span className="h4 align-self-end mb-1">/Day</span>
                            </div>
                            
                            <p className="text-muted">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                            <a href="javascript:void(0)" className="btn btn-outline-primary btn-sm mt-4">Buy Tickets</a>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <div className="section-title mb-60">
                            <h4 className="title mb-4">Events Review</h4>
                            <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                    </div>
                </div>

                <Row className="justify-content-center">
                    <Col lg={9} className="text-center">
                        <div id="owl-fade" className="owl-carousel owl-theme">
                            <div className="customer-testi text-center">
                                <p className="text-muted h6 font-italic">" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. "</p>
                                <img src={client1} height="90" className="rounded-pill mx-auto mt-3 shadow" alt="" />
                                <ul className="list-unstyled mb-0 mt-3">
                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                </ul>
                                <h6 className="text-primary">- Thomas Israel <small className="text-muted">C.E.O</small></h6>
                            </div>
                            
                            <div className="customer-testi text-center">
                                <p className="text-muted h6 font-italic">" The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention from the layout. "</p>
                                <img src={client2} height="90" className="rounded-pill mx-auto mt-3 shadow" alt="" />
                                <ul className="list-unstyled mb-0 mt-3">
                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                </ul>
                                <h6 className="text-primary">- Carl Oliver <small className="text-muted">P.A</small></h6>
                            </div>
                            
                            <div className="customer-testi text-center">
                                <p className="text-muted h6 font-italic">" There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space. These alternatives to the classNameic Lorem Ipsum texts are often amusing and tell short, funny or nonsensical stories. "</p>
                                <img src={client3} height="90" className="rounded-pill mx-auto mt-3 shadow" alt="" />
                                <ul className="list-unstyled mb-0 mt-3">
                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                </ul>
                                <h6 className="text-primary">- Barbara McIntosh <small className="text-muted">M.D</small></h6>
                            </div>
                            
                            <div className="customer-testi text-center">
                                <p className="text-muted h6 font-italic">" According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero in 45 BC. Allegedly, a Latin scholar established the origin of the text by compiling all the instances of the unusual word 'consectetur' he could find "</p>
                                <img src={client4} height="90" className="rounded-pill mx-auto mt-3 shadow" alt="" />
                                <ul className="list-unstyled mb-0 mt-3">
                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                </ul>
                                <h6 className="text-primary">- Christa Smith <small className="text-muted">Manager</small></h6>
                            </div>
                            
                            <div className="customer-testi text-center">
                                <p className="text-muted h6 font-italic">" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. "</p>
                                <img src={client5} height="90" className="rounded-pill mx-auto mt-3 shadow" alt="" />
                                <ul className="list-unstyled mb-0 mt-3">
                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                </ul>
                                <h6 className="text-primary">- Dean Tolle <small className="text-muted">Developer</small></h6>
                            </div>
                            
                            <div className="customer-testi text-center">
                                <p className="text-muted h6 font-italic">" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text. "</p>
                                <img src={client6} height="90" className="rounded-pill mx-auto mt-3 shadow" alt="" />
                                <ul className="list-unstyled mb-0 mt-3">
                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                </ul>
                                <h6 className="text-primary">- Jill Webb <small className="text-muted">Designer</small></h6>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            
            <div className="container-fluid">
                <Row>
                    <div className="home-shape-bottom">
                        <img src={roundLight} alt="" className="img-fluid mx-auto d-block" />
                    </div> 
                </Row>
            </div>
        </section>
            </React.Fragment>
        );
    }
}

export default Pricing;