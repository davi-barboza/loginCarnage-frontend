import React from 'react';
import { Container } from './styles';

interface bgChar{
  backgroundImage: string;
  charName: string;
  charDescription: string;
}

const BannerChar: React.FC<bgChar> = (props) => {
  return (
    <Container {...props}>
      <img src={props.backgroundImage} alt={props.charName} />
      
      <div>
        <h1>{props.charName}</h1>
        <h3>{ props.charDescription }</h3>
      </div>
    </Container>
  );
}

export default BannerChar;