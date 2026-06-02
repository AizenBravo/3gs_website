import Image from 'next/image';
import modernJet from '@/public/assets/stock/modern_jet.png';
import { Button } from '@core/components/ui/button';
import SiteHeroInfoCard from './site-hero-info-card';

const SiteHero = () => {
  const headline = 'Engineering high-impact software to maximize your business profits.';
  const subHeadline = 'We build tailored B2B SaaS solutions designed to eliminate operational waste, reduce overhead, and accelerate your growth.';
  const ctaPrimary = 'Explore Expertise';
  const ctaSecondary = 'Get a quote';

  return (
    <div className="hero py-4 px-8 md:px-12 grid grid-cols-1 md:grid-cols-2">
      <div className="hero-image">
        <Image
          src={modernJet}
          alt="3GS Logo"
          // fill
          // sizes="100vw"
          className="object-cover"
          style={
            {
              width: '100%',
              height: 'auto',
            }
          }
        />
      </div>
      <SiteHeroInfoCard />
    </div>
  )
}

export default SiteHero