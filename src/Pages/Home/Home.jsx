import React from "react";
import Features from "../../Components/Features";
import Banner from "../../Components/Banner";
import FaqSection from "../../Components/FaqSection";

const Home = () => {
  return (
    <div className="py-14 space-y-4">
      <Banner />
      <Features />
      <FaqSection />
    </div>
  );
};

export default Home;
