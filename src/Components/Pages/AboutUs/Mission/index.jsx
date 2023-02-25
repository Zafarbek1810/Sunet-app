import React from 'react';
import Footer from '../../Footer';
import Header from '../../Header';
import BannerMission from './Sections/BannerMission';
import SecondMission from './Sections/SecondMission';

const Mission = () => {
    return (
        <div>
            <Header/>
            <div className="main-content">
                <BannerMission/>
                <SecondMission/>
            </div>
            <Footer/>
        </div>
    );
};

export default Mission;