import styled from 'styled-components'
import bgMain from '../../assets/bg-main.png';
import bgLogin from '../../assets/bg-login.jpg';

export const Container = styled.div`

    width: 100vw;
    min-height: 630px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-image: url();
    background-size: cover;
    background-repeat: no-repeat;

    main {
      width: 100%;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    section { 
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
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