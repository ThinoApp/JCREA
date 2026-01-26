import Experience from "../section/Experience/Experience";
import FoodDeliverySolution from "../section/FoodDeliverySolution/FoodDeliverySolution";
import Hero from "../section/Hero/Hero";
import HireMe from "../section/HireMe/HireMe";
import LookAt from "../section/LookAt/LookAt";
import Services from "../section/Services/Services";

const HomePage = () => {
  return (
    <div className="w-full h-auto overflow-x-hidden ">
      <Hero />
      <Services />
      <Experience />
      <HireMe />
      <LookAt />
      <FoodDeliverySolution />
    </div>
  );
};

export default HomePage;
