import { Container } from './styles';
import { useEffect, useState } from 'react';
import api from '../../services/api';
import marvel from '../../assets/marvel.png'
import CryptoJS from 'crypto-js';
import axios from 'axios';

interface Character {
  name: string;
  description: string;
  thumbnail: string;
  extension: string;
}

const ComicSearch: React.FC = () => {
  const [character, setCharacter] = useState<string>('');
  const [infoChar, setInfoChar] = useState();
  
  const publicKey = 'db71d5e3d55ad7f50892a89f12e7bbe2';
  const privateKey = 'fca1690c8b406e5b1edfc02f43fdb5230c5a3abe';  
  
  async function handleSubmit() {
    const timeStamps = Math.floor(Date.now() / 1000)
    const hash = CryptoJS.MD5(timeStamps + privateKey + publicKey);
    
    const data = {
      name: character,
      ts: timeStamps,
      apiKey: publicKey,
      hash: hash,
    }

    fetch(`https://gateway.marvel.com:443/v1/public/characters?name=${data.name}&ts=${data.ts}&apikey=${data.apiKey}&hash=${data.hash}`)
      .then(response => {
        return response.json();
      })
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        return error;
      })

  }

  return (
    <Container method="POST">

      <img src={marvel} alt="Marvel"/>

      <input type="text" name="character" value={character} onChange={ e => setCharacter(e.target.value)} placeholder="Character"/>
      {/* <input type="text" name="password" value={password} onChange={ e => setPassword(e.target.value)} placeholder="Character"/> */}

      <button type="button" onClick={handleSubmit}>Continue</button>

      <div className="footer">
        <p>What do you want to read today?</p>
      </div>

      <p></p>

    </Container>
  );
}

export default ComicSearch;