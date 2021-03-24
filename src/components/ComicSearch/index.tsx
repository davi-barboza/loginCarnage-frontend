import { Container } from './styles';
import { useEffect, useState } from 'react';
import marvel from '../../assets/marvel.png'


import { useRouter } from 'next/router';
import { useMarvel } from '../../context/MarvelResponseContext';

const ComicSearch: React.FC = () => {
  const route = useRouter();
  const { setIdChar, setCharName, charName, setCharDescription,
    setThumbnailChar, timeStamps, publicKey, hash } = useMarvel();

  async function handleSubmit() {

    fetch(`https://gateway.marvel.com:443/v1/public/characters?name=${charName}&ts=${timeStamps}&apikey=${publicKey}&hash=${hash}`)
      .then(response => { return response.json() })
      .then(response => {
        setIdChar(response.data.results[0].id)
        setCharName(response.data.results[0].name)
        setCharDescription(response.data.results[0].description)
        setThumbnailChar(response.data.results[0].thumbnail.path + '.' +
          response.data.results[0].thumbnail.extension)

        route.push('/comics');
      })
      .catch(error => {
        return error;
      })
  }

  return (
    <Container method="POST">
      <img src={marvel} alt="Marvel" />

      <input type="text" name="character" value={charName} onChange={e => setCharName(e.target.value)} placeholder="Character" />

      <button type="button" onClick={handleSubmit}>Continue</button>

      <div className="footer">
        <p>Choose your character and have fun!</p>
      </div>
    </Container>
  );
}

export default ComicSearch;