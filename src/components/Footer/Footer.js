import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Logo from '../../assets/images/logo.png';
import CallIcon from '@material-ui/icons/Call';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import DuoRoundedIcon from '@material-ui/icons/DuoRounded';
import IconButton from "@material-ui/core/IconButton";

class Footer extends Component {
    render() {
        const socialColor = 'red';
        const socialHover = 'green';
        return (
            <Fragment>
                <div className="footer_section">
                    <div className="services_custom_width">
                        <Container fluid>
                            <Row className="footer_wrapper">
                                <Col lg={4}>
                                    <img className="footer_logo" src={Logo} alt="Footer Logo"/>
                                    <div className="footer_contact">
                                        <strong>
                                            <CallIcon style={{fontSize: "30px", color: "#fff"}}>Call</CallIcon>
                                        </strong> <span>1234</span>

                                        <div className="recent_border footer_border"></div>

                                        <div className="footer_social">

                                            <a href="https://line.me/en/"
                                               target="_blank">
                                                <FacebookIcon
                                                    style={{fontSize: '30px', color: '#666666'}}>Line</FacebookIcon>
                                            </a>
                                            <a href="https://line.me/en/"
                                               target="_blank">
                                                <DuoRoundedIcon
                                                    style={{fontSize: '30px', color: '#666666'}}>Line</DuoRoundedIcon>
                                            </a>
                                            <a href="https://twitter.com/"
                                               target="_blank">
                                                <TwitterIcon
                                                    style={{fontSize: '30px', color: '#666666'}}>Twitter</TwitterIcon>
                                            </a>
                                            <a href="https://www.youtube.com/"
                                               target="_blank">
                                                <YouTubeIcon
                                                    style={{fontSize: '30px', color: '#666666'}}>Youtube</YouTubeIcon>
                                            </a>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={8}>
                                    <Row>
                                        <Col lg={3} md={6} sm={12}>
                                            <div className="footer_menu">
                                                <ul>
                                                    <li className="footer_menu_title">Products</li>
                                                    <li>
                                                        <a href="#">Health Protection</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Life Protection</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Savings</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Retirement</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Legacy</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Accidents / disablities</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Investments</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Col>
                                        <Col lg={3} md={6} sm={12}>
                                            <div className="footer_menu">
                                                <ul>
                                                    <li className="footer_menu_title">Products</li>
                                                    <li>
                                                        <a href="#">Health Protection</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Life Protection</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Savings</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Retirement</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Legacy</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Accidents / disablities</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Investments</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Col>
                                        <Col lg={3} md={6} sm={12}>
                                            <div className="footer_menu">
                                                <ul>
                                                    <li className="footer_menu_title">Products</li>
                                                    <li>
                                                        <a href="#">Health Protection</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Life Protection</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Savings</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Retirement</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Legacy</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Accidents / disablities</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Investments</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Col>
                                        <Col lg={3} md={6} sm={12}>
                                            <div className="footer_menu">
                                                <ul>
                                                    <li className="footer_menu_title">Products</li>
                                                    <li>
                                                        <a href="#">Health Protection</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Life Protection</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Savings</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Retirement</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Legacy</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Accidents / disablities</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Investments</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>

                            <div className="recent_border footer_border copyright_border"></div>

                            <div className="copyright_section">
                                <Row>
                                    <Col lg={6} md={6} sm={12}>
                                        <ul>
                                            <li>
                                                <a href="#">Sitemap</a>
                                            </li>
                                            <li>
                                                <strong></strong>
                                            </li>
                                            <li>
                                                <a href="#">Desclimer</a>
                                            </li>
                                            <li>
                                                <strong></strong>
                                            </li>
                                            <li>
                                                <a href="#">Privacy Policy</a>
                                            </li>
                                        </ul>
                                    </Col>
                                    <Col lg={6} md={6} sm={12}>
                                        <p className="copyright_right">
                                            <span>&#x000A9;</span> Copyright 2020<a href="https://github.com/iamtheasad" target="_blank"> Md. Asaduzzaman Rana </a> All Rights Reserved.
                                        </p>
                                    </Col>
                                </Row>
                            </div>
                        </Container>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Footer;