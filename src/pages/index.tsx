import Head from 'next/head'
import ComicSearch from '../components/ComicSearch'
import { Container } from '../styles/pages/Home'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Marvel | Home</title>
      </Head>

      <main>
        <div className="overlay" />
        
        <ComicSearch />
      </main>
 
    </Container>
  )
}
