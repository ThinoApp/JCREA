import Experience from "../section/Experience/Experience";
import Hero from "../section/Hero/Hero";
import Services from "../section/Services/Services";

const HomePage = () => {
  return (
    <div className="w-full h-auto overflow-x-hidden ">
      <Hero />
      <Services />
      <Experience />
    </div>
  );
};

export default HomePage;
