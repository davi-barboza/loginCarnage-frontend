import Head from 'next/head'
import RegisterBox from '../components/Register'
import { Container } from '../styles/pages/Register'

export default function Register() {
  return (
    <Container>
      <Head>
        <title>Carnage | Register</title>
      </Head>

      <main>
        <RegisterBox />
      </main>

    </Container>
  )
}
