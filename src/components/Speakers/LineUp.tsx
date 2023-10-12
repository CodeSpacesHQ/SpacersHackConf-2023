import React, { useState } from "react";
const typeSpeakers = ["Speakers", "Jury", "Mentors", "Sponsors Representive"];
import { motion } from "framer-motion";
import { zoomAnimation } from "../../config/motion";
import { Speakers } from "../../data/speakersData";
import { Jury } from "../../data/juryData";
import { Mentors } from "../../data/mentorsData";
import { Sponsors } from "../../data/sponsorsData";

const LineUp: React.FC = () => {
  const [active, setActive] = useState<string>("Speakers");
  const [items, setItems] = useState(Speakers);

  const setActiveElement = (item: string) => {
    setActive(item);
    console.log(active);
  };
  const textColor = (item: string) => {
    if (item === "Sponsors Representive" && item !== active) {
      return "text-[#A6A6A6]";
    } else if (item === active) {
      return "text-[#5D5CD6]";
    } else {
      return "text-black";
    }
  };
  const typeSpeakersItems = () => {
    if (active === "Speakers") {
      setItems(Speakers);
    } else if (active === "Jury") {
      setItems(Jury);
    } else if (active === "Mentors") {
      setItems(Mentors);
    } else {
      setItems(Sponsors);
    }
  };

  return (
    <section className="relative bg-white px-[29px] sm:px-[64px] lg:px-[69.83px] xl:px-[102px] max-w-[1500px] mx-auto pt-20">
      <div className="flex sm:gap-8 sm:justify-start justify-between border-b-[#C2C2F0] border-b-[0.2px] w-full">
        {typeSpeakers.map((item, index) => {
          return (
            <p
              key={index}
              onClick={() => {
                setActiveElement(item);
                typeSpeakersItems();
              }}
              className={`font-gelion text-[16px]/[19px] tracking-[-0.02em] cursor-pointer pb-4 ${textColor(
                item
              )} ${active === item ? "border-b-[#5D5CD6] border-b-4" : ""} ${
                item === "All" ? "w-10" : ""
              }`}
            >
              {item}
            </p>
          );
        })}
      </div>
      <div className="flex justify-between max-lg:flex-wrap w-full mt-[90px] gap-y-6 gap-x-6">
        {items.map((item, index) => (
          <motion.div
            {...zoomAnimation()}
            key={index}
            className="w-full max-w-[300px] lg:max-w-[397px] h-[394px] bg-zinc-300 rounded-[18px]"
          />
        ))}
      </div>
    </section>
  );
};

export default LineUp;
