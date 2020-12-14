import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { Alert } from 'reactstrap';
import logo from "../../images/edutro.png";
import SignInModal from "./SignInModal";
import { inject, observer } from "mobx-react";
import Stores from "../../stores/storeIdentifier";
import { ProfileMenu } from "./ProfileMenu";
import SignUpModal from "./SignUpModal";

@inject(Stores.AuthStore)
@observer
class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      page: false,
      landing: false,
      docs: false,
      new: false,
      utility: false,
      user: false,
      work: false,
      blog: false,
      carr: false,
      signInModalVisible: false,
      signUpModalVisible: false,
      showAlert: false,
      isLogged: false
    };
    this.toggleLine = this.toggleLine.bind(this);
  }

  toggleLine() {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }

  componentDidMount() {
    var matchingMenuItem = null;
    var ul = document.getElementById("top-menu");
    var items = ul.getElementsByTagName("a");
    for (var i = 0; i < items.length; ++i) {
      if (this.props.location.pathname === items[i].pathname) {
        matchingMenuItem = items[i];
        break;
      }
    }
    if (matchingMenuItem) {
      this.activateParentDropdown(matchingMenuItem);
    }
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

  activateParentDropdown = item => {
    const parent = item.parentElement;
    if (parent) {
      parent.classList.add("active"); // li
      const parent1 = parent.parentElement;
      parent1.classList.add("active"); // li
      if (parent1) {
        const parent2 = parent1.parentElement;
        parent2.classList.add("active"); // li
        if (parent2) {
          const parent3 = parent2.parentElement;
          parent3.classList.add("active"); // li
          if (parent3) {
            const parent4 = parent3.parentElement;
            parent4.classList.add("active"); // li
          }
        }
      }
    }
  };

  logOut = () => {
    const { authStore } = this.props;
    authStore.logOut()
    authStore.isLogged()
  }

  onRegisterSubmit = (payload) => {
    const { authStore } = this.props;
    authStore.register(payload);
    this.setState({ signUpModalVisible: false })
  }

  render() {
    const { signInModalVisible, signUpModalVisible } = this.state;
    const { authStore } = this.props;
    return (
      <React.Fragment>
        <header id="topnav" className="defaultscroll sticky">
          <div className="container">
            <div>
              <Link className="logo" to="/">
                <img style={{ height: "40px" }} src={logo} />
              </Link>
            </div>
            <div className="buy-button">
              {
                authStore.token ? <ProfileMenu logOut={this.logOut} /> :
                  <Link to="#" onClick={() => this.setState({ signInModalVisible: true })} className="btn btn-primary">
                    Giriş Yap
              </Link>
              }

            </div>
            <div className="menu-extras">
              <div className="menu-item">
                <Link
                  to="#"
                  onClick={this.toggleLine}
                  className={
                    this.state.isOpen ? "navbar-toggle open" : "navbar-toggle"
                  }
                >
                  <div className="lines">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </Link>
              </div>
            </div>

            <div
              id="navigation"
              style={{ display: this.state.isOpen ? "block" : "none" }}
            >
              <ul className="navigation-menu" id="top-menu">
                <li>
                  <Link to="/">Ana Sayfa</Link>
                </li>
                <li>
                  <Link to="/egitimler">Eğitimler</Link>
                </li>
                <li>
                  <Link to="/page-blog-sidebar">Blog</Link>
                </li>
              </ul>
            </div>
          </div>
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
        </header>
      </React.Fragment>
    );
  }
}

export default withRouter(Topbar);
