import Features from "../../Components/Features";
import Banner from "../../Components/Banner";
import FaqSection from "../../Components/FaqSection";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div className="py-14 space-y-4 px-4 lg:px-0">
      <Helmet>
        <title>
          Study Buddy - Empowering Learning with Collaborative Grading
        </title>
      </Helmet>
      <Banner />
      <Features />
      <FaqSection />
    </div>
  );
};

export default Home;
