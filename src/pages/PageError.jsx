// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";

// import images
import img404 from "../images/404.png";

class PageError extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    document.getElementById("pageLoader").style.display = "block";
    setTimeout(function () {
      document.getElementById("pageLoader").style.display = "none";
    }, 1000);
  }

  render() {
    return (
      <React.Fragment>
        <div className="back-to-home rounded d-none d-sm-block">
          <Link
            to="/"
            className="text-white rounded d-inline-block text-center"
          >
            <i className="mdi mdi-home"></i>
          </Link>
        </div>

        <section className="bg-home">
          <div className="home-center">
            <div className="home-desc-center">
              <div className="container">
                <Row className="justify-content-center">
                  <Col lg={8} md={12} className="text-center">
                    <img src={img404} className="img-fluid" alt="" />
                    <div className="text-uppercase mt-4 display-3">OOPS!</div>
                    <div className="text-capitalize text-dark mb-4 error-page">
                      Sayfa Bulunamadı
                    </div>
                    <p className="text-muted para-desc mx-auto">
                      Mevcut hesabınızla giriş yapmayı deneyin
                    </p>
                  </Col>
                </Row>

                <Row>
                  <div className="col-md-12 text-center">
                    <Link to="/" className="btn btn-primary mt-4 ml-2">
                      Anasayfa
                    </Link>
                  </div>
                </Row>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default PageError;
