import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';

class InsuranceCatergory extends Component {
    render() {
        return (
            <Fragment>
                <div className="insurance_bg">
                    <div className="insurance_width">
                        <Container fluid>
                            <Row>
                                <Col>
                                    <h2 className="insurance_title">Looking for Business Insurance?</h2>
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={4} md={6} sm={12}>
                                    <div className="insurance_box">
                                        <div className="insurance_box_title">
                                            <h3>Small Bussines Insurance</h3>
                                        </div>
                                        <div className="isnurance_box_body">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt fugiat
                                                illo iusto magni molestias possimus quis soluta tempora vel veniam.
                                                Assumenda deserunt iusto nesciunt placeat velit?</p>

                                            <div className="insurance_learn_more_button text-center">
                                                <a href="#" className="insurance_box_button text-right">Learn
                                                    More <span><ArrowForwardIosRoundedIcon style={{
                                                        fontSize: '14px',
                                                        color: '#fff'
                                                    }}>Arrow</ArrowForwardIosRoundedIcon></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} md={6} sm={12}>
                                    <div className="insurance_box">
                                        <div className="insurance_box_title">
                                            <h3>Small Bussines Insurance</h3>
                                        </div>
                                        <div className="isnurance_box_body">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt fugiat
                                                illo iusto magni molestias possimus quis soluta tempora vel veniam.
                                                Assumenda deserunt iusto nesciunt placeat velit?</p>

                                            <div className="insurance_learn_more_button text-center">
                                                <a href="#" className="insurance_box_button text-right">Learn
                                                    More <span><ArrowForwardIosRoundedIcon style={{
                                                        fontSize: '14px',
                                                        color: '#fff'
                                                    }}>Arrow</ArrowForwardIosRoundedIcon></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} md={6} sm={12}>
                                    <div className="insurance_box">
                                        <div className="insurance_box_title">
                                            <h3>Small Bussines Insurance</h3>
                                        </div>
                                        <div className="isnurance_box_body">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt fugiat
                                                illo iusto magni molestias possimus quis soluta tempora vel veniam.
                                                Assumenda deserunt iusto nesciunt placeat velit?</p>

                                            <div className="insurance_learn_more_button text-center">
                                                <a href="#" className="insurance_box_button text-right">Learn
                                                    More <span><ArrowForwardIosRoundedIcon style={{
                                                        fontSize: '14px',
                                                        color: '#fff'
                                                    }}>Arrow</ArrowForwardIosRoundedIcon></span></a>
                                            </div>
                                        </div>
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

export default InsuranceCatergory;