import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import BannerOffices from './BannerOffices';
import SecondOffices from './SecondOffices';

const OurOffices = () => {
    return (
        <>
            <Header/>
                <div className="main-content">
                    <BannerOffices/>
                    <SecondOffices/>
                </div>
            <Footer/>
        </>
    );
};

export default OurOffices;