import React from 'react';
import Footer from '../../Footer';
import Header from '../../Header';
import BannerRecruit from './BannerRecruit';
import SecondRecruit from './SecondRecruit';

const Recruit = () => {
    return (
        <>
        <Header/>
        <div className="main">
            <BannerRecruit/>
            <SecondRecruit/>
        </div>
        <Footer/>
            
        </>
    );
};

export default Recruit;