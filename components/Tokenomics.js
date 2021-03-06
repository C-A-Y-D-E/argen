import React, { useEffect } from "react";
import { GiTrophyCup } from "react-icons/gi";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const list = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      delay: 0.5,
    },
  },
};

const variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,

    transition: {
      duration: 0.8,
    },
  },
};
const Tokenomics = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);
  return (
    <div className="mt-20 relative" id="token">
      <div
        ref={ref}
        className="bg-dark p-8 lg:py-16 lg:px-24 flex gap-8 items-center flex-wrap relative z-20"
      >
        <motion.div variants={variants} initial="hidden" animate={controls}>
          <motion.h2 variants={item} className="leading-snug">
            <span className="text-accent">$Argen</span> /ARGN// <br /> Token
          </motion.h2>
          <motion.p variants={item} className="max-w-[450px] w-full mt-10">
            Tokenomics and Infrastructure will be always Designed via Security
            and Simplicity. Rewarding Simultaneously Holders and Providing
            Stability for the Infrastructure;
          </motion.p>
          <motion.p variants={item} className="max-w-[450px] w-full mt-4">
            Trough these Design Methods we want the User be Always in Control;
            Thats why we rewards users Directly OnChain; Without 3rd-Parties. We
            believe These Tokenomic Models will bring Ecosystem Development and
            Growth
          </motion.p>
        </motion.div>
        <div className="mx-auto lg:ml-auto lg:mr-0">
          <motion.div
            variants={list}
            initial="hidden"
            animate={controls}
            className=""
          >
            <Nomics number="10" text="back to holders" />
            {/* <Nomics number="4" text="back to liquidity pool" />
            <Nomics number="2" text="funds development" />
            <Nomics number="2" text="funds innovation" /> */}
          </motion.div>
        </div>
      </div>
      {/* <div className="h-[100px] w-[450px] bg-accent absolute right-0 -bottom-14 p-4 z-30">
        Argen token holders have access to the advanced tracking features
        and take advantage of Argen unique analytics platform.
      </div> */}
      {/* <div className="absolute -left-10 -bottom-20 z-10">
        <img src="/pattern2.svg" />
      </div> */}
    </div>
  );
};

export default Tokenomics;
const Nomics = ({ number, text }) => {
  return (
    <motion.div variants={item} className="  rounded-2xl p-16 bg-black   ">
      <div className="text-5xl p-4 bg-accent text-center rounded-xl">
        {number}%
      </div>
      <div className="text-gray-300 text-lg mt-2">{text}</div>
    </motion.div>
  );
};

// const Nomics = ({ number, text }) => {
//   return (
//     <motion.div
//       variants={item}
//       className="text-center border border-accent px-16 rounded-lg  py-8"
//     >
//       <div className="flex justify-center relative">
//         <div className="h-[80px] w-[80px] bg-accent p-4 rounded-lg">
//           <GiTrophyCup className="text-white text-5xl " />
//         </div>
//         <img src="/pattern2.svg" className="w-20 absolute -bottom-10 -left-4" />
//       </div>
//       <div className="text-4xl mt-16">{number} %</div>
//       <div className="text-gray-300 mt-2">{text}</div>
//     </motion.div>
//   );
// };
