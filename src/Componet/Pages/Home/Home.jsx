import FeaturedFoods from "../../FeaturedFoods/FeaturedFoods";
import SpecialSection from "../../SpecialSection/SpecialSection";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <SpecialSection></SpecialSection>
      <FeaturedFoods></FeaturedFoods>
    </div>
  );
};

export default Home;
