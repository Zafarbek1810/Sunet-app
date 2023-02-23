import React from 'react';
import {HeaderProvider} from "../../../Context/HeaderContext";
import Header from "../Header"
import Banner from './Banner';
import SecondSection from './SecondSection';

const HomePage = () => {
    return (
        <HeaderProvider>
            <Header/>
            <div className="main-content">
                <Banner/>
                <SecondSection/>
            </div>
        </HeaderProvider>
    );
};

export default HomePage;