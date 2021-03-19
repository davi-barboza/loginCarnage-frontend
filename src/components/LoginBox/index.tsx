import { Container } from './styles';
import carnageFace from '../../assets/carnage-face.png';
import carnageName from '../../assets/carnage-name.png';
import Link from 'next/link';

const LoginBox: React.FC = () => {
  return (
    <Container method="POST">
      <img className="carnageFace" src={carnageFace} alt="carnageFace" />

      <h2>Login</h2>

      <input type="email" name="email" />
      <input type="text" name="password" />

      <button type="submit">Get it</button>

      <div className="loginFooter">
        <p>Already have an account?</p>

        <Link href="/register">Register</Link>
      </div>

      <img className="carnageName" src={carnageName} alt="carnageName" />
    </Container>
  );
}

export default LoginBox;