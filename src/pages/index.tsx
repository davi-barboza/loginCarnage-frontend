import Head from 'next/head'
import LoginBox from '../components/Login'
import { Container } from '../styles/pages/Home'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Carnage | Login</title>
      </Head>

      <main>
        <LoginBox />
      </main>

    </Container>
  )
}
