import styled from "styled-components";

const SecondSectionWrapper = styled.div`
  min-height: 100vh;
  background-color: #fff;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;

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
  .elemts{
    display: flex;
    flex-direction: column;
  }
  .right{
    width: 50%; 
    text-align: center;
  }
  .left h4 {
    margin: 0;
    font-size: 14px;
    font-weight: 800;
    color: #7141b1;
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
  .elements img{
    color: #F67F00;
    width: 45px;
    padding-bottom: 15px;
  }
  .elements h5{
    margin: 0;
    font-size: 18px; 
    color: #000;
    font-family: 'Nunito Sans';

  }
  .elements p{
    font-size: 16px;
    color: #6d6d6d;
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
`;

export { SecondSectionWrapper };
