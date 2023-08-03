import splash from "../../assets/splash.png";

const Goals = () => {
  return (
    <section className="relative bg-[#F6F6FF] pt-20 pb-[135px] text-center ">
      <p className="text-indigo-500 font-gelion sm:text-2xl text-base font-normal tracking-[2.88px] mb-7 sm:mb-[51px]">
         Inspire, Integrate & Innovate
      </p>
      <p className="m-auto text-base font-normal text-black max-sm:px-7 sm:w-3/4 sm:text-2xl font-poppins">
        The aim of the conference is to provide an avenue for techies to learn,
        unlearn, and relearn. The business of technology is evolving, and it is
        important to always stay on top of the game. The theme for this year is
        focused on inspiring techies to keep pushing, to come out of their
        shells and network properly, and on the best ways to innovate a
        groundbreaking technology.
      </p>
      <div className="absolute bottom-[0] right-[0]">
        <img
          src={splash}
          alt={`splash pattern`}
          className="object-cover w-56 sm:w-72"
        />
      </div>
    </section>
  );
};

export default Goals;
