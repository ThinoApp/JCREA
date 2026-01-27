import Blog from "../section/Blog/Blog";
import Experience from "../section/Experience/Experience";
import FoodDeliverySolution from "../section/FoodDeliverySolution/FoodDeliverySolution";
import Footer from "../section/Footer/Footer";
import Hero from "../section/Hero/Hero";
import HireMe from "../section/HireMe/HireMe";
import LetsDiscuss from "../section/LetsDiscuss/LetsDiscuss";
import LookAt from "../section/LookAt/LookAt";
import MarqueeBand from "../section/MarqueeBand/MarqueeBand";
import Services from "../section/Services/Services";
import Testimonials from "../section/Testimonials/Testimonials";

const HomePage = () => {
  return (
    <div className="w-full h-auto overflow-x-hidden ">
      <Hero />
      <Services />
      <Experience />
      <HireMe />
      <LookAt />
      <FoodDeliverySolution />
      <Testimonials />
      <LetsDiscuss />
      <MarqueeBand />
      <Blog />
      <Footer />
    </div>
  );
};

export default HomePage;
