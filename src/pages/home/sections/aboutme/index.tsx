import './about.scss';
import aboutme from 'src/assets/img/aboutme.webp'

function AboutMe() {
  return (
    <section id="about" className="about">
      <div className="container about-container">
        <div  className="about-left-block">
          <img src={aboutme} alt="About me img" />
        </div>
        <div className="about-right-block">
          <h2>About me</h2>
          <p>
            I am a frontend developer at XCDM IT, where I work on building
            responsive and engaging user interfaces. My experience includes a
            solid foundation in HTML, CSS, Sass, JavaScript, and frameworks like
            React and Redux. During my time at XCDM, I’ve contributed to various
            projects, honing my skills in animations, responsive design, and
            modern UI/UX practices. I’m also experienced with Tailwind and
            Bootstrap, making styling efficient and scalable. I'm continuously
            expanding my portfolio and aim to deepen my expertise in web
            development to become a more accomplished developer.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
