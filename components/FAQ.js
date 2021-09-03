import React, { useState } from "react";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

import { FiMinus, FiPlus } from "react-icons/fi";
const FAQ = () => {
  const [active, setActive] = useState(1);
  return (
    <div className="mt-20 lg:mt-44 " id="faq">
      <div className="flex items-center flex-wrap gap-16">
        <div className="  relative lg:flex-1">
          <h2 className=" relative  inline-block leading-snug">
            Frequently <br /> Asked{" "}
            <span className="text-accent">Question </span>
          </h2>
          <div className="absolute -top-32 -left-44 z-[1]">
            <img src="/blobs/4.svg" />
          </div>
          {/* <div className="mt-8 max-w-[440px] text-base">
            we know you have some questions in mind, we’ve tried to list the
            most importance ones.
          </div> */}
          {/* <div className="mt-10">
            <img src="/pattern3.svg" />
          </div> */}
        </div>

        <div className=" lg:flex-1 flex flex-col gap-4  relative">
          <div className="flex flex-col gap-4  z-30">
            <AnimateSharedLayout>
              <div className="absolute -bottom-24  md:-right-20 z-[-2]">
                <img src="/blobs/5.svg" />
              </div>

              <Question
                heading="How can you ensure that people will stay holding and loyal?"
                text={[
                  "Firstly, through our unique rewards, which are paid out fully automatically to the wallets (these can be conveniently tracked via our dashboard) and secondly, through our dynamic fees, making it difficult for whales to crash the course.",
                  ,
                  <br />,
                  <br />,
                  "f a whale decides to cash out, he would either have to pay enormously high fees or sell everything in small increments, whereby in both variants our holders benefit from extremely high rewards of up to 49% per whale transaction!",
                  ,
                ]}
                no={1}
                active={active}
                setActive={setActive}
              />

              <hr />
              <Question
                heading="Where are the team from?"
                text="We are all from Central Europe."
                no={2}
                active={active}
                setActive={setActive}
              />
              <hr />
              <Question
                heading="Do they have experience?"
                text="We have already worked on several token projects, we also have experienced web developers and programmers in the team. We leave the marketing activities to our top marketing agencies."
                no={3}
                active={active}
                setActive={setActive}
              />
              <hr />
              <Question
                heading="Is this a short or long term project?"
                text={[
                  "Of course we are aiming at a long term project and want to offer our users a long term passive income source and encourage them to hold the token through our unique dynamic fee mechanism. ",
                  ,
                  <br />,
                  <br />,
                  "In the future we will offer our users a great decentralized platform where normal users, token teams and developers can benefit. We will also release a platform for NFTs in the near future, where we also want to offer our users givaways with NFT airdrops.",
                  ,
                ]}
                no={4}
                active={active}
                setActive={setActive}
              />
              <hr />
            </AnimateSharedLayout>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

const Question = ({ heading, text, setActive, no, active }) => {
  const open = active === no ? true : false;

  return (
    <div>
      <div className="">
        <div
          onClick={() => {
            if (active === no) {
              setActive(null);
            } else {
              setActive(no);
            }
          }}
          className=" cursor-pointer flex py-4 justify-between items-center w-full px-4  text-sm font-semibold text-left text-purple-900  rounded-lg "
        >
          <span className={`${open ? "text-accent" : "text-white"} text-lg  `}>
            {heading}
          </span>
          <div className="text-xl ml-auto">
            {open ? <FiMinus /> : <FiPlus className="text-accent" />}
          </div>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              key="modal"
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: "auto" },
                collapsed: { opacity: 0, height: 0 },
              }}
              transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
              className="px-4  leading-loose  text-base  font-medium text-gray-400"
            >
              {text}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

// const QuestionTier = ({ setActive, no, active }) => {
//   const open = active === no ? true : false;
//   return (
//     <div className="">
//       <div
//         onClick={() => {
//           if (active === no) {
//             setActive(null);
//           } else {
//             setActive(no);
//           }
//         }}
//         className="flex cursor-pointer py-4 justify-between items-center w-full px-4  text-sm font-semibold text-left text-purple-900  rounded-lg "
//       >
//         <span
//           className={`${
//             open ? "text-accent" : "text-primary"
//           } text-xl w-[90%] transition-all duration-700`}
//         >
//           How can i join the presale?
//         </span>
//         <div className="text-xl ml-auto">
//           {open ? <FiMinus /> : <FiPlus className="text-accent" />}
//         </div>
//       </div>
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial="collapsed"
//             animate="open"
//             exit="collapsed"
//             variants={{
//               open: { opacity: 1, height: "auto" },
//               collapsed: { opacity: 0, height: 0 },
//             }}
//             transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
//             className="px-4   text-base lg:text-lg font-medium text-gray-400 "
//           >
//             Our 2-tier Presale will be on our platform
//             <a
//               target="_blank"
//               className="text-accent ml-2 underline"
//               href="https://www.snowden.finance/"
//             >
//               www.snowden.finance
//             </a>
//             <div className="mt-4">
//               <h4 className="font-bold">TIER 1:</h4>
//               This will be a premium whitelist of 300 spots. Join the
//               sweepwidget contest using the link below!
//               <br />
//               <a
//                 target="_blank"
//                 className="text-accent  underline "
//                 href="https://sweepwidget.com/view/27101-wfnkx60t"
//               >
//                 https://sweepwidget.com/view/27101-wfnkx60t
//               </a>
//             </div>
//             <div className="mt-4">
//               <h4 className="font-bold">TIER 2:</h4>
//               This tier will be a public presale, open for anyone to join in!
//               The price will be 10% higher than that of Tier-1.
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };
