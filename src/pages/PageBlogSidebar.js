// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";
import { Helmet } from "react-helmet";
// import images
import blog01 from "../images/blog/01.jpg";
import blog07 from "../images/blog/07.jpg";
import blog08 from "../images/blog/08.jpg";
import BlogCard from "./BlogCard";

class PageBlogSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 80) {
      document.getElementById("topnav").classList.add("nav-sticky");
    } else {
      document.getElementById("topnav").classList.remove("nav-sticky");
    }
  };

  render() {
    const data = [1, 1, 1, 11, 1, 1];

    return (
      <React.Fragment>
        <Helmet title="Blog" />

        <section /* className="bg-half bg-light" */>
          <div className="home-center">
            <div className="home-desc-center">
              <div className="container">
                <Row className="justify-content-center">
                  <Col lg={12} className="text-center">
                    <div className="page-next-level">
                      {/* <h4 className="title"> Blog </h4> */}
                      <ul className="page-next d-inline-block bg-white shadow p-2 pl-4 pr-4 rounded mb-0">
                        <li>
                          <Link
                            to="#"
                            className="text-uppercase font-weight-bold text-dark"
                          >
                            Blog
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <Row>
              <Col lg={8} md={6}>
                <div className="row mr-lg-2">
                  {data.map(item => {
                    return (
                      <BlogCard
                        title="NLP Nedir?"
                        name="Seyit Ahmet Abay"
                        like="22"
                        comment="04"
                        date="10 Şubat 2020"
                      />
                    );
                  })}
                  <Col>
                    <ul className="pagination justify-content-center mb-0 list-unstyled">
                      <li>
                        <Link to="#" className="pr-3 pl-3 pt-2 pb-2">
                          Prev
                        </Link>
                      </li>
                      <li className="active">
                        <Link to="#" className="pr-3 pl-3 pt-2 pb-2">
                          1
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="pr-3 pl-3 pt-2 pb-2">
                          2
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="pr-3 pl-3 pt-2 pb-2">
                          3
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="pr-3 pl-3 pt-2 pb-2">
                          Next
                        </Link>
                      </li>
                    </ul>
                  </Col>
                </div>
              </Col>
              <Col lg={4} md={6} className="col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="sidebar mt-sm-30 p-4 rounded shadow">
                  <div className="widget mb-4 pb-2">
                    <h4 className="widget-title">Ara</h4>
                    <div id="search2" className="widget-search mt-4 mb-0">
                      <form
                        role="search"
                        method="get"
                        id="searchform"
                        className="searchform"
                      >
                        <div>
                          <input
                            type="text"
                            className="border rounded"
                            name="s"
                            id="s"
                            placeholder="Ara..."
                          />
                          <input
                            type="submit"
                            id="searchsubmit"
                            value="Search"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="widget mb-4 pb-2">
                    <h4 className="widget-title">Kategoriler</h4>
                    <ul className="list-unstyled mt-4 mb-0 catagories">
                      <li>
                        <Link to="#">Yaşam Koçluğu</Link>{" "}
                        <span className="float-right">13</span>
                      </li>
                      <li>
                        <Link to="#">NLP</Link>{" "}
                        <span className="float-right">09</span>
                      </li>
                      <li>
                        <Link to="#">Çocukta Duygusal Zeka</Link>{" "}
                        <span className="float-right">18</span>
                      </li>
                      <li>
                        <Link to="#">EFT</Link>{" "}
                        <span className="float-right">20</span>
                      </li>
                    </ul>
                  </div>
                  <div className="widget mb-4 pb-2">
                    <h4 className="widget-title">Son Yazılar</h4>
                    <div className="mt-4">
                      <div className="clearfix post-recent">
                        <div className="post-recent-thumb float-left">
                          {" "}
                          <Link to="#">
                            {" "}
                            <img
                              alt="img"
                              src={blog07}
                              className="img-fluid rounded"
                            />
                          </Link>
                        </div>
                        <div className="post-recent-content float-left">
                          <Link to="#">Consultant Business</Link>
                          <span className="text-muted mt-2">
                            15th June, 2019
                          </span>
                        </div>
                      </div>
                      <div className="clearfix post-recent">
                        <div className="post-recent-thumb float-left">
                          {" "}
                          <Link to="#">
                            {" "}
                            <img
                              alt="img"
                              src={blog08}
                              className="img-fluid rounded"
                            />
                          </Link>
                        </div>
                        <div className="post-recent-content float-left">
                          <Link to="#">Look On The Glorious Balance</Link>{" "}
                          <span className="text-muted mt-2">
                            15th June, 2019
                          </span>
                        </div>
                      </div>
                      <div className="clearfix post-recent">
                        <div className="post-recent-thumb float-left">
                          {" "}
                          <Link to="#">
                            {" "}
                            <img
                              alt="img"
                              src={blog01}
                              className="img-fluid rounded"
                            />
                          </Link>
                        </div>
                        <div className="post-recent-content float-left">
                          <Link to="#">Research Financial.</Link>{" "}
                          <span className="text-muted mt-2">
                            15th June, 2019
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="widget mb-4 pb-2">
                    <h4 className="widget-title">Etiket Bulutu</h4>
                    <div className="tagcloud mt-4">
                      <Link to="#" className="rounded">
                        NLP
                      </Link>
                      <Link to="#" className="rounded">
                        EFT
                      </Link>
                      <Link to="#" className="rounded">
                        Yaşam Koçluğu
                      </Link>
                      <Link to="#" className="rounded">
                        Kişisel Gelişim
                      </Link>
                      <Link to="#" className="rounded">
                        Çocuk
                      </Link>
                      <Link to="#" className="rounded">
                        Aile
                      </Link>
                      <Link to="#" className="rounded">
                        Evlilik
                      </Link>
                    </div>
                  </div>
                  <div className="widget">
                    <h4 className="widget-title">Bizi Takip Edin</h4>
                    <ul className="list-unstyled social-icon mt-4 mb-0">
                      <li className="list-inline-item mr-1">
                        <Link to="#" className="rounded">
                          <i className="mdi mdi-facebook"></i>
                        </Link>
                      </li>
                      <li className="list-inline-item mr-1">
                        <Link to="#" className="rounded">
                          <i className="mdi mdi-instagram"></i>
                        </Link>
                      </li>
                      <li className="list-inline-item mr-1">
                        <Link to="#" className="rounded">
                          <i className="mdi mdi-twitter"></i>
                        </Link>
                      </li>
                      <li className="list-inline-item mr-1">
                        <Link to="#" className="rounded">
                          <i className="mdi mdi-vimeo"></i>
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link to="#" className="rounded">
                          <i className="mdi mdi-dribbble"></i>
                        </Link>
                      </li>
                    </ul>
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
export default PageBlogSidebar;
