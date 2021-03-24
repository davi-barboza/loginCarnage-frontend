import Head from 'next/head'
import { Container } from '../styles/pages/Comics'

import { useMarvel } from '../context/MarvelResponseContext';
import { useEffect } from 'react';
import BannerChar from '../components/BannerChar';
import ComicCard from '../components/ComicCard';

const comics: React.FC = () => {
  const { charName, comics, setComics, thumbnailChar, charDescription,
          idChar, timeStamps, publicKey, hash } = useMarvel();

  useEffect(() => {
    fetch(`https://gateway.marvel.com:443/v1/public/characters/${idChar}/comics?ts=${timeStamps}&apikey=${publicKey}&hash=${hash}`)
      .then(response => { return response.json() })
      .then(response => {
        setComics(response.data.results)
        console.log(response.data.results)
      })
      .catch(error => {
        return error;
      })  
 },[])


  return (
    <Container>
      <Head>
        <title>{charName} | Comics</title>
      </Head>

      <main>
        <BannerChar backgroundImage={thumbnailChar} charName={charName} charDescription={charDescription}/>

        <section>
          {
            comics ?
            comics.map(comic => (
              <ComicCard key={comic.id}
                backgroundImage={thumbnailChar}
                title={comic.title}
                thumbnail={comic.thumbnail.path + '.' + comic.thumbnail.extension}
                description={comic.description}
              />               

            )): <></>
          }          
        </section>
      </main>

    </Container>
  )
}

export default comics;