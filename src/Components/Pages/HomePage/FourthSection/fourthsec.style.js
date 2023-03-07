import styled from "styled-components";

const FourthWrapper = styled.div`

min-height: 100vh;

.top-tit{
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
.title{
    font-size: 44px;
    margin: 0;
    color: #000;
    line-height: 52px;
    font-weight: 800;
    font-family: 'Nunito Sans', sans-serif;
}
.box-wrapper{
    display: flex;
    flex-wrap: wrap;
    /* background-color: #7141b1; */
}
.box{
    width: 33%;
    display: flex;
    gap: 20px;
    padding: 50px 0px 20px 0px;
}
.box-tit{
    /* background-color: #fff; */
    padding-right: 60px;
} 
.box-img svg{
    fill: none;
    stroke: #F67F00;
    stroke-width: 1.5;
}
.box-tit h3{
    margin: 0;
    color: #1b1d21;
    font-family: 'Nunito Sans', sans-serif;
}
.box-tit p{
    color: #6D6D6D;
    line-height: 28px;
}

@media (max-width: 650px) {
    .title{
        font-size: 32px;
    }
    .box-wrapper{
        flex-direction: column;

        .box{
            width: 100%;
        }
    }
}

`
export {FourthWrapper};