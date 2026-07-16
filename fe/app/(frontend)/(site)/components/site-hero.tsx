import Image from 'next/image';
import modernJet from '@/public/assets/stock/modern_jet.png';
import modernJetV5 from '@/public/assets/stock/modern_jet_v5.png';
import { Button } from '@core/components/ui/button';
import SiteHeroInfoCard from './site-hero-info-card';
import SiteHeroInfoCardContent from './site-hero-info-card-content';
import { columnFlex } from '@core/css-custom-classes/flex';
import { sectionVerticalPadding } from '@core/css-custom-classes/section';

const SiteHero = () => {
  const headline = 'Engineering high-impact software to maximize your business profits.';
  const subHeadline = 'We build tailored B2B SaaS solutions designed to eliminate operational waste, reduce overhead, and accelerate your growth.';
  const ctaPrimary = 'Explore Expertise';
  const ctaSecondary = 'Get a quote';

  return (
    <div className={`hero mt-8 sm:mt-16 ${sectionVerticalPadding} grid grid-cols-1 md:grid-cols-2`} id='home'>
      <div className="hero-image flex items-center">
        <Image
          src={modernJetV5}
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
          draggable={false}
        />
      </div>
      <div className={columnFlex({})}>
        <SiteHeroInfoCardContent />
      </div>
    </div>
  )
}

export default SiteHero