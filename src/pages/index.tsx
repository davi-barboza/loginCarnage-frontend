import Head from 'next/head'
import LoginBox from '../components/LoginBox'
import { Container } from '../styles/pages/Home'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>

      <main>
        <LoginBox />
      </main>

    </Container>
  )
}
