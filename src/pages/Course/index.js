// React Basic and Bootstrap
import React, { Component } from 'react';

import Cta from './Cta';
import Cta1 from './Cta1';
import Services from './Services';
import Testi from './Testi';
import Home from './Home';
import Search from '../CloudHosting/Search';

class Index extends Component {
    componentDidMount() {
        console.log(this.props);
        document.body.classList = "";
        document.getElementById('topnav').classList.add('bg-white');
        /*   window.addEventListener("scroll", this.scrollNavigation, true); */
    }

    // Make sure to remove the DOM listener when the component is unmounted.
    componentWillUnmount() {
        /*  window.removeEventListener("scroll", this.scrollNavigation); */
    }
    scrollNavigation = () => {
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        if (top > 80) {
            document.getElementById('topnav').classList.add('nav-sticky');
        }
        else {
            document.getElementById('topnav').classList.remove('nav-sticky');
        }
    }

    render() {

        return (
            <React.Fragment>

                <Home />

                <Search />

                <Services />

                <Cta />

                <Testi />

                <Cta1 />
            </React.Fragment>
        );
    }
}

export default Index;
