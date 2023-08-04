import { services } from "../../data/services";
import {
  first,
  second,
  third,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  ten,
  eleven,
  twelve,
} from "../../assets/stickynotes";
const imagesArray = [
  first,
  second,
  third,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  ten,
  eleven,
  twelve,
];
import AnimateWords from "../../config/textAnimation";

const Services = () => {
  return (
    <section className="pt-[102px] pb-[98px] mx-auto max-w-[1500px] px-7 sm:px-16 xl:px-[102px] lg:px-[65px]">
      <div className=" font-gelion mb-[127px]">
        <h2 className="mb-2 text-sm uppercase text-indigo-500">
          <AnimateWords text="WHAT TO EXPECT" />
        </h2>
        <h3 className="font-semibold text-[32px] mb-3 max-w-[360px]">
          What we engage in as a{" "}
          <span className="text-indigo-500 color-slide">community</span>
        </h3>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ id, icon, title, details }) => (
            <div key={id}>
              <div className="relative -left-7">
                <img className="w-36" src={icon} alt="Services icons" />
              </div>
              <h4 className="-mt-5 font-medium text-[24px] mb-[9px] line-clamp-1">
                <AnimateWords text={title} />
              </h4>
              <p className="text-[#737373] leading-6">{details}</p>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="h-[599px] bg-gradient-to-b from-slate-50 to-slate-50 rounded-[28px]">
        <div>
          {imagesArray.map((imgSrc, index) => (
            <img
              key={index}
              src={imgSrc}
              alt="Sticky notes"
              className="w-[270px] h-auto"
            />
          ))}
        </div>
      </div> */}
    </section>
  );
};

export default Services;
