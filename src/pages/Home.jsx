import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Brands from "../components/Brands";
import Services from "../components/Services";
import WhyChoose from "../components/WhyChoose";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Brands />
      <Services />
      <WhyChoose />
      <Testimonials />
      <FAQ />
      <Footer />
    </>
  );
}

export default Home;