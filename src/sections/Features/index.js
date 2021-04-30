import './styles.scss';
import GooglePlay from '../../assets/img/google-play.svg';
import FeaturesPhone from '../../assets/img/features-phone-one.png';
import { AiFillApple } from 'react-icons/all';

const Features = () => {
  return (
    <div className="featuresWrapper">
      <div className="featuresHeader">
        <h1>App features</h1>
        <p>Schooln.ng brings all of your different social media apps together on a single platform. Providing you with the best and more focused way of performing your regular social media activities.</p>
      </div>
      <div className="featuresContent">
        <div className="featuresContentLeft">
          <div className="featuresCard">
            <span>1</span>
            <p>Schooln.ng allows its user share information/gist from their school and personal life with others on the platform.</p>
          </div>
          <div className="featuresCard">
            <span>3</span>
            <p>Schooln.ng connects you with peers within same institution as well as across other institutions on the app by sending peer request, like, share and comment on gist, flag down false information.</p>
          </div>

        </div>
        <div className="featuresContentCenter">
          <img src={FeaturesPhone} alt="FeaturesPhone" />
        </div>
        <div className="featuresContentRight">
          <div className="featuresCard">
            <span>2</span>
            <p>Schooln.ng empower students to build and grow businesses around and beyond their schools while growing academically through peer-to-learning.</p>
          </div>
          <div className="featuresCard">
            <span>4</span>
            <p>Schooln.ng promotes community creation and connectivity among students and their alumni through interest groups.</p>
          </div>
        </div>
      </div>

      <div className="appDownloadWrapper">
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
  )
}

export default Features;