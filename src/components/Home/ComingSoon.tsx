import text from "../../assets/comingSoon.svg";

const ComingSoon = () => {
  return (
    <div className="relative w-full mb-2 overflow-x-clip sm:mb-9 lg:mb-14">
      <div className="absolute inset-0 w-full comingSoon1">
        <img src={text} alt="Coming soon" className="object-cover w-full" />
      </div>
      <div className="absolute inset-0 w-full comingSoon2">
        <img src={text} alt="Coming soon" className="object-cover w-full" />
      </div>
    </div>
  );
};

export default ComingSoon;
