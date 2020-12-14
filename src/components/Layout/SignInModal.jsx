import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Modal, Button, Form } from "react-bootstrap";
import { Row, Col, Alert } from "reactstrap";

class SignInModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        usernameOrEmail: "",
        password: ""
      }
    };
  }

  handleChange = ({ currentTarget: input }) => {
    console.log(input);
    const values = { ...this.state.values };
    values[input.id] = input.value;
    this.setState({ values });
  };

  handleSubmit = () => {
    const values = { ...this.state.values };
    const { onSubmit } = this.props;
    onSubmit(values);
  };

  render() {
    const { showAlert, onSignUp } = this.props;
    return (
      <Modal
        {...this.props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <Row className="align-items-center mt-md-5">
            <Col>
              <div className="login_page bg-white shadow rounded p-4">
                <h5 className="mb-4">Giriş Yap</h5>
                <Alert
                  color="danger"
                  isOpen={showAlert}
                  toggle={this.props.alertToggle}
                >
                  Kullanıcı adı veya şifre yanlış
                </Alert>
                <Row>
                  <Col md={12}>
                    <div className="form-group position-relative">
                      <label>
                        Kullanıcı adı veya email{" "}
                        <span className="text-danger">*</span>
                      </label>
                      <i className="mdi mdi-account ml-3 icons"></i>
                      <input
                        onChange={this.handleChange}
                        type="text"
                        className="form-control pl-5"
                        placeholder="First Name"
                        name="usernameOrEmail"
                        id="usernameOrEmail"
                        required
                      />
                    </div>
                  </Col>
                  <Col md={12}>
                    <div className="form-group position-relative">
                      <label>
                        Şifre <span className="text-danger">*</span>
                      </label>
                      <i className="mdi mdi-key ml-3 icons"></i>
                      <input
                        onChange={this.handleChange}
                        type="password"
                        className="form-control pl-5"
                        placeholder="Password"
                        name="password"
                        id="password"
                        required
                      />
                    </div>
                  </Col>
                  <Col md={12}>
                    <button
                      onClick={this.handleSubmit}
                      className="btn btn-success w-100"
                    >
                      Giriş Yap
                    </button>
                  </Col>
                  <Col lg={12} className="mt-4 text-center">
                    <h6>
                      Hesabın yok mu? Hemen{" "}
                      <Link to="#" onClick={onSignUp}>
                        {" "}
                        Kaydol{" "}
                      </Link>{" "}
                    </h6>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    );
  }
}

export default SignInModal;
