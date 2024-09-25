import './texnology.scss';
import html from 'src/assets/img/html.svg';
import css from 'src/assets/img/css.svg';
import js from 'src/assets/img/js.svg';
import sass from 'src/assets/img/sass.svg';
import git from 'src/assets/img/git.svg';
import github from 'src/assets/img/github1.svg';
import react from 'src/assets/img/react.svg';
import typescript from 'src/assets/img/typescript.png';

function Texnology() {
  return (
    <div>
      <section id="texnology" className="texnology">
        <div className="container icon__container">
          <h2 className="texnology__title">
            Technologies I’ve been working with recently.
          </h2>

          <div className="icon__block">
            <div className="tech-icon">
              <img className="icon-img" src={html} alt="Html logo" />
            </div>

            <div className="tech-icon">
              <img className="icon-img" src={css} alt="Css logo" />
            </div>

            <div className="tech-icon">
              <img className="icon-img" src={js} alt="JS logo" />
            </div>

            <div className="tech-icon">
              <img className="icon-img" src={sass} alt="Sass logo" />
            </div>

            <div className="tech-icon">
              <img className="icon-img" src={git} alt="Git logo" />
            </div>

            <div className="tech-icon">
              <img className="icon-img" src={github} alt="Github logo" />
            </div>

            <div className="tech-icon">
              <img className="icon-img" src={react} alt="React logo" />
            </div> 

            <div className="tech-icon">
              <img
                className="icon-img"
                src={typescript}
                alt="Typescript logo"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Texnology;
