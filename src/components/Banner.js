import React from "react";
import img from "../assets/img/house-banner.png";
import Search from "./Search";

const Banner = () => {
  return (
    <section className="h-full max-h-[640px] mb-8 xl:mb-24">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:ml-8 xl:ml-[135px] flex  flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0">
          <h1 className="text-4xl lg:text-[58px] font-semibold leading-none mb-6">
            <span className="text-violet-700">Rent</span> Your Dream House With
            Us.
          </h1>
          <p className="max-w-[480px] mb-8">
            In ullamco laborum esse incididunt labore anim aliquip nostrud velit
            culpa excepteur. Mollit eu commodo consequat laboris amet commodo.
            Culpa proident amet consequat exercitation laboris veniam aliquip
            dolore. Eu deserunt incididunt aliqua nostrud commodo qui minim
            fugiat officia et laborum quis.
          </p>
        </div>
        <div className="hidden flex-1 lg:flex justify-end items-end">
          <img src={img} alt="img" />
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
