import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import BallotRoundedIcon from '@material-ui/icons/BallotRounded';
import PaymentIcon from '@material-ui/icons/Payment';
import AssignmentIcon from '@material-ui/icons/Assignment';

class PolicyPlan extends Component {
    render() {
        return (
            <Fragment>
                <div className="policy_plan">
                    <Container fluid>
                        <Row>
                            <Col lg={4} md={6} sm={12}>
                                <div className="policy_item policy_item_1 ">
                                    <a href="#">
                                        <span>
                                          <BallotRoundedIcon style={{fontSize: '32px', color: '#206175'}}>Calculator</BallotRoundedIcon>
                                      </span>
                                        <h3>Premium Calculator</h3>
                                    </a>
                                </div>
                            </Col>
                            <Col lg={4} md={6} sm={12}>
                                <div className="policy_item policy_item_2">
                                    <a href="#">
                                        <span>
                                          <PaymentIcon style={{fontSize: '32px', color: '#b8409e'}}>Policy</PaymentIcon>
                                      </span>
                                        <h3>Policy Information</h3>
                                    </a>
                                </div>
                            </Col>
                            <Col lg={4} md={6} sm={12}>
                                <div className="policy_item policy_item_3">
                                    <a href="#"> <span>
                                          <AssignmentIcon style={{fontSize: '32px', color: '#990012'}}>Transaction</AssignmentIcon>
                                      </span>
                                        <h3>My Transaction</h3></a>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Fragment>
        );
    }
}

export default PolicyPlan;