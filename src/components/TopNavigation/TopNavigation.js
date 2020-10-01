import React, {Component, Fragment} from 'react';
import {Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/custom.css';
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
                                            <Nav.Link href="#home">Products</Nav.Link>
                                            <Nav.Link href="#claims">Claims</Nav.Link>
                                            <Nav.Link href="#claims">Support</Nav.Link>
                                            <Nav.Link href="#claims">Rewards</Nav.Link>
                                            <Nav.Link className="nav_link_white" href="#claims">Group
                                                Insurance</Nav.Link>
                                            <Nav.Link className="nav_link_white" href="#claims">About Us</Nav.Link>
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
                                                        <ExpandLessIcon>arrow up</ExpandLessIcon>
                                                    </p>
                                                    <p className="header_arrow_2">
                                                        <ExpandMoreIcon>arrow down</ExpandMoreIcon>
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
            </Fragment>
        );
    }
}

export default TopNavigation;