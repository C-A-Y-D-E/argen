import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Mobile = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  const mobile = {
    hidden: {
      scale: 0.2,
    },

    show: {
      scale: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  const container = {
    hidden: {
      opacity: 0,
    },

    show: {
      opacity: 1,
      transition: {
        staggerChildren: 1.4,
        delay: 1,
      },
    },
  };

  const children = {
    hidden: { opacity: 0 },
    show: { opacity: 1, trasitions: { duration: 1 } },
  };

  return (
    <div className="">
      <div
        ref={ref}
        className="bg-dark p-8 lg:py-16 lg:px-24 flex flex-wrap-reverse gap-12 items-center relative z-20"
      >
        <motion.div
          variants={container}
          animate={controls}
          initial="hidden"
          className="  relative"
        >
          <motion.h2
            variants={children}
            className=" relative w-full lg:w-[60%]  inline-block"
          >
            <span className="text-accent leading-snug">
              Artificial Intelligence{" "}
            </span>
            Matrix Based Datasets to Optimize your every Trade
          </motion.h2>
          <motion.div
            variants={children}
            className="mt-4 max-w-[440px] text-base"
          >
            Argen is the most Advanced and Easy to use Trading Matrix dataset;
            with the most complete Tracking & Analytics Tools on BSC & ETH
            Networks. We have unique and novel Features with State of the Art
            UIX-to Streamline your Success into Reality.
          </motion.div>
          <motion.div
            className="mt-8"
            variants={children}
            transition={{ delay: 1.6 }}
          >
            <span>Buy the App (Coming soon)</span>
            <div className="flex gap-6 mt-4 flex-wrap">
              <img src="/google.png" />
              <img src="/apple.png" />
            </div>
          </motion.div>
        </motion.div>
        <div className="lg:absolute bottom-0 right-20 h-[400px] w-[550px] ml-auto overflow-hidden">
          <div className="lg:absolute z-[-1]">
            <img
              initial="hidden"
              animate={controls}
              variants={mobile}
              src="/iphone.png"
              className="z-50 w-full relative"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
