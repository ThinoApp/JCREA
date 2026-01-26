import "./foodDelivery.css";
import { ArrowUpRight } from "lucide-react";

const categories = [
  "Landing Page",
  "Product Design",
  "Animation",
  "Glassmorphism",
  "Cards",
];
const FoodDeliverySolution = () => {
  return (
    <div className="flex flex-col gap-12 w-screen px-5 py-5">
      <ul className="flex flex-wrap gap-2 justify-around sm:justify-center">
        {categories.map((item, index) => {
          return (
            <li
              key={index}
              className="px-2 py-1 rounded-full bg-[#F2F4F7] text-lg lg:text-base lg:px-4 lg:py-2"
            >
              {item}
            </li>
          );
        })}
      </ul>
      <div className="flex flex-col items-center gap-4">
        <h2
          className="FoodDeliverySolutionTitle flex flex-col items-center gap-2 text-3xl text-center
        
        sm:flex-row sm:gap-4"
        >
          Lirante - Food Dilvery Solution
          <button className="bg-[#FD853A] rounded-full p-4 text-white">
            <ArrowUpRight size={24} />
          </button>
        </h2>
        <p className="FoodDeliverySolutionParagraph text-center lg:w-2/5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
          interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed lobortis orci elementum egestas lobortis.
        </p>
      </div>
    </div>
  );
};

export default FoodDeliverySolution;
