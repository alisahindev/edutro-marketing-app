import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

// Layout Components
import Topbar from './Topbar';
import Footer from './Footer';


// Scroll up button
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";
import { inject, observer } from 'mobx-react';
import Stores from '../../stores/storeIdentifier';
import { Spinner } from 'react-bootstrap';
import { Container } from 'reactstrap';

@inject(Stores.AuthStore, Stores.LoaderStore)
@observer
class Layout extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.props.authStore.isLogged()
  }

  componentDidMount() {
    document.getElementById("pageLoader").style.display = "block";
    setTimeout(function () { document.getElementById("pageLoader").style.display = "none"; }, 1000);
  }

  render() {
    const { loaderStore } = this.props;
    return (loaderStore.isLoading ?
      <Container style={{ paddingTop: "20rem", textAlign: "center", verticalAlign: "middle" }} >
        <Spinner animation="grow" variant="primary" />
      </Container>
      :
      <React.Fragment>
        <Topbar />
        {this.props.children}
        <Footer />
        <div id="bottomIcon">
          <ScrollUpButton ContainerClassName="back-to-top rounded text-center" />
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Layout);
