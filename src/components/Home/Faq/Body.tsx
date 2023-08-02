import FAQ from "./FAQ";
import AnimateWords from "../../../config/textAnimation";
import { faqData } from "../../../data/faqData";
import { star2, star1 } from "../../../assets/icon";

const Body = () => {
  return (
    <section
      className={`relative bg-gradient-to-b from-[#f7f7fd] to-white overflow-hidden`}
    >
      <div className="pt-[136px] xl:px-64 lg:px-44 sm:px-24 px-[42px] pb-[109px] sm:pb-[343px] max-w-[1500px] mx-auto">
        <div className="mb-16 sm:mb-[114px] text-center">
          <h1 className="mb-5 font-inter font-semibold text-[#101828] text-3xl/[38px] sm:text-[42px]/[44px] tracking-normal sm:tracking-[-0.02em]">
            <AnimateWords text="Frequently asked questions" />
          </h1>
          <p className="font-inter font-normal tracking-normal mx-auto text-[#667085] text-lg sm:text-2xl/[30px]">
            We answered questions so you don't have to ask them.
          </p>
        </div>

        {faqData.map((faq, index) => (
          <FAQ
            key={index}
            index={index}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
        <div className="absolute top-[9%] sm:top-[19%] right-[7%] w-[20px] sm:w-[40px] object-cover">
          <img
            src={star1}
            alt={`star icon`}
            className="object-cover w-[32px] h-auto animate-float"
          />
        </div>
        <div className="absolute top-[40%] left-[3%] w-[20px] sm:w-[40px] object-cover">
          <img
            src={star2}
            alt={`star icon`}
            className="object-cover w-[32px] h-auto animate-float"
          />
        </div>
      </div>
    </section>
  );
};

export default Body;
