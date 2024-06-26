import { useEffect } from "react";
import { ThemeColor, updateThemeColor } from "../utils/Theme";
import Sponsors from "../components/Sponsors";
import ComingSoon from "../components/ComingSoon";
import Hero from "../components/Speakers/Hero";
import LineUp from "../components/Speakers/LineUp";

export const Speakers = () => {
  useEffect(() => {
    const themeColor: ThemeColor = "#F8F8FD"; // Set the theme color type explicitly

    updateThemeColor(themeColor); // Set the theme color for this specific page

    return () => {
      updateThemeColor("#F8F8FD"); // Set the default theme color when leaving this page
    };
  }, []);
  return (
    <>
      <Hero />
      <LineUp />
      <div className="mb-2 sm:mb-9 lg:mb-14"></div>
      <ComingSoon />
      <div className="mt-2 sm:mt-9 lg:mt-14"></div>
      <Sponsors />
    </>
  );
};
