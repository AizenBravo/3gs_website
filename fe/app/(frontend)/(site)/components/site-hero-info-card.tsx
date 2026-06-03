import CustomCard from "@core/components/card/custom-card";
import { CardContent } from "@core/components/ui/card";
import { columnFlex } from "@core/css-custom-classes/flex";
import SiteHeroInfoCardContent from "./site-hero-info-card-content";

const SiteHeroInfoCard = () => {
	// TODO: Change for real glassmorphism card and for mobile do not add 
	// glassmorphism

	return (
		<CustomCard hasGlassmorphism>
			<CardContent className={columnFlex({})}>
				<SiteHeroInfoCardContent />
			</CardContent>
		</CustomCard>
	)
}

export default SiteHeroInfoCard