import React, {Component, Fragment} from 'react';
import {Col, Container, Nav, Row, Tab} from "react-bootstrap";
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import FamilyPlanImg from '../../assets/images/family-plan.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class OurProducts extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 1000,
            lazyLoad: true,
            arrows: true,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };


        return (
            <Fragment>
                <div id="product_section" className="our_product_section">
                    <div className="section_width">
                        <Container fluid>
                            <Row>
                                <Col>
                                    <div className="product_top">
                                        <h2><span>Our</span> Products</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus deserunt
                                            facere fuga maiores non, nostrum officiis possimus qui quidem rerum?</p>
                                    </div>
                                </Col>
                            </Row>

                            <div className="policy_body_wrapper">
                                <Row>
                                    <Col lg={8} md={12}>
                                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                            <Row>
                                                <Col sm={3}>
                                                    <Nav variant="pills" className="flex-column policy_menu">
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="first">Savings</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="second">Early Cash</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="third">Children</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="fourth">Retirement</Nav.Link>
                                                        </Nav.Item>
                                                    </Nav>
                                                </Col>
                                                <Col sm={9}>
                                                    <Tab.Content>
                                                        <Tab.Pane eventKey="first">
                                                            <Slider {...settings}>
                                                                <div className="policy_slider_wrapper_1">
                                                                    <Row>
                                                                        <Col lg={12}>
                                                                            <div className="sanchay">
                                                                                <h2>Shancay</h2>
                                                                                <p>
                                                                                    Lorem ipsum dolor sit amet,
                                                                                    consectetur adipisicing elit.
                                                                                    Accusantium consequuntur deleniti
                                                                                    dignissimos dolorum ea est expedita
                                                                                    fugit illum inventore itaque labore,
                                                                                    laborum maiores modi molestias
                                                                                    necessitatibus nihil, nobis nulla
                                                                                    numquam officia
                                                                                </p>
                                                                                <a href="#"
                                                                                   className="shancay_details">Details <ArrowForwardIosRoundedIcon
                                                                                    style={{fontSize: '20px'}}>Arrow
                                                                                    Right</ArrowForwardIosRoundedIcon></a>
                                                                            </div>
                                                                        </Col>
                                                                    </Row>

                                                                    <Row>
                                                                        <Col lg={6} sm={12}>
                                                                            <div className="sanchay_button">
                                                                                <span><a href="#">Calculate Premium</a></span>
                                                                            </div>
                                                                        </Col>
                                                                        <Col lg={6} sm={12}>
                                                                            <div className="sanchay_button">
                                                                                <span><a href="#">Book an appoinment</a></span>
                                                                            </div>
                                                                        </Col>
                                                                    </Row>
                                                                </div>{/*policy_slider_wrapper_1*/}
                                                                <div className="policy_slider_wrapper_1">
                                                                    <Row>
                                                                        <Col lg={12}>
                                                                            <div className="sanchay">
                                                                                <h2>Shancay</h2>
                                                                                <p>
                                                                                    Lorem ipsum dolor sit amet,
                                                                                    consectetur adipisicing elit.
                                                                                    Accusantium consequuntur deleniti
                                                                                    dignissimos dolorum ea est expedita
                                                                                    fugit illum inventore itaque labore,
                                                                                    laborum maiores modi molestias
                                                                                    necessitatibus nihil, nobis nulla
                                                                                    numquam officia
                                                                                </p>
                                                                                <a href="#"
                                                                                   className="shancay_details">Details <ArrowForwardIosRoundedIcon
                                                                                    style={{fontSize: '20px'}}>Arrow
                                                                                    Right</ArrowForwardIosRoundedIcon></a>
                                                                            </div>
                                                                        </Col>
                                                                    </Row>

                                                                    <Row>
                                                                        <Col lg={6} sm={12}>
                                                                            <div className="sanchay_button">
                                                                                <span><a href="#">Calculate Premium</a></span>
                                                                            </div>
                                                                        </Col>
                                                                        <Col lg={6} sm={12}>
                                                                            <div className="sanchay_button">
                                                                                <span><a href="#">Book an appoinment</a></span>
                                                                            </div>
                                                                        </Col>
                                                                    </Row>
                                                                </div>{/*policy_slider_wrapper_1*/}
                                                            </Slider>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="second">
                                                            <Slider {...settings}>
                                                                <div className="policy_slider_wrapper_1">
                                                                    <Row>
                                                                        <Col lg={12}>
                                                                            <div className="sanchay">
                                                                                <h2>Shancay</h2>
                                                                                <p>
                                                                                    Lorem ipsum dolor sit amet,
                                                                                    consectetur adipisicing elit.
                                                                                    Accusantium consequuntur deleniti
                                                                                    dignissimos dolorum ea est expedita
                                                                                    fugit illum inventore itaque labore,
                                                                                    laborum maiores modi molestias
                                                                                    necessitatibus nihil, nobis nulla
                                                                                    numquam officia
                                                                                </p>
                                                                                <a href="#"
                                                                                   className="shancay_details">Details <ArrowForwardIosRoundedIcon
                                                                                    style={{fontSize: '20px'}}>Arrow
                                                                                    Right</ArrowForwardIosRoundedIcon></a>
                                                                            </div>
                                                                        </Col>
                                                                    </Row>

                                                                    <Row>
                                                                        <Col lg={6} sm={12}>
                                                                            <div className="sanchay_button">
                                                                                <span><a href="#">Calculate Premium</a></span>
                                                                            </div>
                                                                        </Col>
                                                                        <Col lg={6} sm={12}>
                                                                            <div className="sanchay_button">
                                                                                <span><a href="#">Book an appoinment</a></span>
                                                                            </div>
                                                                        </Col>
                                                                    </Row>
                                                                </div>{/*policy_slider_wrapper_1*/}
                                                                <div className="policy_slider_wrapper_1">
                                                                    <Row>
                                                                        <Col lg={12}>
                                                                            <div className="sanchay">
                                                                                <h2>Shancay</h2>
                                                                                <p>
                                                                                    Lorem ipsum dolor sit amet,
                                                                                    consectetur adipisicing elit.
                                                                                    Accusantium consequuntur deleniti
                                                                                    dignissimos dolorum ea est expedita
                                                                                    fugit illum inventore itaque labore,
                                                                                    laborum maiores modi molestias
                                                                                    necessitatibus nihil, nobis nulla
                                                                                    numquam officia
                                                                                </p>
                                                                                <a href="#"
                                                                                   className="shancay_details">Details <ArrowForwardIosRoundedIcon
                                                                                    style={{fontSize: '20px'}}>Arrow
                                                                                    Right</ArrowForwardIosRoundedIcon></a>
                                                                            </div>
                                                                        </Col>
                                                                    </Row>

                                                                    <Row>
                                                                        <Col lg={6} sm={12}>
                                                                            <div className="sanchay_button">
                                                                                <span><a href="#">Calculate Premium</a></span>
                                                                            </div>
                                                                        </Col>
                                                                        <Col lg={6} sm={12}>
                                                                            <div className="sanchay_button">
                                                                                <span><a href="#">Book an appoinment</a></span>
                                                                            </div>
                                                                        </Col>
                                                                    </Row>
                                                                </div>{/*policy_slider_wrapper_1*/}
                                                            </Slider>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="third">
                                                            <Slider {...settings}>
                                                                <div className="policy_slider_wrapper_1">
                                                                    <Row>
                                                                        <Col lg={12}>
                                                                            <div className="sanchay">
                                                                                <h2>Shancay</h2>
                                                                                <p>
                                                                                    Lorem ipsum dolor sit amet,
                                                                                    consectetur adipisicing elit.
                                                                                    Accusantium consequuntur deleniti
                                                                                    dignissimos dolorum ea est expedita
                                                                                    fugit illum inventore itaque labore,
                                                                                    laborum maiores modi molestias
                                                                                    necessitatibus nihil, nobis nulla
                                                                                    numquam officia
                                                                                </p>
                                                                                <a href="#"
                                                                                   className="shancay_details">Details <ArrowForwardIosRoundedIcon
                                                                                    style={{fontSize: '20px'}}>Arrow
                                                                                    Right</ArrowForwardIosRoundedIcon></a>
                                                                            </div>
                                                                        </Col>
                                                                    </Row>

                                                                    <Row>
                                                                        <Col lg={6} sm={12}>
                                                                            <div className="sanchay_button">
                                                                                <span><a href="#">Calculate Premium</a></span>
                                                                            </div>
                                                                        </Col>
                                                                        <Col lg={6} sm={12}>
                                                                            <div className="sanchay_button">
                                                                                <span><a href="#">Book an appoinment</a></span>
                                                                            </div>
                                                                        </Col>
                                                                    </Row>
                                                                </div>{/*policy_slider_wrapper_1*/}
                                                                <div className="policy_slider_wrapper_1">
                                                                    <Row>
                                                                        <Col lg={12}>
                                                                            <div className="sanchay">
                                                                                <h2>Shancay</h2>
                                                                                <p>
                                                                                    Lorem ipsum dolor sit amet,
                                                                                    consectetur adipisicing elit.
                                                                                    Accusantium consequuntur deleniti
                                                                                    dignissimos dolorum ea est expedita
                                                                                    fugit illum inventore itaque labore,
                                                                                    laborum maiores modi molestias
                                                                                    necessitatibus nihil, nobis nulla
                                                                                    numquam officia
                                                                                </p>
                                                                                <a href="#"
                                                                                   className="shancay_details">Details <ArrowForwardIosRoundedIcon
                                                                                    style={{fontSize: '20px'}}>Arrow
                                                                                    Right</ArrowForwardIosRoundedIcon></a>
                                                                            </div>
                                                                        </Col>
                                                                    </Row>

                                                                    <Row>
                                                                        <Col lg={6} sm={12}>
                                                                            <div className="sanchay_button">
                                                                                <span><a href="#">Calculate Premium</a></span>
                                                                            </div>
                                                                        </Col>
                                                                        <Col lg={6} sm={12}>
                                                                            <div className="sanchay_button">
                                                                                <span><a href="#">Book an appoinment</a></span>
                                                                            </div>
                                                                        </Col>
                                                                    </Row>
                                                                </div>{/*policy_slider_wrapper_1*/}
                                                            </Slider>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="fourth">
                                                            <Slider {...settings}>
                                                                <div className="policy_slider_wrapper_1">
                                                                    <Row>
                                                                        <Col lg={12}>
                                                                            <div className="sanchay">
                                                                                <h2>Shancay</h2>
                                                                                <p>
                                                                                    Lorem ipsum dolor sit amet,
                                                                                    consectetur adipisicing elit.
                                                                                    Accusantium consequuntur deleniti
                                                                                    dignissimos dolorum ea est expedita
                                                                                    fugit illum inventore itaque labore,
                                                                                    laborum maiores modi molestias
                                                                                    necessitatibus nihil, nobis nulla
                                                                                    numquam officia
                                                                                </p>
                                                                                <a href="#"
                                                                                   className="shancay_details">Details <ArrowForwardIosRoundedIcon
                                                                                    style={{fontSize: '20px'}}>Arrow
                                                                                    Right</ArrowForwardIosRoundedIcon></a>
                                                                            </div>
                                                                        </Col>
                                                                    </Row>

                                                                    <Row>
                                                                        <Col lg={6} sm={12}>
                                                                            <div className="sanchay_button">
                                                                                <span><a href="#">Calculate Premium</a></span>
                                                                            </div>
                                                                        </Col>
                                                                        <Col lg={6} sm={12}>
                                                                            <div className="sanchay_button">
                                                                                <span><a href="#">Book an appoinment</a></span>
                                                                            </div>
                                                                        </Col>
                                                                    </Row>
                                                                </div>{/*policy_slider_wrapper_1*/}
                                                                <div className="policy_slider_wrapper_1">
                                                                    <Row>
                                                                        <Col lg={12}>
                                                                            <div className="sanchay">
                                                                                <h2>Shancay</h2>
                                                                                <p>
                                                                                    Lorem ipsum dolor sit amet,
                                                                                    consectetur adipisicing elit.
                                                                                    Accusantium consequuntur deleniti
                                                                                    dignissimos dolorum ea est expedita
                                                                                    fugit illum inventore itaque labore,
                                                                                    laborum maiores modi molestias
                                                                                    necessitatibus nihil, nobis nulla
                                                                                    numquam officia
                                                                                </p>
                                                                                <a href="#"
                                                                                   className="shancay_details">Details <ArrowForwardIosRoundedIcon
                                                                                    style={{fontSize: '20px'}}>Arrow
                                                                                    Right</ArrowForwardIosRoundedIcon></a>
                                                                            </div>
                                                                        </Col>
                                                                    </Row>

                                                                    <Row>
                                                                        <Col lg={6} sm={12}>
                                                                            <div className="sanchay_button">
                                                                                <span><a href="#">Calculate Premium</a></span>
                                                                            </div>
                                                                        </Col>
                                                                        <Col lg={6} sm={12}>
                                                                            <div className="sanchay_button">
                                                                                <span><a href="#">Book an appoinment</a></span>
                                                                            </div>
                                                                        </Col>
                                                                    </Row>
                                                                </div>{/*policy_slider_wrapper_1*/}
                                                            </Slider>
                                                        </Tab.Pane>
                                                    </Tab.Content>
                                                </Col>
                                            </Row>

                                        </Tab.Container>
                                    </Col>
                                    <Col lg={4} md={12}>
                                        <img src={FamilyPlanImg} alt="Family Plan"/>
                                    </Col>
                                </Row>
                            </div>
                            {/*policy_body_wrapper end*/}

                            <Row>
                                <Col>
                                    <div className="w-100 text-center">
                                        <a className="view_all_button" href="#">View All</a>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </Fragment>
        )
            ;
    }
}

export default OurProducts;