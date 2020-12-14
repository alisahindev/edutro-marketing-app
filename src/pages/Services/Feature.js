// React Basic and Bootstrap
import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

// Import images
import stairs from '../../images/icon/stairs.svg';
import code from '../../images/icon/code.svg';
import device from '../../images/icon/device.svg';

class Feature extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="section pt-0">
                    <div className="container">
                        <Row>
                            <Col md={4} className="col-12">
                                <div className="features text-center">
                                    <div className="image position-relative d-inline-block">
                                        <img src={stairs} alt="" />
                                    </div>

                                    <div className="content mt-4">
                                        <h4 className="title-2">Built for Everyone</h4>
                                        <p className="text-muted mb-0">Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam eleifend aenean elementum semper.</p>
                                    </div>
                                </div>
                            </Col>

                            <Col md={4} className="col-12 mt-5 mt-sm-0">
                                <div className="features text-center">
                                    <div className="image position-relative d-inline-block">
                                        <img src={device} alt="" />
                                    </div>

                                    <div className="content mt-4">
                                        <h4 className="title-2">Responsive Design</h4>
                                        <p className="text-muted mb-0">Allegedly, a Latin scholar established the origin of the established text by compiling unusual word.</p>
                                    </div>
                                </div>
                            </Col>

                            <Col md={4} className="col-12 mt-5 mt-sm-0">
                                <div className="features text-center">
                                    <div className="image position-relative d-inline-block">
                                        <img src={code} alt="" />
                                    </div>

                                    <div className="content mt-4">
                                        <h4 className="title-2">Build Everything</h4>
                                        <p className="text-muted mb-0">It seems that only fragments of the original text remain in only fragments the Lorem Ipsum texts used today.</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Feature;
