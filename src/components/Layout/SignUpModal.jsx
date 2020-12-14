import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Modal, Button, Form } from "react-bootstrap";
import { Row, Col, Alert } from "reactstrap";

class SignUpModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        name: "",
        surname: "",
        emailAddress: "",
        username: "",
        password: "",
        phoneNumber: ""
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
    const { showAlert, onRegisterSubmit } = this.props;
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
              <Alert
                color="danger"
                isOpen={showAlert}
                toggle={this.props.alertToggle}
              >
                Kullanıcı adı veya şifre yanlış
              </Alert>
              <Row>
                <Col>
                  <div className="login_page bg-white shadow rounded p-4">
                    <div className="text-center">
                      <h4 className="mb-4">Kayıt Ol</h4>
                    </div>
                    <Row>
                      <Col md={6}>
                        <div className="form-group position-relative">
                          <label>Adınız</label>
                          <i className="mdi mdi-account ml-3 icons"></i>
                          <input
                            onChange={this.handleChange}
                            type="text"
                            className="form-control pl-5"
                            placeholder="First Name"
                            name="name"
                            id="name"
                            required=""
                          />
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="form-group position-relative">
                          <label>Soyadınız</label>
                          <i className="mdi mdi-account ml-3 icons"></i>
                          <input
                            onChange={this.handleChange}
                            type="text"
                            id="surname"
                            className="form-control pl-5"
                            placeholder="Last Name"
                            name="surname"
                            required=""
                          />
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="form-group position-relative">
                          <label>
                            E-Posta <span className="text-danger">*</span>
                          </label>
                          <i className="mdi mdi-account ml-3 icons"></i>
                          <input
                            onChange={this.handleChange}
                            type="email"
                            id="emailAddress"
                            className="form-control pl-5"
                            placeholder="Email"
                            name="emailAddress"
                            required=""
                          />
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="form-group position-relative">
                          <label>
                            Kullanıcı Adı <span className="text-danger">*</span>
                          </label>
                          <i className="mdi mdi-account ml-3 icons"></i>
                          <input
                            onChange={this.handleChange}
                            type="text"
                            id="username"
                            className="form-control pl-5"
                            placeholder="Username"
                            name="username"
                            required=""
                          />
                        </div>
                      </Col>
                      <Col md={12}>
                        <div className="form-group position-relative">
                          <label>
                            Telefon <span className="text-danger">*</span>
                          </label>
                          <i className="mdi mdi-phone ml-3 icons"></i>
                          <input
                            onChange={this.handleChange}
                            type="tel"
                            id="phoneNumber"
                            className="form-control pl-5"
                            placeholder="Sürecinizin hızlı işlemesi için önerilir"
                            name="phoneNumber"
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
                            id="password"
                            className="form-control pl-5"
                            placeholder="Password"
                            name="password"
                            required=""
                          />
                        </div>
                      </Col>
                      <Col md={12}>
                        <div className="form-group">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck1"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck1"
                            >
                              Evet! Özel fırsatlar, kişisel öneriler ve öğrenme
                              ipuçları içeren e-postalar alarak Edutro'dan en
                              iyi şekilde yararlanmak istiyorum!
                            </label>
                          </div>
                        </div>
                      </Col>
                      <Col md={12}>
                        <button
                          onClick={this.handleSubmit}
                          type="button"
                          className="btn btn-primary w-100"
                        >
                          Kayıt Ol
                        </button>
                      </Col>
                      <Col lg={12} className="mt-4 text-center">
                        <p>
                          Kaydolarak Kullanım Şartları ve Gizlilik Politikamızı
                          kabul etmiş olursunuz.
                        </p>
                      </Col>
                      <div className="mx-auto">
                        <p className="mb-0 mt-3">
                          <small className="text-dark mr-2">
                            Zaten bir hesabınız var mı ?
                          </small>{" "}
                          <Link
                            to="giris-yap"
                            className="text-dark font-weight-bold"
                          >
                            Giriş Yap
                          </Link>
                        </p>
                      </div>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    );
  }
}

export default SignUpModal;
