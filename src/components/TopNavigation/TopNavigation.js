import React, {Component, Fragment} from 'react';
import {Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/custom.css';
import '../../assets/css/responsive.css';
import Logo from '../../assets/images/logo.png';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import SearchIcon from '@material-ui/icons/Search';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import * as Scroll from 'react-scroll';
import HomePage from "../../pages/HomePage";


class TopNavigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            NavLogo: [Logo]
        }
    }

    render() {
        let Link = Scroll.Link;
        let Element = Scroll.Element;
        let Events = Scroll.Events;
        let scroll = Scroll.animateScroll;
        let scrollSpy = Scroll.scrollSpy;
        return (
            <Fragment>
                <div className="menu_wrapper">
                    <div id="header_menu_section">
                        <Container fluid>
                            <Row>
                                <Col>
                                    <Navbar expand="lg">
                                        <Router>
                                            <Switch>
                                                <Route path="/" component={HomePage}>
                                                    <Navbar.Brand href="#">
                                                        <img className="navLogo" src={this.state.NavLogo}/>
                                                    </Navbar.Brand>
                                                </Route>
                                            </Switch>
                                        </Router>

                                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                                        <Navbar.Collapse id="basic-navbar-nav">
                                            <Nav className="header_menu mr-auto">

                                                <Link activeClass="active" to="our_product_section" spy={true}
                                                      smooth={true} offset={-50} duration={500} delay={200}>
                                                    Products
                                                </Link>
                                                <Link activeClass="active" to="call_to_action" spy={true} smooth={true}
                                                      offset={-50} duration={500} delay={200}>
                                                    Claims
                                                </Link>
                                                <Link activeClass="active" to="services_custom_width" spy={true}
                                                      smooth={true} offset={-50} duration={500} delay={200}>
                                                    Support
                                                </Link>
                                                <Link activeClass="active" to="award_section" spy={true} smooth={true}
                                                      offset={-50} duration={500} delay={200}>
                                                    Rewards
                                                </Link>

                                                <Nav.Link className="border_left"> </Nav.Link>

                                                <Link className="white_color" activeClass="active" to="insurance_bg" spy={true} smooth={true}
                                                      offset={-50} duration={500} delay={200}>
                                                    Group Insurance
                                                </Link>
                                                <Link className="white_color" activeClass="active" to="insurance_bg" spy={true} smooth={true}
                                                      offset={-50} duration={500} delay={200}>
                                                    About Us
                                                </Link>
                                            </Nav>

                                            <div className="nav_right">
                                                <a href="#" className="login">
                                                    login
                                                </a>
                                                <a href="#">
                                                <span className="call">
                                                    <HeadsetMicIcon>Call Icon</HeadsetMicIcon>
                                                </span>
                                                </a>
                                                <a href="#">
                                                <span className="search">
                                                    <SearchIcon>Search Icon</SearchIcon>
                                                </span>
                                                </a>
                                                <a href="#">
                                                <span className="language">
                                                    <p>En</p>
                                                    <p className="header_arrow_1">
                                                        <ExpandLessIcon
                                                            style={{fontSize: '14px'}}>arrow up</ExpandLessIcon>
                                                    </p>
                                                    <p className="header_arrow_2">
                                                        <ExpandMoreIcon
                                                            style={{fontSize: '14px'}}>arrow down</ExpandMoreIcon>
                                                    </p>

                                                </span>
                                                </a>
                                            </div>

                                        </Navbar.Collapse>
                                    </Navbar>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default TopNavigation;