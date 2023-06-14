import Hero from '../components/LandingPage/Hero/Hero';
import AppBar from '../components/LandingPage/AppBar';
import Services from '../components/LandingPage/Services';
import Offers from '../components/LandingPage/Offers';
import Contact from '../components/LandingPage/Contact';
import Intro from '../components/LandingPage/Intro';

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
