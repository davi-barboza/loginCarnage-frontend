import styled from 'styled-components';

export const Container = styled.form`
  
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  z-index: 1;

  img{
    width: 22rem;
    margin-bottom: 30px;
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
    margin-top: 20px;
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

  .footer {
    margin-top: 20px;
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
