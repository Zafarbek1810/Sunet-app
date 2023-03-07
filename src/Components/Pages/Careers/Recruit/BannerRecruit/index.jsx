import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Container from '../../../../Common/Container';
import { BannerEmpWraper } from './BannerEmp.style';

const BannerRecruit = () => {
    return (
        <BannerEmpWraper>
            <Container>
            <div className="wrap">
                <h3 className="title">How Do We Recruit</h3>
                <div style={{display:"flex", alignItems:"center"}}><p>Careers</p> <FontAwesomeIcon icon={faCaretRight}/> <p>How Do We Recruit</p></div>
            </div>
            </Container> 
        </BannerEmpWraper>
    );
};

export default BannerRecruit;