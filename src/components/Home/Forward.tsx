import star from "../../assets/icon/Star.svg";

const Forward = () => {
  const headerStyle =
    "text-neutral-950 text-sm sm:text-xl font-semibold font-poppins";
  const contentStyle =
    "text-neutral-950 text-sm sm:text-xl font-normal font-poppins";
  return (
    <div className="pb-[39px] pt-20 mx-auto max-w-[1500px] px-7 sm:px-16 xl:px-[102px] lg:px-[65px]">
      <div className="flex items-center max-md:flex-col gap-x-[56px] gap-y-16">
        <div className="w-10/12 sm:max-w-[50%] relative">
          <div className="h-[247px] sm:h-[427px] origin-top-left rotate-[4.44deg] bg-transparent rounded-[30px] border-4 border-indigo-500" />
          <img
            className="absolute -bottom-11 sm:-bottom-20 right-0 w-[60px] sm:w-[100px] h-auto rounded-[30px]"
            src={star}
            alt="star"
          />
        </div>
        <div className="w-full sm:max-w-[50%] space-y-[33px]">
          <p className="text-indigo-500 text-sm sm:text-xl font-semibold font-gelion uppercase tracking-widest">
            Look forward to...
          </p>
          <div className="space-y-[19px]">
            <div>
              <p className={headerStyle}>Exciting Technical Talks</p>
              <p className={contentStyle}>
                Our conference covers a range of talks from the web to the cloud
                to compilers (and so on) –- we're proud of the speakers we’ve
                put together!
              </p>
            </div>
            <div>
              <p className={headerStyle}>Networking</p>
              <p className={contentStyle}>
                From live Q&As to in-session chat, this conference will provide
                an awesome opportunity for our attendees and to connect beyond
                the talks.
              </p>
            </div>
            <div>
              <p className={headerStyle}>Cool Prizes</p>
              <p className={contentStyle}>
                As you immerse yourself in the sessions, there will be
                opportunities to win some amazing prizes!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forward;
