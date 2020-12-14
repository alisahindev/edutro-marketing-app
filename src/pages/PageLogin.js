// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

// import images
import loginImg from '../images/user/login.png';

class PageLogin extends Component {

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
                                            <img src={loginImg} className="img-fluid" alt="" />
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                        <div className="login-page bg-white shadow rounded p-4">
                                            <div className="text-center">
                                                <h4 className="mb-4">Giriş Yap</h4>
                                            </div>
                                            <form className="login-form">
                                                <Row>
                                                    <Col lg={12}>
                                                        <div className="form-group position-relative">
                                                            <label>E-Posta <span className="text-danger">*</span></label>
                                                            <i className="mdi mdi-account ml-3 icons"></i>
                                                            <input type="email" className="form-control pl-5" placeholder="Email" name="email" required="" />
                                                        </div>
                                                    </Col>

                                                    <Col lg={12}>
                                                        <div className="form-group position-relative">
                                                            <label>Şifre <span className="text-danger">*</span></label>
                                                            <i className="mdi mdi-key ml-3 icons"></i>
                                                            <input type="password" className="form-control pl-5" placeholder="Password" required="" />
                                                        </div>
                                                    </Col>

                                                    <Col lg={12}>
                                                        <p className="float-right forgot-pass"><Link to="page-recovery-password" className="text-dark font-weight-bold">Şifremi unuttum ?</Link></p>
                                                    </Col>
                                                    <Col lg={12} className="mb-0">
                                                        <button type="button" className="btn btn-primary w-100">Giriş Yap</button>
                                                    </Col>

                                                    <div className="col-12 text-center">
                                                        <p className="mb-0 mt-3"><small className="text-dark mr-2">Hesabınız yok mu ?</small> <Link to="kayit-ol" className="text-dark font-weight-bold">Kayıt ol</Link></p>
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
export default PageLogin;