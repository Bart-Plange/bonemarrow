import {CTA, Doctor, FullCTA, Hero, Services, SmallCTA, Testimonials} from "../components";

const Home = () => {
  return (
    <div>
      <Hero />
      <CTA />
      <Services />
      <Doctor />
      <Testimonials />
      <FullCTA />
      <SmallCTA />
    </div>
  );
};

export default Home;
