import React, {Component, Fragment} from 'react';
import { Col, Container, Row} from "react-bootstrap";

class CallToAction extends Component {
    render() {


        return (
            <Fragment>
                <div className="call_to_action">
                    <div className="section_width">
                        <Container>
                            <Row>
                                <Col lg={4} md={6} sm={12} className="offset-md-5 offset-lg-8">
                                    <h2 className="call_to_action_title">Get an instant quote from Dhaka leading insurers now.</h2>
                                    <div className="call_action_item">
                                        <select id="cars">
                                        <optgroup label="Select Years">
                                            <option value="volvo">Year</option>
                                            <option value="saab">2010</option>
                                            <option value="saab">2011</option>
                                            <option value="saab">2012</option>
                                        </optgroup>
                                    </select>
                                        <select id="cars">
                                            <optgroup label="Select Years">
                                                <option value="volvo">Brand</option>
                                                <option value="saab">Brand4</option>
                                                <option value="saab">Brand2</option>
                                                <option value="saab">Brand3</option>
                                            </optgroup>
                                        </select>
                                        <select id="cars">
                                            <optgroup label="Select Years">
                                                <option value="volvo">Model</option>
                                                <option value="saab">Model4</option>
                                                <option value="saab">Model2</option>
                                                <option value="saab">Model3</option>
                                            </optgroup>
                                        </select>
                                        <select id="cars">
                                            <optgroup label="Select Years">
                                                <option value="volvo">Submodel</option>
                                                <option value="saab">Submodel2</option>
                                                <option value="saab">Submodel3</option>
                                                <option value="saab">Submodel4</option>
                                            </optgroup>
                                        </select>
                                        <input type="text" placeholder="Name"/>
                                        <input type="text" placeholder="Phone"/>
                                        <input type="email" placeholder="Email"/>
                                        <button type="submit">Get Quotes Now</button>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default CallToAction;