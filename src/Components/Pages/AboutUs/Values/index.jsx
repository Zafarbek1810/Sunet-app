import React from 'react';
import Footer from '../../Footer';
import Header from '../../Header';
import BannerValue from './BannerValues';
import SecondValue from './SecondValue';

const Values = () => {
    return (
        <div>
           <Header/>
           <div className="main-content">
            <BannerValue/>
            <SecondValue/>
           </div>
           <Footer/> 
        </div>
    );
};

export default Values;