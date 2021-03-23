import Cookies from 'js-cookie';
import Head from 'next/head'
import { Container } from '../styles/pages/Comic'
import { useRouter } from 'next/router';


const comic: React.FC = () => {
  const router = useRouter()

  return (
    <Container>
      <Head>
        <title>Marvel | Comic</title>
      </Head>

      <main>
        <h2>Carnage</h2>
      </main>

    </Container>
  )
}

export default comic;