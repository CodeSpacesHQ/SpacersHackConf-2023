import { useEffect } from "react";
import { ThemeColor, updateThemeColor } from "../utils/Theme";
import Faq from "../components/Home/Faq/Body";
import Sponsors from "../components/Sponsors";
import ComingSoon from "../components/ComingSoon";
import Hero from "../components/Home/Hero";
import Goals from "../components/Home/Goals";
import Services from "../components/Home/Services";
import Forward from "../components/Home/Forward";

export const Home = () => {
  useEffect(() => {
    const themeColor: ThemeColor = "#5D5CD6"; // Set the theme color type explicitly

    updateThemeColor(themeColor); // Set the theme color for this specific page

    return () => {
      updateThemeColor("#5D5CD6"); // Set the default theme color when leaving this page
    };
  }, []);
  return (
    <>
      <Hero />
      <Goals />
      <Forward />
      <Services />
      <ComingSoon />
      <div className="mt-2 sm:mt-9 lg:mt-14"></div>
      <Sponsors />
      <Faq />
    </>
  );
};
