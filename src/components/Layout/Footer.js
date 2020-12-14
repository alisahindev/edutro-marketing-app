import React, { Component } from "react";
import { Link } from "react-router-dom";

// import images
import americanEx from "../../images/payments/american-ex.png";
import discover from "../../images/payments/discover.png";
import masterCard from "../../images/payments/master-card.png";
import paypal from "../../images/payments/paypal.png";
import visa from "../../images/payments/visa.png";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                <Link className="logo-footer" to="#">
                  Edutro<span className="text-primary">.</span>
                </Link>
                <p className="mt-4">
                  Kişisel Gelişim Eğitmenlerini, eğitim yada etkinlik
                  arayan,satın almak isteyen kullanıcılar ile online ortamda
                  biraraya getiren pazar yeri sistemidir.
                </p>
                <ul className="list-unstyled social-icon social mb-0 mt-4">
                  <li className="list-inline-item">
                    <Link
                      to="https://www.facebook.com/Edutro-111739750386677/"
                      className="rounded mr-1"
                    >
                      <i className="mdi mdi-facebook" title="Facebook"></i>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://www.instagram.com/edutrocom/"
                      className="rounded mr-1"
                    >
                      <i className="mdi mdi-instagram" title="Instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <Link
                      to="https://twitter.com/edutrocom"
                      className="rounded"
                    >
                      <i className="mdi mdi-twitter" title="Twitter"></i>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <h4 className="text-light footer-head">Kurumsal</h4>
                <ul className="list-unstyled footer-list mt-4">
                  <li>
                    <Link to="#" className="text-foot">
                      <i className="mdi mdi-chevron-right mr-1"></i> Hakkımızda
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-foot">
                      <i className="mdi mdi-chevron-right mr-1"></i> Gizlilik
                      İlkemiz
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-foot">
                      <i className="mdi mdi-chevron-right mr-1"></i> Güvenli
                      Ödeme
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-foot">
                      <i className="mdi mdi-chevron-right mr-1"></i> Hizmet
                      Şartları
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <h4 className="text-light footer-head">Kısayollar</h4>
                <ul className="list-unstyled footer-list mt-4">
                  <li>
                    <Link to="#" className="text-foot">
                      <i className="mdi mdi-chevron-right mr-1"></i>{" "}
                      Eğitimlerimiz
                    </Link>
                  </li>
                  {/* <li>
                    <Link to="#" className="text-foot">
                      <i className="mdi mdi-chevron-right mr-1"></i> Team
                    </Link>
                  </li> */}
                  <li>
                    <Link to="#" className="text-foot">
                      <i className="mdi mdi-chevron-right mr-1"></i> Eğitmen
                      Misiniz?
                    </Link>
                  </li>
                  {/* <li>
                    <Link to="#" className="text-foot">
                      <i className="mdi mdi-chevron-right mr-1"></i> Features
                    </Link>
                  </li> */}
                  <li>
                    <Link to="#" className="text-foot">
                      <i className="mdi mdi-chevron-right mr-1"></i> SSS
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-foot">
                      <i className="mdi mdi-chevron-right mr-1"></i> Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-foot">
                      <i className="mdi mdi-chevron-right mr-1"></i> Giriş
                    </Link>
                  </li>
                  {/* <li>
                    <Link to="#" className="text-foot">
                      <i className="mdi mdi-chevron-right mr-1"></i>{" "}
                      Documentation
                    </Link>
                  </li> */}
                  {/* <li>
                    <Link to="#" className="text-foot">
                      <i className="mdi mdi-chevron-right mr-1"></i> Privacy
                      Policy
                    </Link>
                  </li> */}
                </ul>
              </div>
              <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <h4 className="text-light footer-head">E-Mail Bülteni</h4>
                <p className="mt-4">
                  Kaydolun ve en son haberleri e-posta ile alın.
                </p>
                <form>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="foot-subscribe form-group position-relative">
                        <label>
                          Mail Adresinizi Yazın{" "}
                          <span className="text-danger">*</span>
                        </label>
                        <i className="mdi mdi-email ml-3 icons"></i>
                        <input
                          type="email"
                          name="email"
                          id="emailsubscribe"
                          className="form-control pl-5 rounded"
                          placeholder="Mail Adresiniz "
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <input
                        type="submit"
                        id="submitsubscribe"
                        name="send"
                        className="btn btn-primary w-100"
                        value="Takip Et"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </footer>
        <hr />
        <footer className="footer footer-bar">
          <div className="container text-center">
            <div className="row align-items-center">
              <div className="col-sm-6">
                <div className="text-sm-left">
                  <p className="mb-0">
                    © {new Date().getFullYear()} Edutro. Tüm Hakları Saklıdır.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <ul className="list-unstyled payment-cards text-sm-right mb-0">
                  <li className="list-inline-item mr-1">
                    <Link to="#">
                      <img src={americanEx} title="American Express" alt="" />
                    </Link>
                  </li>
                  <li className="list-inline-item mr-1">
                    <Link to="#">
                      <img src={discover} title="Discover" alt="" />
                    </Link>
                  </li>
                  <li className="list-inline-item mr-1">
                    <Link to="#">
                      <img src={masterCard} title="Master Card" alt="" />
                    </Link>
                  </li>
                  <li className="list-inline-item mr-1">
                    <Link to="#">
                      <img src={paypal} title="Paypal" alt="" />
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#">
                      <img src={visa} title="Visa" alt="" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
