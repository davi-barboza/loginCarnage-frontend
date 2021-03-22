import { Container } from './styles';
import carnageFace from '../../assets/carnage-face.png';
import carnageName from '../../assets/carnage-name.png';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import api from '../../services/api';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const LoginBox: React.FC = () => {
  const router = useRouter()

  const token = Cookies.get('token');
  const userId = Cookies.get('userId');
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (token && userId) {
      router.push('/showUsers');
    }
  },[]);

  async function handleSubmit() {
    const data = {
      email: email,
      password: password,
    }

    api.post('api/auth', data)
      .then(response => {
        if (response.status === 200) {
          Cookies.set('token', String(response.data.token));
          Cookies.set('userId', String(response.data.user.id));
        
          router.push('/showUsers');
        }
      })
      .catch(error => {
        return error;
      })
  }

  return (
    <Container method="POST">
      <img className="carnageFace" src={carnageFace} alt="carnageFace" />

      <h2>Login</h2>

      <input type="email" name="email" value={email} onChange={ e => setEmail(e.target.value)}/>
      <input type="password" name="password" value={password} onChange={ e => setPassword(e.target.value)}/>

      <button type="button" onClick={handleSubmit}>Get it</button>

      <div className="loginFooter">
        <p>Already have an account?</p>

        <Link href="/register">Register</Link>
      </div>

      <img className="carnageName" src={carnageName} alt="carnageName" />
    </Container>
  );
}

export default LoginBox;