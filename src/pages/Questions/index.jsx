// React Basic and Bootstrap
import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { Helmet } from "react-helmet";
import { inject, observer } from "mobx-react";
import Stores from "../../stores/storeIdentifier";
import QuestionList from "./components/questionList";

@inject(Stores.QuestionStore)
@observer
class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { questionStore } = this.props;
    questionStore.getUserQuestions();
    /*  window.addEventListener("scroll", this.scrollNavigation, true); */
  }

  componentWillUnmount() {
    /*  window.removeEventListener("scroll", this.scrollNavigation); */
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
    const { questionStore } = this.props;
    return (
      <React.Fragment>
        <Helmet title="Sorularım" />
        <section className="section">
          <div className="container">
            <Row className="border-bottom">
              <Col lg={9} md={8}>
                <div className="section-title">
                  <h4 className="title mb-2">Sorularım</h4>
                </div>
              </Col>
            </Row>
            <div class="row">
              <div class="col-8">
                <QuestionList
                  questions={questionStore.questions.result || []}
                />{" "}
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default Questions;
