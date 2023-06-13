import Hero from './Hero/Hero';
import AppBar from './AppBar';
import Services from './Services';
import Offers from './Offers';
import Contact from './Contact';
import Intro from './Intro';

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <AppBar />
      <Intro/>
      <Services />
      <Offers />
      <Contact />
    </div>
  );
};

export default LandingPage;
