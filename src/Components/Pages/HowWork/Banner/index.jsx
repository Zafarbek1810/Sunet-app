import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Container from '../../../Common/Container';
import { BannerHowWorkWrapper } from './BannerHowWork.style';

const BannerHowWork = () => {
    return (
        <BannerHowWorkWrapper>
            <Container>
            <div className="wrap">
                <h3 className="title">How Do We Work</h3>
                <div style={{display:"flex", alignItems:"center"}}><p>Services</p> <FontAwesomeIcon icon={faCaretRight}/> <p>How Do We Work</p></div>
            </div>
            </Container>
        </BannerHowWorkWrapper>
    );
};

export default BannerHowWork;