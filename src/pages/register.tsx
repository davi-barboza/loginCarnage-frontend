import Head from 'next/head'
import RegisterBox from '../components/RegisterBox'
import { Container } from '../styles/pages/Register'

export default function Register() {
  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>

      <main>
        <RegisterBox />
      </main>

    </Container>
  )
}
