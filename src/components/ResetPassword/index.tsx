import { Container } from './styles';
import carnageFace from '../../assets/carnage-face.png';
import carnageName from '../../assets/carnage-name.png';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import api from '../../services/api';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const ResetPassword: React.FC = () => {
  const router = useRouter()
  
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [password, setPassword] = useState('');


  async function handleSubmit() {
    const data = {
      email: email,
      token: token,
      password: password,
    }

    api.post('api/reset_password', data)
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
      {/* <img className="carnageFace" src={carnageFace} alt="carnageFace" /> */}

      <h2>Reset password</h2>

      <input type="email" name="email" value={email} onChange={ e => setEmail(e.target.value)} placeholder="e-mail"/>
      <input type="token" name="text" value={token} onChange={ e => setToken(e.target.value)}placeholder="token"/>
      <input type="password" name="password" value={password} onChange={ e => setPassword(e.target.value)}placeholder="password"/>

      <button type="button" onClick={handleSubmit}>Reset</button>

      <div className="resetFooter">
        <p>Already have an account?</p>

        <Link href="/">Login</Link>
      </div>

      <img className="carnageName" src={carnageName} alt="carnageName" />
    </Container>
  );
}

export default ResetPassword;