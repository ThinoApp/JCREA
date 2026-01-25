import "./serviceHeader.css";

const ServiceHeader = () => {
  return (
    <div className="flex flex-col p-10 gap-4 relative lg:flex-row lgitems-center justify-between lg:mb-10">
      <h2 className="ServicesTitle text-4xl lg:text-4xl ">
        My <span>Services</span>
      </h2>
      <p className="ServicesParagraph text-xl lg:w-3/7 lg:text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus
        nunc, posuere in justo vulputate, bibendum sodales
      </p>
    </div>
  );
};

export default ServiceHeader;
