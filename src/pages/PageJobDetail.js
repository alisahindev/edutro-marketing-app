// React Basic and Bootstrap
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Row, Col } from "reactstrap";
import CourseHeader from "./CourseHeader";
import CourseInformationCard from "./CourseInformationCard";
import WhatYouGet from "./WhatYouGet";
import Requirements from "./Requirements";
import { Helmet } from "react-helmet";
import QuestionModal from "../components/Shared/QuestionModal";
import ApplyModal from "../components/Shared/ApplyModal";
import { inject, observer } from "mobx-react";
import Stores from "../stores/storeIdentifier";
import SignInModal from "../components/Layout/SignInModal";
import SignUpModal from "../components/Layout/SignUpModal";
import { readLocalStorage } from "../helpers";

@inject(Stores.CourseStore, Stores.QuestionStore, Stores.LoaderStore)
@observer
class PageJobDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      applyVisible: false,
      signInModalVisible: false,
      signUpModalVisible: false,
      showAlert: false,
    };
  }

  componentDidMount() {
    const { location: { state: { courseId } = {} } = {}, } = this.props;
    this.props.courseStore.getCourseById(courseId);
    /* window.addEventListener("scroll", this.scrollNavigation, true); */
  }

  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    /* window.removeEventListener("scroll", this.scrollNavigation); */
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

  questionShowModal = () => {
    const token = readLocalStorage('token');
    token ? this.setState({ visible: true }) : this.setState({ signInModalVisible: true })
  };

  questionHandleCancel = () => {
    this.setState({ visible: false });
  };

  applyShowModal = () => {
    this.setState({ applyVisible: true });
  };

  applyHandleCancel = () => {
    this.setState({ applyVisible: false });
  };

  onQuestionSend = async (payload) => {
    const { loaderStore, history } = this.props;
    loaderStore.setLoader();
    const { questionStore, courseStore } = this.props;
    payload.entityId = courseStore.course.courseOwnerInfo.id
    await questionStore.createQuestion(payload);
    loaderStore.setLoader();
    history.push('/sorularim')
  }

  onLoginSubmit = async (payload) => {
    const { authStore } = this.props;
    const result = await authStore.auth(payload);
    if (result.data.token) {
      this.setState({ signInModalVisible: false });
    } else {
      this.setState({ showAlert: true })
    }
  }

  onRegisterSubmit = (payload) => {
    const { authStore } = this.props;
    authStore.register(payload);
    this.setState({ signUpModalVisible: false })
  }

  render() {

    const { course } = this.props.courseStore;
    const { signInModalVisible, signUpModalVisible } = this.state;
    return (
      <React.Fragment>
        <Helmet title={course.title} />
        <CourseHeader locationName={course.locationName} address={course.address} shortDescription={course.shortDescription} title={course.title} />
        <section className="section">
          <div className="container">
            <Row>
              <CourseInformationCard course={course} />
              <Col lg={8} md={7} className="col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="ml-lg-4">
                  <h5>Neler Öğreneceksiniz: </h5>
                  <WhatYouGet whatYouGet={course.teachings} />

                  <h5 className="mt-4">Gereksinimler: </h5>
                  <Requirements requirements={course.requirements} />

                  <h5 className="mt-4">
                    Açıklama:
                  </h5>
                  <p dangerouslySetInnerHTML={{ __html: course.description }} className="text-muted">
                    {/* {course.description} */}
                  </p>

                  <div className="mt-4">
                    <Link onClick={this.applyShowModal} className="btn btn-outline-primary" to="#" >
                      Hemen Başvur <i className="mdi mdi-send"></i>
                    </Link>
                  </div>
                  <div className="mt-4">
                    <Link onClick={this.questionShowModal} className="btn btn-outline-primary" to="#" >
                      Soru Sor <i className="mdi mdi-send"></i>
                    </Link>
                  </div>
                </div>
                <ApplyModal
                  show={this.state.applyVisible} onHide={this.applyHandleCancel} />
                <QuestionModal
                  show={this.state.visible} onSubmit={this.onQuestionSend} onHide={this.questionHandleCancel}
                />
              </Col>
            </Row>
          </div>
        </section>
        <SignInModal
          onSignUp={() => this.setState({ signInModalVisible: false, signUpModalVisible: true })}
          alertToggle={() => this.setState({ showAlert: false })}
          showAlert={this.state.showAlert} show={signInModalVisible}
          onSubmit={this.onLoginSubmit}
          onHide={() => this.setState({ signInModalVisible: false })} />
        <SignUpModal
          showAlert={false}
          show={signUpModalVisible}
          onHide={() => this.setState({ signUpModalVisible: false })}
          onSubmit={this.onRegisterSubmit}
        />
      </React.Fragment>
    );
  }
}
export default withRouter(PageJobDetail);
