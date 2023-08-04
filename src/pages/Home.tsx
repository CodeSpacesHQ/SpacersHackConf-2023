import { useEffect } from "react";
import { updateThemeColor, ThemeColor } from "../utils/Theme";
import Faq from "../components/Home/Faq/Body";
import Sponsors from "../components/Home/Sponsors";
import ComingSoon from "../components/Home/ComingSoon";
import Hero from "../components/Home/Hero";
import Goals from "../components/Home/Goals";
import Services from "../components/Home/Services";

export const Home = () => {
  useEffect(() => {
    const themeColor: ThemeColor = "#f9f9f9"; // Set the theme color type explicitly

    updateThemeColor(themeColor); // Set the theme color for this specific page

    return () => {
      updateThemeColor("#f9f9f9"); // Set the default theme color when leaving this page
    };
  }, []);
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
