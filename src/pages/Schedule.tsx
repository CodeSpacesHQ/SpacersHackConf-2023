import { useEffect } from "react";
import { ThemeColor, updateThemeColor } from "../utils/Theme";
import ComingSoon from "../components/ComingSoon";
import Hero from "../components/Schedule/Hero";
import Calendar from "../components/Schedule/Calendar";

export const Schedule = () => {
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
      <ComingSoon />
      <Calendar />
    </>
  );
};
