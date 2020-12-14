// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col } from "reactstrap";
import moment from "moment";
import course1 from "../../images/course/1.jpg";

class CourseCard extends Component {
  render() {
    const {
      title,
      price,
      quota,
      locationName,
      startDate,
      courseId,
      discountPrice,
      image,
    } = this.props;
    return (
      <React.Fragment>
        <Col lg={4} md={6} className="col-12 mt-4 pt-2">
          <div className="courses-desc position-relative overflow-hidden rounded border">
            <div className="position-relative d-block overflow-hidden">
              <img
                style={{ width: "350px", height: "196px" }}
                src={image}
                className="img-fluid rounded-top mx-auto"
                alt="Landrick"
              />
              <div className="overlay-work"></div>
              <Link
                to={{
                  pathname: `/egitimler/${title
                    .replace(/ /g, "-")
                    .toLowerCase()}`,
                  state: { courseId },
                }}
                className="text-white h6 preview"
              >
                Hemen İnceleyin <i className="mdi mdi-chevron-right"></i>
              </Link>
            </div>
            <div className="content p-3">
              <h5>
                <Link
                  to={{
                    pathname: `/egitimler/${title
                      .replace(/ /g, "-")
                      .toLowerCase()}`,
                    state: { courseId },
                  }}
                  className="title text-dark"
                >
                  {title}
                </Link>
              </h5>
              <div className="rating">
                <ul className="list-unstyled mb-0">
                  <li className="list-inline-item">
                    <i className="mdi mdi-star h5 mb-0 text-warning"></i>
                  </li>
                  <li className="list-inline-item">
                    <i className="mdi mdi-star h5 mb-0 text-warning"></i>
                  </li>
                  <li className="list-inline-item">
                    <i className="mdi mdi-star h5 mb-0 text-warning"></i>
                  </li>
                  <li className="list-inline-item">
                    <i className="mdi mdi-star h5 mb-0 text-warning"></i>
                  </li>
                  <li className="list-inline-item">
                    <i className="mdi mdi-star h5 mb-0 text-warning"></i>
                  </li>
                  <li className="list-inline-item">
                    ({quota}
                    <i className="mdi mdi-account text-muted"></i>)
                  </li>
                </ul>
              </div>
              <div className="fees">
                <ul className="list-unstyled float-right mb-0">
                  <li className="h3">
                    <span className="h6">₺</span>
                    {discountPrice && discountPrice.toFixed(2)}
                  </li>

                  <li>
                    <small>₺</small>
                    <s>
                      {" "}
                      <span style={{ fontWeight: "300" }}>
                        {" "}
                        {price && price.toFixed(2)}
                      </span>
                    </s>
                  </li>
                </ul>
                <ul className="list-unstyled mb-0 numbers">
                  <li>
                    <i className="mdi mdi-map-marker text-muted"></i>{" "}
                    {locationName}
                  </li>
                  <li>
                    <i className="mdi mdi-calendar text-muted"></i>{" "}
                    {moment(startDate).format("LL")}
                  </li>
                </ul>
              </div>
            </div>
            <div className="collection">
              <Link to="#">
                <i className="mdi mdi-heart h5"></i>
              </Link>
            </div>
          </div>
        </Col>
      </React.Fragment>
    );
  }
}

export default CourseCard;
