import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Row, Col } from "reactstrap";
import { Helmet } from "react-helmet";
import Stores from "../../../stores/storeIdentifier";
import { observer, inject } from "mobx-react";
import AnswerCollapse from "./answerCollapse";
import moment from "moment";

@inject(Stores.QuestionStore)
@observer
class QuestionDetail extends Component {
  state = {
    description: "",
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    const { questionStore } = this.props;
    questionStore.getQuestionDetail(id);
  }

  onInputChange = (e) => {
    const desc = e.target.value;
    this.setState((prevState, props) => {
      return { description: desc };
    });
  };

  handleSubmit = () => {
    const { questionStore } = this.props;
    const { selectedQuestion } = questionStore;
    const values = {};
    values.description = this.state.description;
    values.questionId = selectedQuestion.id;
    values.entityType = 30;
    questionStore.createAnswer(values);
    this.setState({ description: "" });
  };

  render() {
    const { selectedQuestion } = this.props.questionStore;
    return (
      <React.Fragment>
        <Helmet title="Sorularım" />
        <section className="section">
          <div className="container">
            <Row className="border-bottom">
              <Col lg={9} md={8}>
                <div className="section-title">
                  <h4 className="title mb-2">
                    {selectedQuestion.title +
                      " - " +
                      moment(selectedQuestion.createdDate).format("LL")}
                  </h4>
                </div>
              </Col>
            </Row>
            <div className="row">
              <div className="col-12">
                <AnswerCollapse
                  title={selectedQuestion.title || ""}
                  description={selectedQuestion.description}
                  createdDate={selectedQuestion.createdDate}
                  entityType={30}
                />
              </div>
              {selectedQuestion &&
                selectedQuestion.answers &&
                selectedQuestion.answers.map((answer) => {
                  return (
                    <div key={answer.id} className="col-12">
                      <AnswerCollapse
                        id={answer.id}
                        createdDate={answer.createdDate}
                        receiver={selectedQuestion.questionReceiver}
                        receiverImg={
                          (answer &&
                            answer.questionReceiver &&
                            answer.questionReceiver.imagePath &&
                            selectedQuestion.questionReceiver.imagePath) ||
                          ""
                        }
                        entityType={answer.entityType}
                        description={answer.description}
                      />
                    </div>
                  );
                })}
            </div>
            <div style={{ marginTop: 10 }} class="form-group">
              <label for="description">Cevap Yazın</label>
              <textarea
                onChange={this.onInputChange}
                class="form-control"
                id="description"
                value={this.state.description}
                rows="3"
              ></textarea>
            </div>
            <button
              onClick={this.handleSubmit}
              style={{ float: "right" }}
              class="btn btn-primary"
            >
              Gönder
            </button>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default withRouter(QuestionDetail);
