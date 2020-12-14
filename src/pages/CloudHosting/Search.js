// React Basic and Bootstrap
import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import Stores from '../../stores/storeIdentifier';

@inject(Stores.LocationStore)
@observer
class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: null,
            locationId: 1
        }
        this.props.locationStore.getAllLocations();
    }

    onInputChange = (e) => {
        const query = e.target.value;
        this.setState({ query })
    }

    onLocationSelect = (e) => {
        const locationId = parseInt(e.target.value);
        this.setState({ locationId });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { history } = this.props;
        const { query, locationId } = this.state;
        history.push({
            pathname: `/egitim-ara`,
            search: `?query=${query}&locationId=${locationId}`,
        })
    }

    render() {
        const data = [{ name: "NLP", }, { name: "NLP", }, { name: "NLP", }, { name: "NLP", }, { name: "NLP", }, { name: "NLP", }]
        const { locations } = this.props.locationStore;
        return (
            <React.Fragment>
                <section className="section-two bg-light">
                    <div className="container">
                        <Row className="justify-content-center">
                            <Col lg={10}>
                                <form onSubmit={this.handleSubmit} className="p-4 shadow bg-white rounded">
                                    <h4 className="mb-3">Dilediğiniz eğitimi arayın</h4>
                                    <Row>
                                        <Col>
                                            <div className="input-group form-group mb-0">
                                                <input onChange={this.onInputChange} name="name" id="name" type="text" className="form-control rounded-left" placeholder="eğitim arayın :" />
                                                <div style={{ width: "500px" }} className="input-group-append" id="button-addon4">
                                                    <select onChange={this.onLocationSelect} className="form-control rounded-0" placeholder="lokasyon" id="domain_list">
                                                        {locations.map(item => <option value={item.id} key={item.id} >{item.locationName}</option>)}
                                                    </select>
                                                    <input type="submit" id="search" ty name="search" className="searchbtn btn btn-primary btn-block" value="Ara" />
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row>
                                        {data.map(item => {
                                            return (
                                                <Col lg={2} md={4} className="col-6 mt-4">
                                                    <Link to="#" className="text-dark">
                                                        <div className="rounded shadow bg-white p-1 text-center">
                                                            <h6 className="mb-0">{item.name} <br /><span className="text-primary">$4.99</span>/year</h6>
                                                        </div>
                                                    </Link>
                                                </Col>
                                            )
                                        })}
                                    </Row>
                                </form>
                            </Col>
                        </Row>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default withRouter(Search);