import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Container from '../../../../Common/Container';
import { BannerCareersWrapper } from './BannerCareers.style';

const BannerCareers = () => {
    return (
        <BannerCareersWrapper>
            <Container>
            <div className="wrap">
                <h3 className="title">Apply Online</h3>
                <div style={{display:"flex", alignItems:"center"}}><p>Careers</p> <FontAwesomeIcon icon={faCaretRight}/> <p>Apply Online</p></div>
            </div>
            </Container> 
        </BannerCareersWrapper>
    );
};

export default BannerCareers;