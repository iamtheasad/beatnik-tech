import React, {Component} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import HeaderBanner from "../components/HeaderBanner/HeaderBanner";

class HomePage extends Component {
    render() {
        return (
            <>
             <TopNavigation/>
             <HeaderBanner/>
            </>
        );
    }
}

export default HomePage;