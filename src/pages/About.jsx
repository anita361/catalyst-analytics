import Navbar from "../components/Navbar";
import AboutHero from "../components/about/AboutHero";
import AboutStats from "../components/about/AboutStats";
import AboutStory from "../components/about/AboutStory";
import Expertise from "../components/about/Expertise";
import TrackRecord from "../components/about/TrackRecord";
import OurValue from "../components/about/OurValue";
import AboutCTA from "../components/about/AboutCTA";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />
      <AboutHero />
      <AboutStats />
      <AboutStory />
      <Expertise />
      <TrackRecord />
      <OurValue />
      <AboutCTA />
      <Footer />
    </>
  );
}

export default About;