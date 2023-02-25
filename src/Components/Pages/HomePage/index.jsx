import React from 'react';
import Footer from '../Footer';
import Header from "../Header"
import Banner from './Banner';
import FourthSection from './FourthSection';
import FifthSection from './FifthSection';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';

const HomePage = () => {
    return (
        <>
            <Header/>
            <div className="main-content">
                <Banner/>
                <SecondSection/>
                <ThirdSection/>
                <FourthSection />
                <FifthSection/>
            </div>
            <Footer/>
        </>
    );
};

export default HomePage;