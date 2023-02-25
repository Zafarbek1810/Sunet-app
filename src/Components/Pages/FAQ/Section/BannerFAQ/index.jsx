import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Container from '../../../../Common/Container';
import { BannerFAQWrapper } from './BannerFAQ.style';

const BannerFAQ = () => {
    return (
        <BannerFAQWrapper>
            <Container>
            <div className="wrap">
                <h3 className="title">FAQs</h3>
                <div style={{display:"flex", alignItems:"center"}}><p>About</p> <FontAwesomeIcon icon={faCaretRight}/> <p>FAQs</p></div>
            </div>
            </Container>
        </BannerFAQWrapper>
    );
};

export default BannerFAQ;