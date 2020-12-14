// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col } from "reactstrap";
import team01 from "../../images/team/1.jpg";

class TeacherCard extends Component {
  render() {
    const { name, alan } = this.props;
    return (
      <React.Fragment>
        <Col lg={3} md={6} className="mt-4 pt-2">
          <div className="team text-center">
            <div className="position-relative">
              <img
                src={team01}
                className="img-fluid d-block rounded-pill mx-auto"
                alt="Landrick"
              />
              <ul className="list-unstyled social-icon team-icon mb-0 mt-4">
                <li className="list-inline-item">
                  <Link to="#" className="rounded">
                    <i className="mdi mdi-facebook" title="Facebook"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#" className="rounded">
                    <i className="mdi mdi-instagram" title="Instagram"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#" className="rounded">
                    <i className="mdi mdi-twitter" title="Twitter"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#" className="rounded">
                    <i className="mdi mdi-google-plus" title="Twitter"></i>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="content pt-3 pb-3">
              <h5 className="mb-0">
                <Link to="#" className="name text-dark">
                  {name}
                </Link>
              </h5>
              <small className="designation text-muted">{alan}</small>
            </div>
          </div>
        </Col>
      </React.Fragment>
    );
  }
}

export default TeacherCard;
