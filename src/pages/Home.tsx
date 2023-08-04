import Faq from "../components/Home/Faq/Body";
import Sponsors from "../components/Sponsors";
import ComingSoon from "../components/ComingSoon";
import Hero from "../components/Home/Hero";
import Goals from "../components/Home/Goals";
import Services from "../components/Home/Services";

export const Home = () => {
  return (
    <>
      <Hero />
      <Goals />
      <Services />
      <ComingSoon />
      <Sponsors />
      <Faq />
    </>
  );
};
