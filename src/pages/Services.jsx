import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicesHero from "../components/ServicesHero";
import ServicesGrid from "../components/ServicesGrid";
import Industries from "../components/Industries";


function Services() {
  return (
    <>
      <Navbar />
      <ServicesHero />
      <ServicesGrid />
      <Industries />
      <Footer />
    </>
  );
}

export default Services;