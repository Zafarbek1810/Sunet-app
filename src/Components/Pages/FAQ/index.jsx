import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import BannerFAQ from './Section/BannerFAQ';
import FirstFAQ from './Section/FirstSection';

const FAQ = () => {
    return (
        <div>
            <Header/>
            <BannerFAQ/>
            <FirstFAQ/>
            <Footer/>
        </div>
    );
};

export default FAQ;