import React, {Component} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import HeaderBanner from "../components/HeaderBanner/HeaderBanner";
import PolicyPlan from "../components/PolicyPlan/PolicyPlan";
import OurProducts from "../components/OurProducts/OurProducts";
import InsuranceCatergory from "../components/InsuranceCatergory/InsuranceCatergory";
import CallToAction from "../components/CallToAction/CallToAction";
import Services from "../components/Services/Services";
import NewsEvent from "../components/NewsEvent/NewsEvent";
import Awards from "../components/Awards/Awards";
import Footer from "../components/Footer/Footer";

class HomePage extends Component {
    render() {
        return (
            <>
                <TopNavigation/>
                <HeaderBanner/>
                <PolicyPlan/>
                <OurProducts/>
                <InsuranceCatergory/>
                <CallToAction/>
                <Services/>
                <NewsEvent/>
                <Awards/>
                <Footer/>
            </>
        );
    }
}

export default HomePage;