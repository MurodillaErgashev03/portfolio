import AboutMe from './sections/aboutme';
import Contacts from './sections/contacts';
import Hero from './sections/hero';
import Projects from './sections/projects';
import Texnology from './sections/texnology';

function HomePage() {
  return (
    <div>
      <Hero />
      <Texnology />
      <AboutMe />
      <Projects />
      <Contacts />
    </div>
  );
}

export default HomePage;
