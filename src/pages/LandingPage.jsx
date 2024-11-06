import Carousel from '../components/Carousel';
import HeroBanner from '../components/HeroBanner';

const LandingPage = () => {
  return (
    <div className="h-full flex-1 flex flex-col items-stretch">
      <HeroBanner />
      <Carousel />
      {/* <CarouselTwo /> */}
    </div>
  );
};

export default LandingPage;
