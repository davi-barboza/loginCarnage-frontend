import styled from 'styled-components';

interface bgChar{
  backgroundImage: string;
}

export const Container = styled.div<bgChar>`

  h3 {
      font-size: 1.6rem;
  }
  img {
    width: 270px;
  }
  p {
    font-size: ${props => props.theme.fontsize.description}
  }
  
`;
