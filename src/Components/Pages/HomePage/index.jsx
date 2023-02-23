import React from 'react';
import {HeaderProvider} from "../../../Context/HeaderContext";
import Header from "../Header"
import Banner from './Banner';

const HomePage = () => {
    return (
        <HeaderProvider>
            <Header/>
            <div className="main-content">
                <Banner/>
            </div>
        </HeaderProvider>
    );
};

export default HomePage;