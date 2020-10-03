import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import AwardIcon from '../../assets/images/awards/award_icon.png';
import AwardImg_1 from '../../assets/images/awards/award_1.jpg';
import AwardImg_2 from '../../assets/images/awards/award_2.jpg';
import AwardImg_3 from '../../assets/images/awards/award_3.jpg';


class Awards extends Component {
    render() {
        return (
            <Fragment>
                <div className="award_section">
                    <div className="awards_section_width">
                        <Container fluid>
                            <Row>
                                <Col>
                                    <div className="award_title">
                                        <h2>Awards & Recognitions</h2>
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={4} md={6} sm={12}>
                                    <div className="award_box">
                                        <img src={AwardIcon} className="award_icon" alt="Award Icon"/>
                                        <img className="awar_imag" src={AwardImg_1} alt="Award Image"/>
                                        <h4>ICT Award 2010 - Best in UI</h4>
                                    </div>
                                </Col>
                                <Col lg={4} md={6} sm={12}>
                                    <div className="award_box">
                                        <img src={AwardIcon} className="award_icon" alt="Award Icon"/>
                                        <img className="awar_imag" src={AwardImg_2} alt="Award Image"/>
                                        <h4>ICT Award 2009 - Web Award</h4>
                                    </div>
                                </Col>
                                <Col lg={4} md={6} sm={12}>
                                    <div className="award_box">
                                        <img src={AwardIcon} className="award_icon" alt="Award Icon"/>
                                        <img className="awar_imag" src={AwardImg_3} alt="Award Image"/>
                                        <h4>ICT Award 2020 - App Award</h4>
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

export default Awards;