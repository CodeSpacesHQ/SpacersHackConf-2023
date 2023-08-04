import splash from "../../assets/heroSplash.png";
import hero from "../../assets/hero.png";
import heroSmall from "../../assets/heroSmall.png";
import art from "../../assets/art.png";

const Hero = () => {
  return (
    <>
      <section className="relative bg-center bg-[url('../assets/heroPattern.svg')] bg-cover w-full overflow-hidden">
        <div className="flex flex-col lg:items-center w-full mt-[82px] max-lg:px-16 max-md:px-7">
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
            Join us for a day of learning, connecting with other players in the
            industry, and unwinding. Get ready to immerse yourself in an
            inspiring atmosphere filled with Inspiration, Integration,
            Innovation, and fun.
          </p>
          <a href="#" target="_blank">
            <button
              className="hover:bg-indigo-500 bg-[#fefefe] hover:border-indigo-500 hover:text-[fefefe]
               rounded-[10px] w-[282px] py-5 text-center font-poppins text-indigo-500 text-[16px] font-semibold mb-[46px]"
            >
              REGISTER FOR HACKATHON
            </button>
          </a>
          <img
            src={hero}
            alt="hero image"
            className="w-9/12 m-auto max-lg:hidden"
          />
          <img
            src={heroSmall}
            alt="hero image"
            className="w-full mb-9 lg:hidden"
          />
        </div>
        <div className="absolute bottom-[0] left-[0]">
          <img src={splash} alt={`splash pattern`} className="object-cover" />
        </div>
      </section>
    </>
  );
};

export default Hero;
