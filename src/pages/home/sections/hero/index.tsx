import './hero.scss';
import './star.scss'; 
import 'aos/dist/aos.css';
import github from 'src/assets/img/github.svg';
import telegram from 'src/assets/img/telegram.svg';
import instagram from 'src/assets/img/instagram.svg';
import email from 'src/assets/img/email.svg';
import linkidin from 'src/assets/img/linkedin-icon.svg';
import FileResume from 'src/pages/home/components/resume/resume.pdf';
import photome from 'src/assets/img/img_me.png';

function Hero() {
  return (
    <div>
      <section id="hero" className="hero">
        <div className="header-stars">
          <div className="header-stars-content">
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
          </div>
        </div>
        <div className="container hero__container">
          <div className="hero__block">
            <div>
              <h2 className="hero__text">
                <span className="hero__span">I</span> m
                <span className="hero__span"> Frontent developer</span>
              </h2>
              <h1 className="hero__title ">
                <span className="hero-item__span">E</span>
                <span className="hero-item__span">r</span>
                <span className="hero-item__span">g</span>
                <span className="hero-item__span">a</span>
                <span className="hero-item__span">s</span>
                <span className="hero-item__span">h</span>
                <span className="hero-item__span">e</span>
                <span className="hero-item__span">v</span>
                <span className="hero-item__span-1"></span>
                <span className="hero-item__span">M</span>
                <span className="hero-item__span">u</span>
                <span className="hero-item__span">r</span>
                <span className="hero-item__span">o</span>
                <span className="hero-item__span">d</span>
                <span className="hero-item__span">i</span>
                <span className="hero-item__span">l</span>
                <span className="hero-item__span">l</span>
                <span className="hero-item__span">a</span>
              </h1>
              <h3 className="hero-item__text">
                I create websites and web applications
              </h3>
              <div className="hero-link__block">
                <a
                  className="hero__link"
                  href="https://github.com/MurodillaErgashev03"
                >
                  <img src={github} alt="github logo" />
                </a>
                <a
                  className="hero__link linkkk"
                  href="https://t.me/shavkatov1ch_03"
                >
                  <img src={telegram} alt="telegram logo" />
                </a>
                <a
                  className="hero__link"
                  href="https://www.instagram.com/shavkatov1ch_03/"
                >
                  <img src={instagram} alt="instagram logo" />
                </a>
                <a
                  className="hero__link"
                  href="mailto:ergashevmurodilla27@gmail.com"
                >
                  <img src={email} alt="email logo" />
                </a>
                <a
                  className="hero__link"
                  href="https://www.linkedin.com/in/murodilla-ergashev-752078270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                >
                  <img src={linkidin} alt="linkedin-icon logo" />
                </a>
              </div>
              <div className="download">
                <a href={FileResume} download className="download-text">
                  Download my rezume
                </a>
              </div>
            </div>
            <div >
              <img className="hero-big__img " src={photome} alt="Photo me" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
