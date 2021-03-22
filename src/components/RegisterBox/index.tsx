import { Container } from './styles';
import carnageFace from '../../assets/carnage-face.png';
import carnageName from '../../assets/carnage-name.png';
import Link from 'next/link';
import { useState } from 'react';
import  api  from '../../services/api';
import axios from 'axios';

const RegisterBox: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit() {
    const data = {
      email: email,
      password: password,
    }

    api.post('users', data)
      .then(response => {
        if (response.status === 200) {
          window.location.href = '/showUsers'
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