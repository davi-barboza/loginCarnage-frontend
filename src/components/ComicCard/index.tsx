import React from 'react';
import { Container } from './styles';

interface bgChar {
  backgroundImage: string;
  title: string;
  thumbnail: string;
  description: string;
}

const ComicCard: React.FC<bgChar> = (props) => {

  return (
    <Container {...props}>

      <h3>{props.title}</h3>
      <img src={props.thumbnail} alt={props.title} />
      <p>{props.description}</p>

    </Container>
  );
}

export default ComicCard;