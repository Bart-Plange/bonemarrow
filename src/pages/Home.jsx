import {CTA, Doctor, FullCTA, Hero, Services, SmallCTA, Testimonials} from "../components";

const Home = () => {
  return (
    <div>
      <Hero />
      <CTA />
      <Services />
      <Testimonials />
      <Doctor />
      <FullCTA />
      <SmallCTA />
    </div>
  );
};

export default Home;
