import styled from "styled-components";

const SecondSectionWrapper = styled.div`
  min-height: 100vh;
  background-color: #fff;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;

  /* .element {
    &__img {

    }

    &__title {
        
    }

    &__line {
        
    }

    &__text {
        
    }

    &:hover {
        .element__line {
            width: 100%;
        }   
    }
  } */

  section {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center; 
    gap: 70px;
  }
  .left{
    width: 50%;
    display: flex;
    flex-direction: column;
  }
  .info-element{
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
  }
  .info-element p{
    padding-right: 30px;
  } 
  .right{
    width: 50%; 
    text-align: center;
  }
  .left h4 {
    margin: 0;
    font-size: 14px;
    font-weight: 800;
    color: #F67F00;
    position: relative;
    display: inline-block;
    margin-bottom: 7px;
    text-transform: uppercase;
    font-family: 'Nunito Sans';
  }
  .left h2{
    font-size: 44px;
    margin: 0;
    line-height: 52px;
    font-weight: 800;
    font-family: 'Nunito Sans';
  }
  .left p{
    font-size: 16px;
    color: #6d6d6d;
    font-weight: 400;
    line-height: 30px;
    font-family: 'Nunito Sans';
  }
  .info-element{
    gap: 10px;
  }
  .element img{
    color: #F67F00;
    width: 45px;
    padding-bottom: 15px;
  }
  .element h5{
    margin: 0;
    font-size: 18px; 
    color: #000;
    font-family: 'Nunito Sans';

  }
  .element p{
    font-size: 16px;
    color: #6d6d6d;
  }
  .element__line{
    position: relative;
      width: 91%;
    height: 2px;
    margin-top: 15px;
    background-color: #EFEFEF;
  }
  
.element .element__line:after {
    content: "";
    display: block;
    height: 2px;
    right: 0;
    position: absolute;
    background: #F67F00;
    transition: width 0.3s ease 0s;
    width: 0;
}

.element:hover > .element__line:after {
    width: 100%;
    left: 0 !important;
}


  .right-icon{
    width: 15px;
    color: #F67F00;
  }
  .bottom{
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 8px;

  }
  .bottom a{
    text-transform: uppercase;
    color: #F67F00;
    font-weight: 600;
  }

  @media (max-width: 650px) {
    padding: 30px 0;
    section{
      flex-direction: column;

      .left{
        width: 100%;

        p{
          font-size: 14px;
        }
      }

      .right{
        width: 100%;

        img{
          width: 100%;
          margin-bottom: 30px;
        }
      }
    }
  }
`;

export { SecondSectionWrapper };
