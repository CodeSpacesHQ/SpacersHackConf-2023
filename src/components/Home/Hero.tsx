import { NavLink } from "react-router-dom";

import splash from "../../assets/heroSplash.webp";
import splashBlue from "../../assets/splash.webp";
import art from "../../assets/art.webp";
import { star2 } from "../../assets/icon";
import hero from "../../assets/hero.webp";
import heroSmall from "../../assets/heroSmall.webp";
import play from "../../assets/play.svg";

const Hero = () => {
  return (
    <>
      <div className="absolute top-0 left-0 w-full bg-[#5D5CD6] bg-cover h-20 sm:h-28"></div>
      <section className="relative bg-center bg-[url('../assets/heroPattern.svg')] bg-cover w-full overflow-hidden">
        <div className="mt-[82px] max-w-[1500px] mx-auto px-[102px] max-lg:px-16 max-lg:mb-9 max-md:px-7">
          <div className="flex flex-col lg:items-center w-full ">
            <div className="font-gelion lg:text-center text-white text-[48px]/[55px] sm:text-[75px] lg:text-6xl/[92px] font-bold uppercase sm:leading-[92px] tracking-[3.75px] mb-[5px]">
              Spacer’s <br className="lg:hidden" /> Hack Conf{" "}
              <br className="sm:hidden" />
              <span className="inline-flex items-center">
                2
                <div className="relative">
                  <div className="w-16 h-16 border-2 border-dashed p-4 rounded-full border-violet-200 animate-spin-slow"></div>
                  <div className="absolute top-[8px] left-[8px] bg-white rounded-full mx-auto">
                    <img className="w-12 h-12e" src={art} alt="art" />
                  </div>
                </div>
                23
              </span>
            </div>
            <p className="lg:text-center sm:w-4/5 lg:w-3/5 m-x-auto text-[#f1f1f1] font-dm-sans text-[13px]/[25px] sm:text-[15px] font-normal leading-[30px] mb-[36px]">
              Join us for a day of learning, connecting with other players in
              the industry, and unwinding. Get ready to immerse yourself in an
              inspiring atmosphere filled with Inspiration, Integration,
              Innovation, and fun.
            </p>
            <div className="mb-[46px] flex sm:justify-start lg:justify-center gap-x-5 max-sm:gap-y-2 max-sm:flex-col">
              <a href="https://forms.gle/ZztYnDQmu8MMTPdE9" target="_blank">
                <button
                  className="hover:bg-indigo-500 bg-[#fefefe] hover:border-indigo-500 hover:text-[#fefefe]
               rounded-[38px] w-[282px] py-5 text-center font-poppins text-indigo-500 text-[16px] font-semibold"
                >
                  REGISTER FOR HACKATHON
                </button>
              </a>
              <NavLink to={"/schedule"}>
                <button
                  className="hover:bg-indigo-500 bg-[#fefefe] hover:border-indigo-500 hover:text-[#fefefe]
               rounded-[38px] w-[282px] py-5 text-center font-poppins text-indigo-500 text-[16px] font-semibold"
                >
                  VIEW SCHEDULE
                </button>
              </NavLink>
            </div>
          </div>
          <a
            href="https://youtu.be/LmbwpDKKoLQ"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group"
          >
            <img
              src={hero}
              alt="hero image"
              className="w-full m-auto max-lg:hidden"
            />
            <img
              src={heroSmall}
              alt="hero image"
              className="w-full lg:hidden rounded-[20px]"
            />
            <div
              className="absolute bottom-[50%] left-[50%] transition opacity-0 rounded-full flex items-center justify-center w-[134.93px] h-[136px] drop-shadow-md right-5 group-hover:opacity-100"
              style={{
                transform: "translate(-50%, 50%)",
              }}
            >
              <img
                src={play}
                className="object-cover hover:scale-110"
                alt="play icon"
              />
            </div>
          </a>
        </div>
        <div className="absolute -bottom-[70px] max-sm:-bottom-[60px] -right-[10px]">
          <img
            src={splashBlue}
            alt={`splash pattern`}
            className="object-cover max-sm:w-[346px]"
          />
        </div>
        <div className="absolute bottom-[0] left-[0] max-lg:hidden">
          <img src={splash} alt={`splash pattern`} className="object-cover" />
        </div>
        <div className="absolute top-[9%] sm:top-[19%] right-[7%] w-[20px] sm:w-[40px] object-cover max-lg:hidden">
          <img
            src={star2}
            alt={`star icon`}
            className="object-cover w-[32px] h-auto animate-float"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
