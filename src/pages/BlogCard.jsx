// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col } from "reactstrap";
import blog01 from "../images/blog/01.jpg";

class BlogCard extends Component {
  render() {
    const { title, name, like, comment, date } = this.props;
    return (
      <React.Fragment>
        <Col lg={6} className="mb-4 pb-2">
          <div className="blog position-relative overflow-hidden shadow rounded">
            <div className="position-relative">
              <img src={blog01} className="img-fluid rounded-top" alt="" />
              <div className="overlay rounded-top bg-dark"></div>
            </div>
            <div className="content p-4">
              <h4>
                <Link to="page-blog-detail" className="title text-dark">
                  {title}
                </Link>
              </h4>
              <div className="post-meta mt-3">
                <Link
                  to="page-blog-detail"
                  className="text-muted float-right readmore"
                >
                  Yazıya git <i className="mdi mdi-chevron-right"></i>
                </Link>
                <ul className="list-unstyled mb-0">
                  <li className="list-inline-item mr-2">
                    <Link to="#" className="text-muted like">
                      <i className="mdi mdi-heart-outline mr-1"></i>
                      {like}
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#" className="text-muted comments">
                      <i className="mdi mdi-comment-outline mr-1"></i>
                      {comment}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="author">
              <small className="text-light user d-block">
                <i className="mdi mdi-account"></i> {name}
              </small>
              <small className="text-light date">
                <i className="mdi mdi-calendar-check"></i> {date}
              </small>
            </div>
          </div>
        </Col>
      </React.Fragment>
    );
  }
}

export default BlogCard;
