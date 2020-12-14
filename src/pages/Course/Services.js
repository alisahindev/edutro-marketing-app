// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";
import { observer, inject } from "mobx-react";

import CourseCard from "./CourseCard";
import Stores from "../../stores/storeIdentifier";

@inject(Stores.DashboardStore)
@observer
class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.dashboardStore.getPopularCourses();
  }


  render() {
    const data = [1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1];
    const { popularCourses } = this.props.dashboardStore;
    return (
      <React.Fragment>
        <section className="section" id="courses">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 text-center">
                <div className="section-title mb-4 pb-2">
                  <h4 className="title mb-4">Popüler Eğitimleri Keşfedin</h4>
                  <p className="text-muted para-desc mx-auto mb-0">
                    Anlayış{" "}
                    <span className="text-primary font-weight-bold">
                      Beceri
                    </span>{" "}
                    Algı, Yetenek Akademisi
                  </p>
                </div>
              </div>
            </div>

            <Row>
              {popularCourses.slice(0, 6).map(item => {
                return (
                  <CourseCard
                    discountPrice={item.discountPrice}
                    courseId={item.id}
                    image={item.imagePath}
                    title={item.title}
                    price={item.price}
                    quota={item.quota}
                    locationName={item.locationName}
                    startDate={item.startDate}
                  />
                );
              })}

              {popularCourses.length > 5 && <Col className="mt-4 pt-2 text-center">
                <Link to="#" className="btn btn-primary">
                  Daha Fazla Eğitim Görüntüle{" "}
                  <i className="mdi mdi-chevron-right"></i>
                </Link>
              </Col>}
            </Row>
          </div>

          {/* <div className="container mt-100 mt-60" id="instructors">
            <Row className="justify-content-center">
              <Col className="text-center">
                <div className="section-title mb-4 pb-2">
                  <h4 className="title mb-4">Öne Çıkan Eğitmenler</h4>
                  <p className="text-muted para-desc mx-auto mb-0">
                    Sizin İçin{" "}
                    <span className="text-primary font-weight-bold">
                      Önerilen
                    </span>{" "}
                    Eğitmenler
                  </p>
                </div>
              </Col>
            </Row>

            <Row>
              {data2.map(teacher => {
                return (
                  <TeacherCard name="Seyit Ahmet Abay" alan="Kişisel Gelişim" />
                );
              })}
            </Row>
          </div> */}
        </section>
      </React.Fragment>
    );
  }
}

export default Services;
