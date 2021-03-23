import styled from 'styled-components'
import bgMain from '../../assets/bg-chars.jpg';

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
      /* width: 75%;
      height: 80%;
      min-height: 530px; */
      padding: 60px 90px;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    
  .overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.7);

      border-radius: 10px;
      box-shadow: 1px 1px 5px #6e6e6e;
    }

    h1 {
        font-size: 54px;
        color: ${props => props.theme.colors.primary};
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