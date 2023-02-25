import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Container from '../../../../Common/Container';
import { BannerValueWrapper } from './BannerValue.style';

const BannerValue = () => {
    return (
        <BannerValueWrapper>
             <Container>
            <div className="wrap">
                <h3 className="title">Values</h3>
                <div style={{display:"flex", alignItems:"center"}}><p>About</p> <FontAwesomeIcon icon={faCaretRight}/> <p>Values</p></div>
            </div>
            </Container>
        </BannerValueWrapper>
    );
};

export default BannerValue;