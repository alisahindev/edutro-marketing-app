import React, { Component } from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import moment from "moment";

class CourseInformationCard extends Component {
  render() {
    const { course } = this.props;
    return (
      <Col lg={4} md={5} className="col-12">
        <div className="sidebar rounded shadow">
          <div className="widget border-bottom p-4">
            <h5 className="mb-0">Özellikler</h5>
          </div>

          <div className="p-4">
            <div className="widget">
              <i className="mdi mdi-account-check mdi-24px float-left mr-3"></i>
              <div className="overflow-hidden d-block">
                <h4 className="widget-title mb-0">Kontenjan</h4>
                <p className="text-success">{course.quota} kişi</p>
              </div>
            </div>
            <div className="widget">
              <i className="mdi mdi-map-marker mdi-24px float-left mr-3"></i>
              <div className="overflow-hidden d-block">
                <h4 className="widget-title mb-0">Lokasyon:</h4>
                <p className="text-success">{course.locationName}</p>
              </div>
            </div>
            <div className="widget">
              <i className="mdi mdi-monitor mdi-24px float-left mr-3"></i>
              <div className="overflow-hidden d-block">
                <h4 className="widget-title mb-0">Online Video:</h4>
                <p className="text-success">
                  {course.onlineVideo ? "Var" : "Yok"}
                </p>
              </div>
            </div>
            <div className="widget">
              <i className="mdi mdi-file-document-box mdi-24px float-left mr-3"></i>
              <div className="overflow-hidden d-block">
                <h4 className="widget-title mb-0">Sertifika:</h4>
                <p className="text-success">
                  {course.certificate ? "Var" : "Yok"}
                </p>
              </div>
            </div>
            <div className="widget">
              <i className="mdi mdi-school mdi-24px float-left mr-3"></i>
              <div className="overflow-hidden d-block">
                <h4 className="widget-title mb-0">Katılım Belgesi:</h4>
                <p className="text-success">
                  {course.certificateOfParticipation ? "Var" : "Yok"}
                </p>
              </div>
            </div>
            <div className="widget">
              <i className="mdi mdi-currency-try mdi-24px float-left mr-3"></i>
              <div className="overflow-hidden d-block">
                <h4 className="widget-title mb-0">Ücret:</h4>
                <p className="text-success">
                  {course.price && course.price.toFixed(2)} ₺
                </p>
              </div>
            </div>
            <div className="widget">
              <i className="mdi mdi-calendar-text mdi-24px float-left mr-3"></i>
              <div className="overflow-hidden d-block">
                <h4 className="widget-title mb-0">Başlangıç Tarihi:</h4>
                <p className="text-success mb-0">
                  {moment(course.startDate).format("LL")}
                </p>
              </div>
            </div>
            <div style={{ marginTop: "15px" }} className="widget">
              <i className="mdi mdi-calendar-remove mdi-24px float-left mr-3"></i>
              <div className="overflow-hidden d-block">
                <h4 className="widget-title mb-0">Bitiş Tarihi:</h4>
                <p className="text-success mb-0">
                  {moment(course.endDate).format("LL")}
                </p>
              </div>
            </div>
            <div style={{ marginTop: "15px" }} className="widget">
              <i className="mdi mdi-clock-outline mdi-24px float-left mr-3"></i>
              <div className="overflow-hidden d-block">
                <h4 className="widget-title mb-0">Eğitim Süresi:</h4>
                <p className="text-success mb-0">
                  {course.durationCount
                    ? course.durationCount + " " + course.durationType
                    : "-"}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "20px" }} className="sidebar rounded shadow">
          <div className="widget border-bottom p-4">
            <h5 className="mb-0">Eğitmen</h5>
          </div>

          <div className="p-4">
            <div className="widget">
              <span className="mdi-24px float-left mr-3">
                <img
                  style={{ width: "55px" }}
                  src={
                    course &&
                    course.courseOwnerInfo &&
                    course.courseOwnerInfo.logoPath
                  }
                />
              </span>
              <div className="overflow-hidden d-block">
                {course && course.courseOwnerInfo && (
                  <Link
                    style={{ color: "black" }}
                    to={{
                      pathname: `/egitmenler/${course.courseOwnerInfo.name
                        .replace(/ /g, "-")
                        .toLowerCase()}`,
                      state: {
                        entityId: course.courseOwnerInfo.id,
                        entityType: course.courseOwnerInfo.entityType,
                      },
                    }}
                  >
                    <h4 className="widget-title mb-0">
                      {course.courseOwnerInfo.name}
                    </h4>
                    <p className="text-success">
                      {course.courseOwnerInfo.profession}
                    </p>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </Col>
    );
  }
}

export default CourseInformationCard;
