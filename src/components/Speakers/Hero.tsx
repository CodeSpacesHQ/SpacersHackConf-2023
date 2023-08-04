import splash from "../../assets/heroSplash.png";
import art from "../../assets/art.png";
import { star2 } from "../../assets/icon";

const Hero = () => {
  return (
    <>
      <section className="relative bg-center bg-[url('../assets/speakerPattern.svg')] bg-cover w-full overflow-hidden">
        <div className="pt-[198px] pb-[204px] max-w-[1500px] px-[102px] max-lg:px-16 max-lg:mb-9 max-md:px-7">
          <div className="flex items-center justify-center align-middle w-full ">
            <h1 className="text-indigo-500 font-gelion text-5xl sm:text-[90px] lg:text-[110px] font-bold uppercase sm:leading-[92px]">
              MEET OUR
              <br />
              SPEAKERS.
            </h1>
          </div>
        </div>
        <div className="absolute md:bottom-[2.5rem] bottom-4 right-[4.5rem] max-md:right-0 w-24 h-24 md:w-40 md:h-40 max-md:me-[34px] max-md:mt-20">
          <div className="w-24 h-24 border-2 border-dashed rounded-full md:w-32 md:h-32 border-indigo-500 animate-spin-slow"></div>
          <div className="absolute top-[8px] left-[8px] bg-indigo-500 rounded-full mx-auto">
            <img className="w-20 h-20 md:w-28 md:h-28" src={art} alt="" />
          </div>
        </div>
        <div className="absolute bottom-[0] left-[0]">
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
