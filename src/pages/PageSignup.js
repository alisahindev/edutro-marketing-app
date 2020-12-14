// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

// import images
import signup from '../images/user/signup.png';

class PageSignup extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {
        document.getElementById("pageLoader").style.display = "block";
        setTimeout(function () { document.getElementById("pageLoader").style.display = "none"; }, 1000);
    }


    render() {

        return (
            <React.Fragment>
                <div className="back-to-home rounded d-none d-sm-block">
                    <Link to="/" className="text-white rounded d-inline-block text-center"><i className="mdi mdi-home"></i></Link>
                </div>

                <section className="bg-home">
                    <div className="home-center">
                        <div className="home-desc-center">
                            <div className="container">
                                <Row className="align-items-center">
                                    <Col lg={8} md={6}>
                                        <div className="mr-lg-5">
                                            <img src={signup} className="img-fluid" alt="" />
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                        <div className="login_page bg-white shadow rounded p-4">
                                            <div className="text-center">
                                                <h4 className="mb-4">Kayıt Ol</h4>
                                            </div>
                                            <form className="login-form">
                                                <Row>
                                                    <Col md={6}>
                                                        <div className="form-group position-relative">
                                                            <label>Adınız <span className="text-danger">*</span></label>
                                                            <i className="mdi mdi-account ml-3 icons"></i>
                                                            <input type="text" className="form-control pl-5" placeholder="First Name" name="s" required="" />
                                                        </div>
                                                    </Col>
                                                    <Col md={6}>
                                                        <div className="form-group position-relative">
                                                            <label>Soyadınız <span className="text-danger">*</span></label>
                                                            <i className="mdi mdi-account ml-3 icons"></i>
                                                            <input type="text" className="form-control pl-5" placeholder="Last Name" name="s" required="" />
                                                        </div>
                                                    </Col>
                                                    <Col md={12}>
                                                        <div className="form-group position-relative">
                                                            <label>E-Posta <span className="text-danger">*</span></label>
                                                            <i className="mdi mdi-account ml-3 icons"></i>
                                                            <input type="email" className="form-control pl-5" placeholder="Email" name="email" required="" />
                                                        </div>
                                                    </Col>
                                                    <Col md={12}>
                                                        <div className="form-group position-relative">
                                                            <label>Şifre <span className="text-danger">*</span></label>
                                                            <i className="mdi mdi-key ml-3 icons"></i>
                                                            <input type="password" className="form-control pl-5" placeholder="Password" required="" />
                                                        </div>
                                                    </Col>
                                                    <Col md={12}>
                                                        <div className="form-group">
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                                <label className="custom-control-label" htmlFor="customCheck1">Evet! Özel fırsatlar, kişisel öneriler ve öğrenme ipuçları içeren e-postalar alarak Edutro'dan en iyi şekilde yararlanmak istiyorum!</label>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col md={12}>
                                                        <button type="button" className="btn btn-primary w-100">Kayıt Ol</button>
                                                    </Col>
                                                    <Col lg={12} className="mt-4 text-center">
                                                        <p>Kaydolarak Kullanım Şartları ve Gizlilik Politikamızı kabul etmiş olursunuz.</p>
                                                    </Col>
                                                    <div className="mx-auto">
                                                        <p className="mb-0 mt-3"><small className="text-dark mr-2">Zaten bir hesabınız var mı ?</small> <Link to="giris-yap" className="text-dark font-weight-bold">Giriş Yap</Link></p>
                                                    </div>
                                                </Row>
                                            </form>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
export default PageSignup;
