import { Container } from './styles';
import carnageFace from '../../assets/carnage-face.png';
import carnageName from '../../assets/carnage-name.png';
import Link from 'next/link';

const RegisterBox: React.FC = () => {
  return (
    <Container method="POST">
      <img className="carnageFace" src={carnageFace} alt="carnageFace" />

      <h2>Create Account</h2>

      <input type="email" name="email" />
      <input type="text" name="password" />

      <button type="submit">Register</button>

      <div className="registerFooter">
        <p>Already have an account?</p>
        
        <Link href="/">Login</Link>
      </div>
      <img className="carnageName" src={carnageName} alt="carnageName" />
    </Container>
  );
}

export default RegisterBox;