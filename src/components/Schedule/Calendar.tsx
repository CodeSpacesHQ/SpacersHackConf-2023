const Calendar = () => {
  return (
    <div className="pt-[50px] pb-7 mx-auto max-w-[1500px] px-7 h-screen sm:px-16 xl:px-[102px] lg:px-[65px]">
      <div className="flex justify-start gap-x-[31px] border-t-[3px] border-indigo-500 ">
        <div className="w-full max-w-[110px] sm:max-w-[230px] border-r-[3px] space-y-[30px] border-indigo-500 pt-[38px]">
          <p className="text-black text-sm sm:text-[28px] pr-[34px] sm:leading-9 font-semibold font-gelion uppercase sm:tracking-[3.36px]">
            OCT 14th - <br />
            25TH
          </p>
          <p className="text-black text-sm sm:text-[28px] sm:leading-9 font-semibold font-gelion uppercase sm:tracking-[3.36px]">
            SAT 14th
          </p>
        </div>
        <div className=" space-y-[60px] pt-[38px]">
          <p className="text-black text-sm sm:text-[28px] sm:leading-9 font-semibold font-gelion uppercase sm:tracking-[3.36px]">
            PRE HACKATHON WEEK
          </p>
          <p className="text-black text-sm sm:text-[28px] sm:leading-9 font-semibold font-gelion uppercase sm:tracking-[3.36px]">
            Opening Ceremony{" "}
            <a
              href="https://docs.google.com/document/d/1GxDq9TkP_fBtx06fRxpnC-ylyWBAX52wpPqYfig8cR0/edit#heading=h.hfo6ww6x9zp2"
              className="underline hover:no-underline text-indigo-500"
            >
              click here for more details
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
