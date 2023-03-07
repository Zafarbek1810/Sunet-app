import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Container from '../../../Common/Container';
import { BannerCSRWrapper } from './BannerCSR.style';

const BannerCSR = () => {
    return (
        <BannerCSRWrapper>
            <Container>
            <div className="wrap">
                <h3 className="title">Corporate Social Responsibility</h3>
                <div style={{display:"flex", alignItems:"center"}}> <FontAwesomeIcon icon={faCaretRight}/> <p>CSR</p></div>
            </div>
            </Container>
        </BannerCSRWrapper>
    );
};

export default BannerCSR;