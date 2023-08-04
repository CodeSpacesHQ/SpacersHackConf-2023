import { useEffect } from "react";
import { updateThemeColor, ThemeColor } from "../utils/Theme";
import Sponsors from "../components/Sponsors";
import ComingSoon from "../components/ComingSoon";
import Hero from "../components/Speakers/Hero";
import LineUp from "../components/Speakers/LineUp";

export const Speakers = () => {
  useEffect(() => {
    const themeColor: ThemeColor = "#5D5CD6"; // Set the theme color type explicitly

    updateThemeColor(themeColor); // Set the theme color for this specific page

    return () => {
      updateThemeColor("#f9f9f9"); // Set the default theme color when leaving this page
    };
  }, []);
  return (
    <>
      <Hero />
      <LineUp />
      <ComingSoon />
      <Sponsors />
    </>
  );
};
