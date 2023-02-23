import React from 'react';
import {HeaderProvider} from "../../../Context/HeaderContext";
import Footer from '../Footer';
import Header from "../Header"
import Banner from './Banner';
import FifthSection from './FifthSection';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';

const HomePage = () => {
    return (
        <HeaderProvider>
            <Header/>
            <div className="main-content">
                <Banner/>
                <SecondSection/>
                <ThirdSection/>
                <FifthSection/>
            </div>
            <Footer/>
        </HeaderProvider>
    );
};

export default HomePage;