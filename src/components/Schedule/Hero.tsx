import { star2 } from "../../assets/icon";

const Hero = () => {
  return (
    <>
      <div className="absolute top-0 left-0 w-full bg-[#f8f8fd] bg-cover h-20 sm:h-28"></div>
      <section className="relative bg-center bg-[url('../assets/speakersPattern.svg')] bg-cover w-full overflow-hidden">
        <div className="pt-[198px] pb-[204px] max-w-[1500px] mx-auto px-[102px] max-lg:px-16 max-lg:mb-9 max-md:px-7">
          <div className="flex items-center flex-col justify-center align-middle w-full space-y-[10px] sm:space-y-[42px]">
            <h1 className="text-indigo-500 font-gelion text-5xl sm:text-[120px] font-bold uppercase sm:leading-[92px]">
              Schedule
            </h1>
            <p className="text-center w-full max-w-[792px] text-black text-sm sm:text-2xl font-normal font-dm-sans capitalize sm:leading-[30px]">
              The conference schedule consists of empowering sessions and
              enlightening discussions that pave the way for exploration,
              connection, and growth.
            </p>
          </div>
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
