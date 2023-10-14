import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { zoomAnimation } from "../../config/motion";
import { Speakers } from "../../data/speakersData";
import { Jury } from "../../data/juryData";
import { Mentors } from "../../data/mentorsData";
import { Sponsors } from "../../data/sponsorsData";

const typeSpeakers = ["Speakers", "Jury", "Mentors", "Sponsors Representive"];

const LineUp: React.FC = () => {
  const [active, setActive] = useState<string>("Speakers");
  const [items, setItems] = useState<any[]>(Speakers); // Initialize items with the first dataset

  const setActiveElement = (item: string) => {
    setActive(item);
  };

  useEffect(() => {
    // Update items when the active state changes
    if (active === "Speakers") {
      setItems(Speakers);
    } else if (active === "Jury") {
      setItems(Jury);
    } else if (active === "Mentors") {
      setItems(Mentors);
    } else {
      setItems(Sponsors);
    }
  }, [active]);

  const textColor = (item: string) => {
    if (item === "Sponsors Representive" && item !== active) {
      return "text-[#A6A6A6]";
    } else if (item === active) {
      return "text-[#5D5CD6]";
    } else {
      return "text-black";
    }
  };

  return (
    <section className="relative bg-white px-[29px] sm:px-[64px] lg:px-[69.83px] xl:px-[102px] max-w-[1500px] mx-auto pt-20">
      <div className="flex sm:gap-8 sm:justify-start justify-between border-b-[#C2C2F0] border-b-[0.2px] w-full">
        {typeSpeakers.map((item, index) => (
          <p
            key={index}
            onClick={() => {
              setActiveElement(item);
            }}
            className={`font-gelion text-[16px]/[19px] tracking-[-0.02em] cursor-pointer pb-4 ${textColor(
              item
            )} ${active === item ? "border-b-[#5D5CD6] border-b-4" : ""} ${
              item === "All" ? "w-10" : ""
            }`}
          >
            {item}
          </p>
        ))}
      </div>
      <div className="flex justify-between flex-wrap w-full mt-[90px] gap-y-6 gap-x-6">
        {items.map((item, index) => (
          <motion.div
            {...zoomAnimation()}
            key={index}
            className="w-full relative cursor-pointer group sm:w-[48%] max-md:h-[352px] max-h-[364px] xl:max-h-[330px] overflow-hidden xl:w-[31%] bg-zinc-300 rounded-[18px]"
          >
            <img
              src={item.img}
              alt={item.name}
              className="object-cover w-full"
            />
            <div
              className="absolute child group-hover:translate-y-0 translate-y-[72%] transform transition-all ease-in-out duration-500 left-0 top-0 bottom-0 right-0"
              style={{
                background:
                  "linear-gradient(5deg, #01132C -14.23%, rgba(1, 19, 44, 0.00) 171.83%)",
              }}
            >
              <div className="p-3 text-ellipsis">
                <h3 className="text-center text-xl font-bold font-dm-sans text-[moccasin] mt-[20px]">
                  {item.name}
                </h3>
                <p className="text-base font-semibold text-center text-white uppercase font-dm-sans">
                  {item.title}
                </p>
                <p className="text-center text-sm mt-[16px] font-normal font-poppins text-white sm:mt-[20px]">
                  {item.about}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LineUp;
