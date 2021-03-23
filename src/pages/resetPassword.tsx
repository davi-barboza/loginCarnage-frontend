import Head from 'next/head'
import ResetPass from '../components/ResetPassword'
import { Container } from '../styles/pages/Home'

export default function ResetPassword() {
  return (
    <Container>
      <Head>
        <title>Carnage | Forgot Password</title>
      </Head>

      <main>
        <ResetPass />
      </main>

    </Container>
  )
}
