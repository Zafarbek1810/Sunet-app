import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Container from '../../../Common/Container';
import { BannerOfficesWrapper } from './BannerOffices.style';

const BannerOffices = () => {
    return (
        <BannerOfficesWrapper>
             <Container>
            <div className="wrap">
                <h3 className="title">Our Offices</h3>
                <div style={{display:"flex", alignItems:"center"}}> <FontAwesomeIcon icon={faCaretRight}/> <p>Our Offices</p></div>
            </div>
            </Container>
        </BannerOfficesWrapper>
    );
};

export default BannerOffices;