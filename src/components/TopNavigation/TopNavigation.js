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

class TopNavigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            NavLogo: [Logo]
        }
    }

    render() {
        return (
            <Fragment>
                <div className="menu_wrapper">
                    <div id="header_menu_section">
                        <Container fluid>
                            <Row>
                                <Col>
                                    <Navbar expand="lg">
                                        <Navbar.Brand href="#home">
                                            <img className="navLogo" src={this.state.NavLogo}/>
                                        </Navbar.Brand>
                                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                                        <Navbar.Collapse id="basic-navbar-nav">
                                            <Nav className="header_menu mr-auto">
                                                <Nav.Link href="#product_section">Products</Nav.Link>
                                                <Nav.Link href="#callToAction">Claims</Nav.Link>
                                                <Nav.Link href="#service_section">Support</Nav.Link>
                                                <Nav.Link href="#award">Rewards</Nav.Link>
                                                <Nav.Link className="border_left"></Nav.Link>
                                                <Nav.Link className="nav_link_white" href="#">Group
                                                    Insurance</Nav.Link>
                                                <Nav.Link className="nav_link_white" href="#">About Us</Nav.Link>
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
                                                        <ExpandLessIcon style={{fontSize: '14px'}}>arrow up</ExpandLessIcon>
                                                    </p>
                                                    <p className="header_arrow_2">
                                                        <ExpandMoreIcon style={{fontSize: '14px'}}>arrow down</ExpandMoreIcon>
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