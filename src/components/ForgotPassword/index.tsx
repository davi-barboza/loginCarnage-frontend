import { Container } from './styles';
import carnageName from '../../assets/carnage-name.png';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import api from '../../services/api';

const ForgotPassword: React.FC = () => {
  const router = useRouter()
  
  const [email, setEmail] = useState('');

  async function forgotPassword() {
    const data = {
      email: email,
    }

    api.post('api/forgot_password', data)
      .then(response => {
        if (response.status === 200) {
          router.push('/');
        }
      })
      .catch(error => {
        return error;
      })
  }

  return (
    <Container method="POST">

      <h2>Digit your e-mail</h2>

      <input type="email" name="email" value={email} onChange={ e => setEmail(e.target.value)} placeholder="e-mail"/>

      <button type="button" onClick={forgotPassword}>Send</button>

      <div className="loginFooter">
        <p>Already have an account?</p>

        <Link href="/">Login</Link>
      </div>

      <img className="carnageName" src={carnageName} alt="carnageName" />
    </Container>
  );
}

export default ForgotPassword;