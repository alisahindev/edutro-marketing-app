// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

// import images
import services from "../../images/illustrator/services.svg";

// import generic componenets
import Feature from './Feature';
import Counter from './Counter';
import Testimonial from './Testimonial';

// Modal Video 
import ModalVideo from 'react-modal-video'
import '../../../node_modules/react-modal-video/scss/modal-video.scss';

class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false, 
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal() {
        this.setState({ isOpen: true })
    }

    
    componentDidMount() {
        document.body.classList = "";
        window.addEventListener("scroll", this.scrollNavigation, true);
      }
  
       // Make sure to remove the DOM listener when the component is unmounted.
     componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollNavigation);
     }
     
      scrollNavigation = () => {
          var doc = document.documentElement;
          var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
          if(top > 80)
          {
               document.getElementById('topnav').classList.add('nav-sticky');
          }
          else
          {
            document.getElementById('topnav').classList.remove('nav-sticky');
          }
      }
      
    render() {

        return (
            <React.Fragment>

                {/* <div id="preloader">
                    <div id="status">
                        <div className="spinner">
                            <div className="double-bounce1"></div>
                            <div className="double-bounce2"></div>
                        </div>
                    </div>
                </div> */}

                {/* Hero Start */}
                <section className="bg-half-170" id="home">
                    <div className="home-center">
                        <div className="home-desc-center">
                            <div className="container">
                                <Row className="align-items-center">
                                    <Col lg={7} md={7}>
                                        <div className="title-heading mt-4">
                                            <h1 className="heading mb-3">Build Anything <br />For Your Project</h1>
                                            <p className="para-desc text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page.</p>
                                            <div className="watch-video mt-4 pt-2">
                                                <Link to="page-services" className="btn btn-primary mb-2 mr-2">Our Services</Link>
                                                <Link  onClick={this.openModal} to="#" className="ml-1 video-play-icon watch text-dark mb-2"><i className="mdi mdi-play play-icon-circle text-center d-inline-block mr-2 rounded-pill text-white position-relative play play-iconbar"></i> WATCH VIDEO</Link>
                                                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='L61p2uyiMSo' onClose={() => this.setState({isOpen: false})} />
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg={5} md={5} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                                        <img src={services} alt="" />
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Feature */}
                <Feature />

                {/* Counter */}
                <Counter />

                {/* Testimonial */}
                <Testimonial />

            </React.Fragment>
        );
    }
}

export default Index;
