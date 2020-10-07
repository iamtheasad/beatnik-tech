import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import AssignmentIcon from '@material-ui/icons/Assignment';
import BallotIcon from '@material-ui/icons/Ballot';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';


class Services extends Component {
    render() {
        return (
            <Fragment>
                <div id="service_section" className="services_custom_width">
                    <Container fluid>
                        <Row>
                            <Col lg={4} md={5} sm={12}>
                                <div className="advice_box">
                                    <h2>Need Advice? askSage, Our digital advisor.</h2>
                                    <span><AccountCircleOutlinedIcon
                                        style={{fontSize: '60px'}}>Advisor</AccountCircleOutlinedIcon></span>
                                    <div className="advice_button">
                                        <a href="#">Find a Life Insurance Plan</a>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={8} md={7} sm={12}>
                                <div className="service_box">
                                    <div className="service_box_title">
                                        <h2>What would you like to do?</h2>
                                    </div>
                                    <div className="all_services">
                                        <div className="service_item">
                                            <span><BallotIcon style={{fontSize: '60px'}}>Service</BallotIcon></span>
                                            <a>Update my particulars <span><ArrowForwardIosOutlinedIcon
                                                style={{fontSize: '14px'}}>Arrow</ArrowForwardIosOutlinedIcon></span></a>
                                        </div>
                                        <div className="service_item">
                                            <span><AssignmentIcon
                                                style={{fontSize: '60px'}}>Service</AssignmentIcon></span>
                                            <a>Update my particulars <span><ArrowForwardIosOutlinedIcon
                                                style={{fontSize: '14px'}}>Arrow</ArrowForwardIosOutlinedIcon></span></a>
                                        </div>
                                        <div className="service_item">
                                            <span><PermIdentityIcon
                                                style={{fontSize: '60px'}}>Man</PermIdentityIcon></span>
                                            <a>Update my particulars <span>
                                                <ArrowForwardIosOutlinedIcon
                                                    style={{fontSize: '14px'}}>Arrow</ArrowForwardIosOutlinedIcon></span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="services_button">
                                        <a href="#">View all online services</a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Fragment>
        );
    }
}

export default Services;