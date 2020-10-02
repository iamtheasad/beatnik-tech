import React, {Component} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import HeaderBanner from "../components/HeaderBanner/HeaderBanner";
import PolicyPlan from "../components/PolicyPlan/PolicyPlan";
import OurProducts from "../components/OurProducts/OurProducts";

class HomePage extends Component {
    render() {
        return (
            <>
                <TopNavigation/>
                <HeaderBanner/>
                <PolicyPlan/>
                <OurProducts/>
            </>
        );
    }
}

export default HomePage;