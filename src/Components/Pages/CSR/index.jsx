import React from 'react';
import BannerCSR from './BannerCSR';
import Header from '../Header';
import Footer from '../Footer';
import SecondCSR from './SecondCSR';

const CSR = () => {
    return (
        <div>
            <Header/>
            <div className="main-content">
                <BannerCSR/>
                <SecondCSR/>
            </div>
            <Footer/>
            
        </div>
    );
};

export default CSR;