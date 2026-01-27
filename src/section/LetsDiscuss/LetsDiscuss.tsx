import { Award, BadgeCheck, Stars } from "lucide-react";
import "./letsDiscuss.css";

const LetsDiscuss = () => {
  return (
    <div className="flex flex-col py-10 items-center gap-5 sm:py-20 lg:w-1/2 lg:mx-auto">
      <h2 className="LetsDiscussTitle text-4xl mx-1  sm:text-6xl sm:leading-[80px]">
        Have an Awsome Project Idea?&nbsp;
        <span className="text-[#FD853A]">Let’s Discuss</span>
      </h2>
      <LetsDiscussInput />
      <div className="flex flex-col gap-4 sm:flex-row  sm:gap-10">
        <div className="flex items-center gap-2">
          <Stars fill="#000" strokeWidth={0} />
          <p className="LetsDiscussParagraph">4.9/5 Average Rating</p>
        </div>
        <div className="flex items-center gap-2">
          <Award fill="#000" strokeWidth={0} />
          <p className="LetsDiscussParagraph">25+ Winning Awards</p>
        </div>
        <div className="flex items-center gap-2">
          <BadgeCheck fill="#000" strokeWidth={1} stroke="#fff" />
          <p className="LetsDiscussParagraph">Certified Product Designer</p>
        </div>
      </div>
    </div>
  );
};

const LetsDiscussInput = () => {
  return (
    <div className="w-6/7 flex  items-center gap-2 border border-divider-1 px-4 py-2 rounded-full lg:w-full">
      <div className="p-2 rounded-full sm:bg-[#FFEAD5] size-14 lg:min-w-14 lg:min-h-14 lg:flex lg:item-center lg:justify-center">
        <img
          src="/assets/sms.png"
          alt="sms"
          className="w-full h-full object-contain lg:w-10 lg:h-10 "
        />
      </div>
      <input
        type="text"
        placeholder="Enter Email Address"
        className="border—none outline-none py-2 urbanist-500 w-full lg:w-full "
      />

      <button className="urbanist-500 text-white bg-[#FD853A] px-5 py-2 rounded-full">
        Send
      </button>
    </div>
  );
};

export default LetsDiscuss;
