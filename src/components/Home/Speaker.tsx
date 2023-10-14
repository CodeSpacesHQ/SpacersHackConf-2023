import { NavLink } from "react-router-dom";

import { Speakers } from "../../data/speakersData";
import { motion } from "framer-motion";
import { zoomAnimation } from "../../config/motion";

const Speaker = () => {
  return (
    <div className="pb-[98px]">
      <div className="w-full space-y-[22px]">
        <div>
          <h1 className="text-indigo-500 max-md:pr-[130px] text-lg sm:text-2xl font-normal font-gelion md:leading-[50px]">
            MEET OUR SPEAKERS FOR SPACERS HACK 2023
          </h1>
          <h2 className="text-black text-lg sm:text-[32px] lg:text-5xl font-semibold font-gelion uppercase leading-[62px] sm:leading-[92px]">
            Prestigious Speakers
          </h2>
          <NavLink
            to={"/speakers"}
            className="hover:underline block text-right w-full text-black text-base font-semibold font-inter leading-[50px]"
          >
            View All Speakers
          </NavLink>
        </div>
        <div className="flex justify-between flex-wrap w-full mt-[90px] gap-y-6 gap-x-6">
          {Speakers.slice(0, 6).map((item, index) => (
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
      </div>
    </div>
  );
};

export default Speaker;
