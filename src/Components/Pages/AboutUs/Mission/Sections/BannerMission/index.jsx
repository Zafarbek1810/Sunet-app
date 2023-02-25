import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Container from '../../../../../Common/Container';
import { BannerMissionWrapper } from './BannerMission.style';

const BannerMission = () => {
    return (
        <BannerMissionWrapper>
            <Container>
            <div className="wrap">
                <h3 className="title">Mission & Vision</h3>
                <div style={{display:"flex", alignItems:"center"}}><p>About</p> <FontAwesomeIcon icon={faCaretRight}/> <p>Mission & Vision</p></div>
            </div>
            </Container>
        </BannerMissionWrapper>
    );
};

export default BannerMission;