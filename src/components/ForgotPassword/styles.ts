import styled from 'styled-components';

export const Container = styled.form`
  
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* .carnageFace {
    display: none;
    position: absolute;
    top: 20px;
    left: 30px;
    width: 50px;
  } */

  h2 {
    margin: 20px 0;
  }

  input {
    width: 350px;
    padding: 5px;
    margin: 10px 0;
    background: none;
    border-bottom: 2px solid ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text};
    outline: none;
  }
  input::placeholder{
    color: ${props => props.theme.colors.link};
    letter-spacing: 3px;
  }

  button {
    margin: 20px 0;
    padding: 5px 20px;

    border: solid 2px ${props => props.theme.colors.text};
    border-radius: 5px;

    transition: .3s
  }
  button:hover{
    background: none;
    color: ${props => props.theme.colors.text};

    transition: .3s
  }

  .loginFooter {
    width: 100%;
    font-size: 1.2rem;
    margin-bottom: 10px;

    display: flex;
    justify-content: space-evenly;
  }
  a {
    color: ${props => props.theme.colors.primary};
    font-weight: 600;
  }
  .forgotPassword {
    margin-top: 10px;
    color: ${props => props.theme.colors.link};
    cursor: pointer;
  }

  .carnageName {
    margin-top: 20px;
    width: 170px;
  }

  @media(max-width: 630px){
    .carnageFace {
      display: block;
    }
  }
  @media(max-width: 500px){
    padding: 0;
    padding-top: 20px;
    width: 85%;

    input {
      width: 100%;
    }
  }
`;
