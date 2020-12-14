// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";

// import images
import insurance from "../../images/icon/insurance.svg";
import graduationHat from "../../images/icon/graduation-hat.svg";
import ai from "../../images/icon/ai.svg";

class Feature extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const FeatureCard = ({ title, description, img,link }) => (
      <Col md={4}>
        <div className="course-feature text-center position-relative d-block overflow-hidden bg-white rounded p-4 pt-5 pb-5">
          <div className="icon">
            <img src={img} height="55" alt="" />
          </div>
          <h4 className="mt-3">
            <Link to="#" className="title text-dark">
              {title}
            </Link>
          </h4>
          <p className="text-muted">
            {description}
          </p>
          <Link to={link} className="text-primary read-more">
            Keşfet <i className="mdi mdi-chevron-right"></i>
          </Link>
          <img
            src={img}
            className="full-img"
            height="300"
            alt=""
          />
        </div>
      </Col>
    );

    return (
      <React.Fragment>
        <section className="section">
          <div className="container">
            <Row>
              <FeatureCard link="egitimler" title="Profesyonel Eğitim Kurumları" img={insurance} description="Şehrini seç sana en uygun eğitimi keşfet" />
              <FeatureCard  link="egitimler" title="Lokasyon Tabanlı Arama" img={insurance} description="Şehrini seç sana en uygun eğitimi keşfet" />
              <FeatureCard  link="egitimler" title="Alanında Uzman Eğitmenler" img={insurance} description="Şehrini seç sana en uygun eğitimi keşfet" />
            </Row>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Feature;
