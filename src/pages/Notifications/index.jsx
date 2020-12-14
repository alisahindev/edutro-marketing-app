// React Basic and Bootstrap
import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { Helmet } from "react-helmet";
import { inject, observer } from "mobx-react";
import Stores from "../../stores/storeIdentifier";
import { NotificationCard } from "../../components/Shared/NotificationCard";

@inject(Stores.DashboardStore)
@observer
class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollNavigation, true);
  }
  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation);
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
    const data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    return (
      <React.Fragment>
        <Helmet title="Bildirimler" />
        <section className="section">
          <div className="container">
            <Row className="border-bottom">
              <Col lg={9} md={8}>
                <div className="section-title">
                  <h4 className="title mb-2">Bildirimler</h4>
                </div>
              </Col>
            </Row>
            <Row>
              {data.map(item => {
                return (
                  <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <NotificationCard />
                  </Col>
                );
              })}
            </Row>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default Notifications;
