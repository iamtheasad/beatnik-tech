import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import BannerIcon_1 from '../../assets/images/banner-icon/1-sister-and-brother.svg';
import BannerIcon_2 from '../../assets/images/banner-icon/2-graduate-boy-reading-a-book.svg';
import BannerIcon_3 from '../../assets/images/banner-icon/3-money-bag.svg';
import BannerIcon_4
    from '../../assets/images/banner-icon/4-protection-symbol-of-opened-umbrella-silhouette-under-raindrops.svg';
import SearchIcon from '@material-ui/icons/Search';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import RoomIcon from '@material-ui/icons/Room';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner_1 from '../../assets/images/banner-icon/banner-bg.jpg';


class HeaderBanner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            BannerIcon_1: [BannerIcon_1],
            BannerIcon_2: [BannerIcon_2],
            BannerIcon_3: [BannerIcon_3],
            BannerIcon_4: [BannerIcon_4],
        }
    }

    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            arrows: true,
            autoplay: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                    }
                }
            ]
        };

        return (
            <Fragment>
                <div className="banner_section">
                    <Slider {...settings}>
                        <div className="banner_single_item">
                            <div className="section_width" style={{
                                'backgroundImage': `url(${Banner_1})`,
                                'backgroundSize': "cover",
                                'backgroundPosition': "center"
                            }}>
                                <Container fluid>
                                    <Row>
                                        <Col lg={12}>
                                            <div className="protection_box">
                                                <h2 className="protect_title">Family Protection Plans</h2>
                                                <div className="protection_plat_wrapper">
                                                    <div className="protection_plan">
                                                        <div className="protection_plan_box">
                                                            <h4>saving plan</h4>
                                                            <img src={BannerIcon_3} alt="Banner Icon"/>
                                                        </div>
                                                        <h3>Savings</h3>
                                                    </div>
                                                    <div className="protection_plan">
                                                        <div className="protection_plan_box">
                                                            <h4>saving plan</h4>
                                                            <img src={BannerIcon_4} alt="Banner Icon"/>
                                                        </div>
                                                        <h3>Early Cash</h3>
                                                    </div>
                                                    <div className="protection_plan">
                                                        <div className="protection_plan_box">
                                                            <h4>saving plan</h4>
                                                            <img src={BannerIcon_2} alt="Banner Icon"/>
                                                        </div>
                                                        <h3>Children</h3>
                                                    </div>
                                                    <div className="protection_plan">
                                                        <div className="protection_plan_box">
                                                            <h4>saving plan</h4>
                                                            <img src={BannerIcon_1} alt="Banner Icon"/>
                                                        </div>
                                                        <h3>Retirement</h3>
                                                    </div>
                                                    <div className="protection_plan">
                                                        <div className="protection_plan_box">
                                                            <h4>saving plan</h4>
                                                            <img src={BannerIcon_3} alt="Banner Icon"/>
                                                        </div>
                                                        <h3>Investment</h3>
                                                    </div>
                                                </div>
                                                {/*protection_plat_wrapper end */}
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                        {/*banner_single_item*/}
                        <div className="banner_single_item">
                            <div className="section_width" style={{
                                'backgroundImage': `url(${Banner_1})`,
                                'backgroundSize': "cover",
                                'backgroundPosition': "center"
                            }}>
                                <Container fluid>
                                    <Row>
                                        <Col lg={12}>
                                            <div className="protection_box">
                                                <h2 className="protect_title">Family Protection Plans</h2>
                                                <div className="protection_plat_wrapper">
                                                    <div className="protection_plan">
                                                        <div className="protection_plan_box">
                                                            <h4>saving plan</h4>
                                                            <img src={BannerIcon_3} alt="Banner Icon"/>
                                                        </div>
                                                        <h3>Savings</h3>
                                                    </div>
                                                    <div className="protection_plan">
                                                        <div className="protection_plan_box">
                                                            <h4>saving plan</h4>
                                                            <img src={BannerIcon_4} alt="Banner Icon"/>
                                                        </div>
                                                        <h3>Early Cash</h3>
                                                    </div>
                                                    <div className="protection_plan">
                                                        <div className="protection_plan_box">
                                                            <h4>saving plan</h4>
                                                            <img src={BannerIcon_2} alt="Banner Icon"/>
                                                        </div>
                                                        <h3>Children</h3>
                                                    </div>
                                                    <div className="protection_plan">
                                                        <div className="protection_plan_box">
                                                            <h4>saving plan</h4>
                                                            <img src={BannerIcon_1} alt="Banner Icon"/>
                                                        </div>
                                                        <h3>Retirement</h3>
                                                    </div>
                                                    <div className="protection_plan">
                                                        <div className="protection_plan_box">
                                                            <h4>saving plan</h4>
                                                            <img src={BannerIcon_3} alt="Banner Icon"/>
                                                        </div>
                                                        <h3>Investment</h3>
                                                    </div>
                                                </div>
                                                {/*protection_plat_wrapper end */}
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                        {/*banner_single_item*/}
                    </Slider>

                    <div className="banner_bottom">
                        <div className="banner_bottom_left">
                            <div className="bottom_search_icon">
                                <SearchIcon style={{fontSize: '32px'}}>Search</SearchIcon>
                            </div>
                            <div className="banner_bottom_title">
                                What do you need?
                            </div>
                        </div>
                        <div className="banner_bottom_right">
                            <div className="banner_bottom_right_wrapper">
                                <span><a href="#"><AssignmentIcon>Products</AssignmentIcon></a></span>
                                <h4>Products</h4>
                            </div>
                            <div className="banner_bottom_right_wrapper">
                                <span><a href="#"><PermIdentityIcon>Products</PermIdentityIcon></a></span>
                                <h4>Products</h4>
                            </div>
                            <div className="banner_bottom_right_wrapper">
                                <span><a href="#"><RoomIcon>Products</RoomIcon></a></span>
                                <h4>Products</h4>
                            </div>
                        </div>
                    </div>
                </div>
                {/*banner_section end*/}
            </Fragment>
        );
    }
}

export default HeaderBanner;