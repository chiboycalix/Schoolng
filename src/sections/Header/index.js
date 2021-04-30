import './styles.scss';
import NavBar from '../../components/Navbar';
import { HiArrowNarrowDown } from 'react-icons/all';
import GooglePlay from '../../assets/img/google-play.svg';
import Students from '../../assets/img/headerimg.png';

import { AiFillApple } from 'react-icons/all';

const Header = () => {
  return (
    <div className="headerWrapper">
      <NavBar />

      <div className="headerContentWrapper">
        <div className="headerContentWrapperLeft">
          <div className="headerContent">
            <p className="schooolnText">Schooln.ng</p>
            <h1 className="schoolnHeaderText">Who said Schooling can't be fun?</h1>

            <p className="schooolnParagraph">Make friends and connect with students from schools all around you</p>

            <div className="btwWrapper">
              <a className="btnGooglePlay" href="https://play.google.com/store/apps/details?id=com.android_app.schooln.ng" target="_blank" rel="noreferrer">
                <img src={GooglePlay} alt="GooglePlay" />
                <div className="textWrapper">
                  <p>ANDROID APP ON</p>
                  <span>
                    Gooogle Play
                </span>
                </div>

              </a>
              <a className="btnAppleStore" href="https://apple.com">

                <AiFillApple />
                <span>
                  Coming Soon
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="headerContentWrapperRight">
          <img src={Students} alt="Students" />
          <div className="gistWrapper">
            <p>Get materials resources from within and outside your institution.</p>
          </div>
          <div className="whiteCircle"></div>
          <div className="orangeCircle"></div>
        </div>
      </div>

      <div className="scrollbuttonWrapper">
        <p>Scroll Down</p>
        <span><HiArrowNarrowDown /></span>
      </div>

    </div>
  )
}

export default Header;