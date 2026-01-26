import "./testimonials.css";
import { QuoteIcon, StarIcon } from "lucide-react";

const Testimonials = () => {
  return (
    <div
      className="h-screen w-screen flex flex-col items-center gap-10 bg-[url('/assets/service_bg.jpg')] bg-cover py-14
    sm:justify-center sm:h-[80vh] lg:h-[90vh]
    "
    >
      <h2 className="TestimonialsTitle text-5xl mx-1 leading-[1.2] sm:text-6xl">
        Testimonials That Speak to <br />
        <span className="text-[#FD853A]">My Results</span>
      </h2>
      <p className="TestimonialsParagraph text-center sm:text-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
        interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Sed lobortis orci elementum egestas lobortis.
      </p>

      <div className="grid grid-rows-1 grid-flow-col gap-4 w-full overflow-x-scroll snap-mandatory snap-x scrollbar-hide">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </div>
  );
};

const TestimonialCard = () => {
  return (
    <div
      className="snap-center w-screen relative flex flex-col gap-2  p-2 rounded-3xl border-[0.5px] border-divider-1 sm:p-4 lg:w-[55vw] lg:border-none"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(15px) saturate(180%)",
        boxShadow:
          "0 8px 32px rgba(0, 0, 0, 0.25), inset 0 0 0 0.5px rgba(255, 255, 255, 0.1)",
      }}
    >
      <div className="flex items-center gap-2">
        <img src="/assets/avatar.png" alt="userAvatar" />
        <div className="flex flex-col gap-1">
          <h3 className="userName urbanist-700">Jayesh Patil</h3>
          <p className="userJob urbanist-400">CEO, Lirante</p>
        </div>
      </div>
      <div className="flex flex-row items-center gap-2">
        {[1, 2, 3, 4, 5].map((item) => (
          <StarIcon
            key={item}
            className="w-7 h-7"
            fill="#FD853A"
            strokeWidth={0}
          />
        ))}
        <p className="userRate">5.0</p>
      </div>
      <p className="userTestimonial">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
        interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Sed lobortis orci elementum egestas lobortis.
      </p>
      <QuoteIcon
        className="absolute top-4 right-4 size-24 text-transparent opacity-30"
        fill="#667085"
      />
    </div>
  );
};

export default Testimonials;
