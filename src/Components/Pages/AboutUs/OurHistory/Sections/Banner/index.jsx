import React from 'react';
import { HistoryBannerWrap } from './HistoryBanner.style';
import Container from "../../../../../Common/Container"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

const HistoryBanner = () => {
    return (
        <HistoryBannerWrap>
            <Container>
            <div className="wrap">
                <h3 className="title">Our History</h3>
                <div style={{display:"flex", alignItems:"center"}}><p>About</p> <FontAwesomeIcon icon={faCaretRight}/> <p>Our History</p></div>
            </div>
            </Container>
        </HistoryBannerWrap>
    );
};

export default HistoryBanner;