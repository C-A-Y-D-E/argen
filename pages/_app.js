import "styles/global.css";
import { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import Menu from "components/Menu";
import Header from "components/Header";

import HamburgerMenu from "components/Hamberger";
function MyApp({ Component, pageProps }) {
  const [header, setHeader] = useState(false);
  return <Component {...pageProps} />;
}

export default MyApp;
