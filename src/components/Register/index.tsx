import { Container } from './styles';
import carnageFace from '../../assets/carnage-face.png';
import carnageName from '../../assets/carnage-name.png';
import Link from 'next/link';
import { useState } from 'react';
import  api  from '../../services/api';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const RegisterBox: React.FC = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit() {
    const data = {
      email: email,
      password: password,
    }

    api.post('api/users', data)
      .then(response => {
        if (response.status === 200) {
          Cookies.set('token', String(response.data.token));
          Cookies.set('userId', String(response.data.user.id));

          router.push('/showUsers')
        } else {
          alert('Error when creating users');
        }
      })
  }

  return (
    <Container method="POST">
      <img className="carnageFace" src={carnageFace} alt="carnageFace" />

      <h2>Create Account</h2>

      <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />

      <button type="button" onClick={handleSubmit}>Register</button>

      <div className="registerFooter">
        <p>Already have an account?</p>

        <Link href="/">Login</Link>
      </div>
      <img className="carnageName" src={carnageName} alt="carnageName" />
    </Container>
  );
}

export default RegisterBox;