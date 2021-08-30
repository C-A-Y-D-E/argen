import React, { useState, useEffect } from "react";
import { VscListSelection } from "react-icons/vsc";
import Link from "next/link";
import { motion } from "framer-motion";
import HamburgerMenu from "components/Hamberger";
const Header = ({ setHeader }) => {
  const [header, setNav] = useState(false);
  const listenScrollEvent = (event) => {
    if (window.scrollY < 73) {
      return setNav(false);
    } else if (window.scrollY > 70) {
      return setNav(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);
  return (
    <motion.header
      layoutId="h"
      className={`${
        header ? " shadow bg-dark" : "sm:bg-transparent "
      } fixed left-0 right-0 container mx-auto px-8 lg:px-16 transition-all duration-1000`}
      style={{ zIndex: 99 }}
    >
      <div className="flex items-center justify-between text-2xl lg:text-4xl my-6">
        <Link href="/">
          <a>
            <img src="/logas.png" className="w-[140px]  lg:w-[200px]" />
          </a>
        </Link>
        <div>
          <HamburgerMenu />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
