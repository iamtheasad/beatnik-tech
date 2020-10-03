import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import news_1 from '../../assets/images/news/news_1.jpg';
import news_2 from '../../assets/images/news/news_2.jpg';
import news_3 from '../../assets/images/news/news_3.jpg';
import news_4 from '../../assets/images/news/news_4.jpg';

class NewsEvent extends Component {

    render() {
        return (
            <Fragment>
                <div className="section_width">
                    <Container fluid>
                        <Row>
                            <Col>
                                <div className="news_top">
                                    <h2><span>News & </span>Event</h2>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={4} md={6} sm={12}>
                                <div className="news_box">
                                    <img src={news_4} className="news_img" alt="News Image"/>

                                    <div className="news_text">
                                        <h2>New premium rates has been introduced.</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores,
                                            unde.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6} sm={12}>
                                <div className="news_box">
                                    <img src={news_3} className="news_img" alt="News Image"/>

                                    <div className="news_text">
                                        <h2>New premium rates has been introduced.</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores,
                                            unde.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6} sm={12}>
                                <div className="recent_news news_box">
                                    <h3>Recent News</h3>
                                    <div className="recentNews_list">
                                        <div className="recent_border"></div>
                                        <div className="recent_news_item">
                                            <a href="#">
                                                <img src={news_4} className="news_img recent_img"
                                                     alt="News Image"/>
                                                <span>New premium rates has been introduced.</span>
                                            </a>
                                        </div>
                                        <div className="recent_border"></div>
                                        <div className="recent_news_item">
                                            <a href="#">
                                                <img src={news_3} className="news_img recent_img"
                                                     alt="News Image"/>
                                                <span>New premium rates has been introduced.</span>
                                            </a>
                                        </div>
                                        <div className="recent_border"></div>
                                        <div className="recent_news_item">
                                            <a href="#">
                                                <img src={news_2} className="news_img recent_img"
                                                     alt="News Image"/>
                                                <span>New premium rates has been introduced.</span>
                                            </a>
                                        </div>
                                        <div className="recent_border"></div>
                                        <div className="recent_news_item">
                                            <a href="#">
                                                <img src={news_1} className="news_img recent_img"
                                                     alt="News Image"/>
                                                <span>New premium rates has been introduced.</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <div className="w-100 text-center">
                            <a className="news_all_button" href="#">View All</a>
                        </div>
                    </Container>
                </div>
            </Fragment>
        );
    }
}

export default NewsEvent;