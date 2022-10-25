import { Link } from 'react-router-dom';
import { Container } from './styles';
import logo from '../../assets/logo.svg';
import { CustomAvatar } from '../Avatar';

export function Header() {
  return (
    <Container>
      <Link to="/home">
        <img src={logo} alt="Logo da @socialMedia" />
      </Link>

      <CustomAvatar avatar='https://github.com/ganovais.png' name="Gabriel" username='ganovais' />
    </Container>
  );
}
