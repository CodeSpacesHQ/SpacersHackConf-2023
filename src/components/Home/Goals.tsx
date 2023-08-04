import AnimateWords from "../../config/textAnimation";

const Goals = () => {
  return (
    <section
      id="agenda"
      className="relative bg-center bg-[url('../assets/pattern.svg')] bg-cover w-full overflow-hidden"
    >
      <div className="pt-20 pb-[135px] text-center ">
        <p className="text-indigo-500 font-gelion text-sm sm:text-2xl font-medium tracking-widest sm:font-semibold uppercase sm:tracking-[2.88px] mb-[22px] sm:mb-[50px]">
          <AnimateWords text="Theme - Inspire, Integrate & Innovate" />
        </p>
        <p className="m-auto text-sm font-normal text-[#0A0A0A] max-sm:px-7 sm:w-3/4 sm:text-2xl sm:tracking-[-0.2px] font-poppins">
          The aim of the conference is to provide an avenue for techies to
          learn, unlearn, and relearn. The business of technology is evolving,
          and it is important to always stay on top of the game. The theme for
          this year is focused on inspiring techies to keep pushing, to come out
          of their shells and network properly, and on the best ways to innovate
          a groundbreaking technology.
        </p>
      </div>
    </section>
  );
};

export default Goals;
