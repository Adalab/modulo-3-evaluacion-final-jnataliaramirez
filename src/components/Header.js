import '../styles/components/Header.scss';
import logo from '../images/Rick_and_Morty_logo.png';

function Header(props) {
  return (
    <header className='header'>
      <img 
      src={logo} 
      alt='logo Rick and Morty' className='header__logo' />
      <h1>By Natalia Ramirez Parra 💜</h1>

    </header>
  );
}

export default Header;
