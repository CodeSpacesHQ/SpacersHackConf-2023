import logo from "../../assets/couchBase.svg";

const sponsors = () => {
  return (
    <div className="bg-white h-screen flex flex-col items-center pt-[37px]">
      <h1 className="text-center font-gelion text-black text-xl sm:text-[35px] font-bold uppercase leading-[92px] mb-0 sm:mb-9">
        Headline Sponsors
      </h1>
      <img
        src={logo}
        className="sm:w-[261px] w-36 h-auto"
        alt="Couchbase logo"
      />
    </div>
  );
};

export default sponsors;
