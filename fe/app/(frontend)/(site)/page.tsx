import { Separator } from '@core/components/ui/separator';
import Challenges from './challenges/challenges';
import SiteHero from './components/site-hero';
import Expertise from './expertise/expertise';

const LandingPage = () => {
  return (
    <div>
      <div className="flex flex-col gap-20 md:gap-24">
        <SiteHero />
        {/* <Separator /> */}
        <Challenges />
        {/* <Separator /> */}
        <Expertise />
      </div>
    </div>
  );
};

export default LandingPage;
