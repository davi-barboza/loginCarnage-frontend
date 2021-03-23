import styled from 'styled-components'
import bgMain from '../../assets/bg-main.png';
import bgLogin from '../../assets/bg-login.jpg';

export const Container = styled.div`

    width: 100vw;
    height: 100vh;
    min-height: 630px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-image: url(${bgMain});
    background-size: cover;
    background-repeat: no-repeat;

    main {
      position: relative;
      width: 75%;
      height: 80%;
      min-height: 530px;

      background-image: url(${bgLogin});
      background-size: cover;
      background-repeat: no-repeat;

      border-radius: 20px;
      box-shadow: 1px 1px 10px #3e3e3e;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    h1 {
        font-size: 54px;
        color: ${props => props.theme.colors.primary};
        cursor: pointer;
    }

    .users {
      margin-top: 30px;

      display: flex;
      flex-direction: column;
    }
    label {
      margin-top: 20px;
    }


    @media(max-width: 1050px){
      main {
        width: 85%;
      }
    }
    @media(max-width: 950px){
      main {
        background-position-x: -130px;
      }
    }
    @media(max-width: 768px){
      main {
        background-position-x: 0;
        justify-content: center;
      }
    }
`;