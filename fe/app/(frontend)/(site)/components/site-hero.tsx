import Image from 'next/image';
import modernJet from '@/public/assets/stock/modern_jet.png';
import { Button } from '@core/components/ui/button';

const SiteHero = () => {
  const headline = 'Engineering high-impact software to maximize your business profits.';
  const subHeadline = 'We build tailored B2B SaaS solutions designed to eliminate operational waste, reduce overhead, and accelerate your growth.';
  const ctaPrimary = 'Explore Expertise';
  const ctaSecondary = 'Get a quote';

  return (
    <div className="hero py-4 px-8 md:px-12">
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
      <div className="hero-title">
        <h1>{headline}</h1>
        <p>{subHeadline}</p>
        <div>
          <Button>{ctaPrimary}</Button>
          <Button variant='secondary'>{ctaSecondary}</Button>
        </div>
      </div>
    </div>
  )
}

export default SiteHero