import bracket from "../assets/bracket.svg";

const ComingSoon = () => {
  return (
    <div className="relative h-[60px] bg-indigo-500 w-full mb-2 overflow-x-clip sm:mb-9 lg:mb-14">
      <div className="text-animation-wrapper">
        <div className="text-animation comingSoon1">
          <p className="flex items-center text-center text-white text-[32px] font-bold uppercase leading-loose font-gelion">
            Spacer’s Hack Conf 2023
            <span className="inline-flex">
              <img src={bracket} alt="icon" />
            </span>
            See soon
            <span className="inline-flex">
              <img src={bracket} alt="icon" />
            </span>
          </p>
          <div className="w-7 h-7 justify-center items-center inline-flex">
            <div className="w-7 h-7 relative"></div>
          </div>
        </div>
        <div className="text-animation comingSoon2">
          <p className="flex items-center text-center text-white text-[32px] font-bold uppercase leading-loose font-gelion">
            Spacer’s Hack Conf 2023
            <span className="inline-flex">
              <img src={bracket} alt="icon" />
            </span>
            See soon
            <span className="inline-flex">
              <img src={bracket} alt="icon" />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
