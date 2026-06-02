import { CtaButton } from "@core/components/cta-button";
import { SecondaryButton } from "@core/components/secondary-button";
import { h1 } from "@core/css-custom-classes/text";

const SiteHeroInfoCardContent = () => {
    // TODO: Change for real glassmorphism card and for mobile do not add 
    // glassmorphism
    const headline = 'Engineering high-impact software to maximize your business profits.';
    const subHeadline = 'We build tailored B2B SaaS solutions designed to eliminate operational waste, reduce overhead, and accelerate your growth.';
    const ctaPrimary = 'Explore Expertise';
    const ctaSecondary = 'Get a quote';

    return (
        <>
            <h1 className={h1}>{headline}</h1>
            <p>{subHeadline}</p>
            <div className='flex gap-4'>
                <CtaButton>{ctaPrimary}</CtaButton>
                <SecondaryButton>{ctaSecondary}</SecondaryButton>
            </div>
        </>
    )
}

export default SiteHeroInfoCardContent