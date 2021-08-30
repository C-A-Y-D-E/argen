import React from "react";
import FadeUp from "components/FadeUp";
import { FiSunrise } from "react-icons/fi";
const Feature = () => {
  return (
    <div
      className="mt-8 overflow-x-hidden flex flex-col items-center gap-16 "
      id="features"
    >
      <div className="flex flex-col items-center justify-center gap-6  flex-wrap px-8 lg:px-16 xl:px-20  ">
        <div className=" relative">
          <FadeUp>
            <h2 className=" relative  inline-block leading-snug">
              <span className="text-accent">Benefits </span>of working with{" "}
              <span className="relative">us. </span>
            </h2>
          </FadeUp>
        </div>

        {/* <div className=" ">
          <FadeUp amount={0.2}>
            <p className="max-w-[500px]  mt-0">
              We believe that your ability to take good investment decisions
              shouldn’t require you to waste precious time on digging into
              contracts or reddit and countless social channels.
            </p>
          </FadeUp>
        </div> */}
      </div>

      <div className=" ml-auto  grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-16 px-8 lg:px-16 xl:px-20  ">
        <FeatureCard
          title="Liquidity"
          text="Deep order book liquidity in all market condition"
        />
        <FeatureCard
          title="Speed"
          text="2.5m Tps matching engine 50 micro second core letency"
        />
        <FeatureCard
          title="Security"
          text="ISO/IEC 27001:2013, PCI:DSS v3.2.1, Level 1 compilance. Cryptocurrecy Security Standard "
        />
      </div>
    </div>
  );
};

export default Feature;
const FeatureCard = ({ title, text }) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        <div className="h-[60px] w-[60px] rounded-lg bg-accent/20 flex items-center justify-center text-2xl">
          <FiSunrise />
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <h4 className="text-xl lg:text-2xl font-semibold">{title}</h4>
        <p className="mt-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed
          nam sem tellus erat.
        </p>
      </div>
    </div>
  );
};
