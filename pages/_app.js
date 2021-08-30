import "styles/global.css";
import { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import Menu from "components/Menu";
import Header from "components/Header";

import HamburgerMenu from "components/Hamberger";
function MyApp({ Component, pageProps }) {
  const [header, setHeader] = useState(false);
  return (
    <AnimateSharedLayout>
      <Header setHeader={setHeader} />
      {/* <AnimatePresence>
        {header && <HamburgerMenu setHeader={setHeader} />}
      </AnimatePresence> */}
      <Component {...pageProps} />
    </AnimateSharedLayout>
  );
}

export default MyApp;
