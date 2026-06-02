import { CtaButton } from "@core/components/cta-button";
import { SecondaryButton } from "@core/components/secondary-button";
import { Button } from "@core/components/ui/button"
import { h1 } from "@core/css-custom-classes/text";

const SiteHeroInfoCard = () => {
    // TODO: Change for real glassmorphism card and for mobile do not add 
    // glassmorphism
    const headline = 'Engineering high-impact software to maximize your business profits.';
    const subHeadline = 'We build tailored B2B SaaS solutions designed to eliminate operational waste, reduce overhead, and accelerate your growth.';
    const ctaPrimary = 'Explore Expertise';
    const ctaSecondary = 'Get a quote';

    return (
        <div className="hero-info flex flex-col gap-4">
            <h1 className={h1}>{headline}</h1>
            <p>{subHeadline}</p>
            <div className='flex gap-4'>
                <CtaButton>{ctaPrimary}</CtaButton>
                <SecondaryButton>{ctaSecondary}</SecondaryButton>
            </div>
        </div>
    )
}

export default SiteHeroInfoCard