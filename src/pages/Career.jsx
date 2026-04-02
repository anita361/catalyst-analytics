import Navbar from "../components/Navbar";
import Careerhero from "../components/Career/Careerhero";
import CareerFilter from "../components/Career/CareerFilter";
import CareerJobs from "../components/Career/CareerJobs";
import CareerCTA from "../components/Career/CareerCTA";
import Footer from "../components/Footer";

function Career() {
  return (
    <>
      <Navbar />
      <Careerhero />
      <CareerFilter />
      <CareerJobs />
      <CareerCTA />
      <Footer />
    </>
  );
}

export default Career;