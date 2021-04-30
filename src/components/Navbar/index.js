import './styles.scss';
import LogoImg from '../../assets/img/logo.png';

const NavBar = () => {
  return (
    <div className="navWrapper">
      <div className="logoWrapper">
        <img src={LogoImg} alt="LogoImg" />
      </div>

      <div className="contactBtnWrapper">
        <a href="#contact">Contact</a>
      </div>
    </div>
  )
}

export default NavBar;