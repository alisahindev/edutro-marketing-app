// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";
import Search from "./CloudHosting/Search";
import CourseCard from "./Course/CourseCard";
import { Helmet } from "react-helmet";
import { inject, observer } from "mobx-react";
import Stores from "../stores/storeIdentifier";

@inject(Stores.DashboardStore)
@observer
class PageWork extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollNavigation, true);
    this.props.dashboardStore.getPopularCourses();
  }
  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation);
  }
  scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    var topnav = document.getElementById("topnav");
    if (top > 80 && topnav) {
      topnav.classList.add("nav-sticky");
    } else if (topnav) {
      topnav.classList.remove("nav-sticky");
    }
  };

  render() {
    const data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    const { popularCourses } = this.props.dashboardStore;
    return (
      <React.Fragment>
        <Helmet title="Eğitimler" />
        <section className="bg-half bg-light">
          <div className="home-center">
            <div className="home-desc-center">
              <div className="container">
                <Row className="justify-content-center">
                  <Col lg={12} className="text-center">
                    <div className="page-next-level">
                      <h4 className="title"> Eğitimleri Keşfet </h4>
                      <ul className="page-next d-inline-block bg-white shadow p-2 pl-4 pr-4 rounded mb-0">
                        <li>
                          <span className="text-uppercase text-primary font-weight-bold">
                            Eğitimler
                          </span>
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </section>

        <Search />

        <section className="section">
          <div className="container">
            <Row className="border-bottom">
              <Col lg={9} md={8}>
                <div className="section-title">
                  <h4 className="title mb-2">Tüm Eğitimler</h4>
                  <p className="text-muted mb-0">En popüler eğitimler</p>
                </div>
              </Col>

              <Col lg={3} md={4} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="form custom-form">
                  <div className="form-group">
                    <label>Eğitimleri filtrele :</label>
                    <select className="form-control" id="Sortbylist-Shop">
                      <option>Yakın Tarihte</option>
                      <option>Uzak Tarihte</option>
                      <option>En Yeni</option>
                    </select>
                  </div>
                </div>
              </Col>
            </Row>

            <Row>
              {popularCourses.map(item => {
                return (
                  <CourseCard
                    courseId={item.id}
                    title={item.title}
                    price={item.price}
                    image={item.imagePath}
                    discountPrice={item.discountPrice}
                    quota={item.quota}
                    locationName={item.locationName}
                    startDate={item.startDate}
                  />
                );
              })}

              <div className="col-12">
                <ul
                  style={{ marginTop: "30px" }}
                  className="pagination justify-content-center mb-0 list-unstyled"
                >
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
              </div>
            </Row>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default PageWork;
