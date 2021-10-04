import '../styles/components/Header.scss';
import logo from '../images/Rick_and_Morty_logo.png';

function Header(props) {
  return (
    <header className='header'>
      <img 
      src={logo} 
      alt='logo Rick and Morty' className='header__logo' />
    </header>
  );
}

export default Header;
