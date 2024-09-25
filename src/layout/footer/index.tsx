import './footer.scss';
import github from 'src/assets/img/github.svg';
import telegram from 'src/assets/img/telegram.svg';
import instagram from 'src/assets/img/instagram.svg';
import email from 'src/assets/img/email.svg';
import linkidin from 'src/assets/img/linkedin-icon.svg';
import FileResume from 'src/pages/home/components/resume/resume.pdf';
import photome from 'src/assets/img/img_me.png';

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="container footer__container">
          <div className="top__footer ">
            <ul className="top-list">
              <li className="top-item__list">
                <p className="top-item__title">+998 93 339 34 03</p>
                <p className="top-item__text">ergashevmurodila27@gmail.com</p>
              </li>
            </ul>
            <div className="footer__link__block ">
              <a
                className="hero__link"
                href="https://github.com/MurodillaErgashev03"
              >
                <img style={{ width: '25px' }} src={github} alt="github logo" />
              </a>
              <a
                className="hero__link linkkk"
                href="https://t.me/shavkatov1ch_03"
              >
                <img
                  style={{ width: '25px' }}
                  src={telegram}
                  alt="telegram logo"
                />
              </a>
              <a
                className="hero__link"
                href="https://www.instagram.com/shavkatov1ch_03/"
              >
                <img
                  style={{ width: '25px' }}
                  src={instagram}
                  alt="instagram logo"
                />
              </a>
              <a
                className="hero__link"
                href="mailto:ergashevmurodilla27@gmail.com"
              >
                <img style={{ width: '25px' }} src={email} alt="email logo" />
              </a>
              <a
                className="hero__link"
                href="https://www.linkedin.com/in/murodilla-ergashev-752078270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              >
                <img
                  style={{ width: '25px' }}
                  src={linkidin}
                  alt="linkedin-icon logo"
                />
              </a>
            </div>
          </div>
          <div className="bottom__footer">
            <ul className="bottom__list">
              <li className="bottom-item__list">
                <a className="footer__link" href="#hero">
                  Home
                </a>
              </li>
              <li className="bottom-item__list">
                <a className="footer__link" href="#texnology">
                  My Tech Stack
                </a>
              </li>
              <li className="bottom-item__list">
                <a className="footer__link" href="#about">
                  About me
                </a>
              </li>
              <li className="bottom-item__list">
                <a className="footer__link" href="#projects">
                  Portfolio
                </a>
              </li>
            </ul>
            <h4 className="footer__title">Copyright © 2023 M.Ergashev</h4>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
