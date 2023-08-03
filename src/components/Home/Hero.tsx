import zero from "../../assets/head.png";
import splash from "../../assets/heroSplash.png";
import art from "../../assets/art.svg";

const Hero = () => {
  return (
    <>
      <section className="relative bg-center bg-[url('../assets/heroPattern.svg')] bg-cover w-full h-screen overflow-hidden">
        <div className="flex flex-col items-center justify-center w-full h-full align-middle lg:max-xl:mt-8">
          <div className="font-gelion  text-center text-white text-3xl sm:text-[65px] lg:text-[90px] font-bold uppercase leading-10 sm:leading-[82px] lg:leading-[92px] tracking-[4.50px] mb-[34px]">
            Spacer’s Hack <br /> Conf{" "}
            <span className="inline-flex items-center">
              2
              <img
                src={zero}
                className="animate-headShake max-sm:w-7"
                alt="avatar"
              />
              23
            </span>
          </div>
          <p className="text-center max-sm:px-7 sm:w-2/3 lg:w-3/5 m-x-auto text-white font-dm-sans text-base sm:text-xl font-normal leading-[30px] mb-[34px]">
            Join us for a day of learning, connecting with other players in the
            industry, and unwinding. Get ready to immerse yourself in an
            inspiring atmosphere filled with Inspiration, Integration,
            Innovation, and fun.
          </p>
          <a href="#" target="_blank">
            <button
              className="hover:bg-indigo-500 bg-white hover:border-indigo-500 hover:text-white
               rounded-[35px] w-[305px] py-6 px-3 font-poppins text-indigo-500 text-lg font-semibold"
            >
              REGISTER FOR HACKATHON
            </button>
          </a>
        </div>
        <div className="absolute bottom-[0] left-[0]">
          <img src={splash} alt={`splash pattern`} className="object-cover" />
        </div>
        <div className="absolute w-24 h-24 bottom-16 max-smallest:bottom-8 right-9 md:w-40 md:h-40">
          <div className="w-24 h-24 border-2 border-dashed rounded-full border-violet-200 md:w-32 md:h-32 animate-spin-shake"></div>
          <div className="absolute top-[8px] left-[8px] bg-white rounded-full mx-auto">
            <img className="w-20 h-20 md:w-28 md:h-28" src={art} alt="art" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
