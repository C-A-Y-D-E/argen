import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import FadeUp from "components/FadeUp";
import { motion } from "framer-motion";

import Carousel from "react-multi-carousel";
import UAParser from "ua-parser-js";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1300 },
    items: 4,
  },
  laptop: {
    breakpoint: { max: 1300, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 700 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 700, min: 0 },
    items: 1,
  },
};

const Signal = ({ deviceType }) => {
  return (
    <div className="mt-8 overflow-x-hidden flex flex-wrap lg:flex-nowrap gap-4 lg:gap-16 ">
      <div className="flex flex-col  justify-center gap-6  flex-wrap  px-8 lg:px-16 xl:px-20  ">
        <div className=" relative">
          <FadeUp>
            <h2 className=" relative  inline-block leading-snug">
              <span className="text-accent">Predict</span> Changes and
              <br className="lg:hidden 2xl:inline-block" /> Signal Sells &{" "}
              <span className="relative">Buy. </span>
            </h2>
          </FadeUp>
        </div>

        <div className=" ">
          <FadeUp amount={0.2}>
            <p className="max-w-[500px]  mt-0">
              ArgenAI Is Unique Platform fueled by Native Token Argen /ARGN/{" "}
              ArgenAI Teams plan is to Distrupt the Scam Ridiculed and
              Fake-DeCentralized InfraStructure in The CryptoCurrency Space by
              Providing Legitimate; on to The Point CryptoGraphical Encryption
              Solutions; We Aim to Deliver Simplistic; but Versatile Platform
              which Enables users for Easy to Understand Investment Methods into
              the CryptoSpace; From Analytical tools To Advantageous Information
              to Maximize your Gains and Safety of Investments.
            </p>
          </FadeUp>
        </div>
      </div>

      <div className="mt-20 ml-0 lg:ml-32  flex flex-col gap-10 px-8 lg:px-16 xl:px-20  ">
        <SpecialityCard
          shadow={true}
          heading="Liquidity"
          text="100% Of Liquidity will Be Locked 
          from the PreSale; Liquidity is Locked in DeCentralized
          Exchange; Anyone has access; Anytime; Anywhere"
          br={true}
        />
        <SpecialityCard
          heading="Speed"
          text="We Operate on Ethereum and Binance Networks; Top of the World Networks regarding
          Safety and Operation Speeds; We are planning our own MainChain also"
          br={true}
        />
        <SpecialityCard
          heading="Security"
          text="Network Safety is our Main Priority; 
          Everything will work from Locked OnChain; 
          There is no Middle-Men; Even we can't Access many parts of the 
          InfraStructure By Design"
        />
      </div>
    </div>
  );
};

export default Signal;

const CoinCard = () => {
  return (
    <div className="bg-dark p-8 select-none  rounded-lg bshadow">
      <div className="flex gap-6">
        <div>
          <h4 className="flex items-center gap-4 text-lg">
            Bitcoin <FiArrowUpRight className="text-accent" />
          </h4>
          <div className="text-xl mt-4">$8.313</div>
        </div>
        <div className="ml-auto ">
          <img src="/graph.svg " className="select-none" />
        </div>
      </div>
    </div>
  );
};

const SpecialityCard = ({ br, heading, text, shadow }) => {
  return (
    <div
      className={` p-4 flex gap-4  items-center w-full max-w-[400px]  ${
        shadow ? "f-shadow" : ""
      }`}
    >
      <div className="h-[50px] flex-shrink-0 w-[50px] rounded-full bg-accent/40 flex items-center justify-center text-3xl">
        <RiMoneyDollarCircleFill />
      </div>

      <div className="flex flex-col gap-2">
        <h5 className="text-2xl">{heading}</h5>
        <div className=" text-gray-300">{text}</div>
      </div>
    </div>
  );
};

Signal.getInitialProps = ({ req }) => {
  let userAgent;
  if (req) {
    userAgent = req.headers["user-agent"];
  } else {
    userAgent = navigator.userAgent;
  }
  const parser = new UAParser();
  parser.setUA(userAgent);
  const result = parser.getResult();
  const deviceType = (result.device && result.device.type) || "desktop";
  return { deviceType };
};
