import Head from 'next/head'
import ForgotPass from '../components/ForgotPassword'
import { Container } from '../styles/pages/Home'

export default function ForgotPassword() {
  return (
    <Container>
      <Head>
        <title>Carnage | Forgot Password</title>
      </Head>

      <main>
        <ForgotPass />
      </main>

    </Container>
  )
}
