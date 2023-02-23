import styled from "styled-components";

const FooterWrapper = styled.div`
  background-color: #002f49;
  padding: 100px 0 50px;

  .logo{
    width: 20%;
    margin: auto;
    img{
        width: 100%;
    }
  }

  .cards{
    margin-top: 30px;
    margin-bottom: 75px;
    display: flex;
    justify-content: space-around;
    .card{
        text-align: center;
        svg{
            width: 30px;
            color: #F67F00;
        }

        .title{
            color: #fff;
            margin-bottom: 15px;
            font-size: 18px;
        }

        .descr{
            color: #fff;
        }
    }
  }

  .links{
    font-family: Nunito sans;
    width: 70%;
    margin: auto;
    ul{
        display: flex;
        justify-content: space-around;
        li{
            text-transform: uppercase;
            list-style: none;
            font-size: 16px;
            color: #fff;
            font-weight: 700;
            transition: 300ms;

            &:hover{
                color: #F67F00;
            }
        }
    }
  }

  .sunet{
    text-align: center;
    color: #fff;
    margin: 30px 0 50px;

  }

  .icons{
    width: 10%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    a{
        background-color: #fff;
        padding: 2px 7px;
        border-radius: 50%;
        transition: 300ms;

        svg{
            width: 12px;
        }

        &:hover{
            transform: translateY(-10px);
        }
    }
  }
`;

export { FooterWrapper };
