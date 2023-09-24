"use client";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Company_img from "./components/Company_img";
import Residencies from "./components/Residencies";
import ContactUs from "./components/ContactUs";
import Value from "./components/Value";
import Getstarted from "./components/Getstarted";
import Footer from "./components/Footer";
import { motion } from "framer-motion";
function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
      },
    },
  };
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="w-screen h-screen "
    >
      <Navbar />
      <Hero />
      <Company_img />
      <Residencies />
      <Value />
      <ContactUs />
      <Getstarted />
      <Footer />
    </motion.div>
  );
}
export default Home;
