import CustomCard from "@core/components/card/custom-card";
import { CardContent, CardHeader } from "@core/components/ui/card";
import { columnFlex, flexCenterTwoAxis } from "@core/css-custom-classes/flex";
import { FlexDirection } from "@core/enums/flex-direction.enum";
import { GapSize } from "@core/enums/gap-size";
import { BusinessChallenge } from "@core/interfaces/business-challenge.interface";

const ChallengeCard = ({ businessChallenge }: { businessChallenge: BusinessChallenge }) => {
  const hasGlassmorphism = false; // Repair the glassmorphism since it is not working
  const hasBorder = false;
  // It is not working since shadcn does not use hsl anylonger, please look at how
  // To add transaparency with that new color oklch

  return (
    <CustomCard
      hasGlassmorphism={hasGlassmorphism}
      hasBorder={hasBorder}
      className={`hover:drop-shadow-cyan-400`}
    >
      <CardHeader className="text-center text-xl font-bold">{businessChallenge.title}</CardHeader>
      <CardContent className={`px-2 sm:px-4 md:px-6`}>
        <div className={`card-content ${columnFlex({ gapSize: GapSize.SMALL })} max-w-72 `}>
          {businessChallenge.description}
          <div className={`icon-container ${flexCenterTwoAxis({ flexDirection: FlexDirection.COL })} text-center`}>
            <businessChallenge.icon width={40} height={40} />
          </div>
        </div>
      </CardContent>
    </CustomCard>
  );
};

// const ChallengeCard = ({ businessChallenge }: { businessChallenge: BusinessChallenge }) => {
//   const hasGlassmorphism = false; // Repair the glassmorphism since it is not working
//   const hasBorder = false;
//   // It is not working since shadcn does not use hsl anylonger, please look at how
//   // To add transaparency with that new color oklch

//   return (
//     <CustomCard
//       hasGlassmorphism={hasGlassmorphism}
//       hasBorder={hasBorder}
//       className={`bg-amber-200`}
//     >
//       <CardHeader className="text-center text-xl font-bold">{businessChallenge.title}</CardHeader>
//       <CardContent className={`px-2 sm:px-4 md:px-6`}>
//         <div className={`card-content ${columnFlex({ gapSize: GapSize.SMALL })} max-w-72 bg-red-500`}>
//           {businessChallenge.description}
//           <div className={`icon-container ${flexCenterTwoAxis({ flexDirection: FlexDirection.COL })} bg-gray-600 text-center`}>
//             <businessChallenge.icon width={40} height={40} />
//           </div>
//         </div>
//       </CardContent>
//     </CustomCard>
//   );
// };




export default ChallengeCard;