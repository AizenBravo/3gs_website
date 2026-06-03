import CustomCard from "@core/components/card/custom-card";
import { CardContent, CardHeader } from "@core/components/ui/card";
import { columnFlex } from "@core/css-custom-classes/flex";
import { GapSize } from "@core/enums/gap-size";
import { BusinessChallenge } from "@core/interfaces/business-challenge.interface";
import { ArrowUp01 } from "lucide-react";

const ChallengeCard = ({ businessChallenge }: { businessChallenge: BusinessChallenge }) => {
  const hasGlassmorphism = true; // Repair the glassmorphism since it is not working
  const hasBorder = false;
  // It is not working since shadcn does not use hsl anylonger, please look at how
  // To add transaparency with that new color oklch

  return (
    <CustomCard
      hasGlassmorphism={hasGlassmorphism}
      hasBorder={hasBorder}
      className={`bg-amber-200`}
    >
      <CardHeader className="text-center text-xl font-bold">{businessChallenge.title}</CardHeader>
      <CardContent className={`${columnFlex({ gapSize: GapSize.SMALL })} max-w-72`}>
        {businessChallenge.description}</CardContent>
      <ArrowUp01 />
    </CustomCard>
  );
};

export default ChallengeCard;