import Cookies from 'js-cookie';
import Head from 'next/head'
import { Container } from '../styles/pages/ShowUsers'
import withPrivateRoute from './withPrivateRoute';
import { useRouter } from 'next/router';


const showUsers: React.FC = () => {
  const router = useRouter()

  function logout() {
    Cookies.remove('token');
    Cookies.remove('userId');

    router.push('/');
  }

  return (
    <Container>
      <Head>
        <title>Carnage | Home</title>
      </Head>

      <main>
        <h2>Carnage</h2>

        <p>{}</p>
        <h1 onClick={logout}>Logout</h1> 
      </main>

    </Container>
  )
}

export default withPrivateRoute(showUsers);