import { commonChallengesBusinessesSuffer } from "@core/constants/common-challenges-businesses-suffer";
import { columnFlex } from "@core/css-custom-classes/flex";
import ChallengeCard from "./components/challenge-card";
import { sectionVerticalPadding } from "@core/css-custom-classes/section";
import { h2 } from "@core/css-custom-classes/text";
import { GapSize } from "@core/enums/gap-size";

const Challenges = () => {
  // Add glassmorphism card along a background with moving balls (just like in the portfolio website)
  // Then those will be behind the glassmorphism cards, addign dynamism.
  // The color of the balls have to match the website
  const subtitle = 'Common challenges your business might be facing'

  return (
    <div className={``} id="challenges">
      <div className={`${columnFlex({ gapSize: GapSize.LARGE })} ${sectionVerticalPadding} `}>
        <h2 className={h2}>{subtitle}</h2>
        <div className="flex flex-row flex-wrap gap-4 ">
          {/* Here have to go the balls */}
          {commonChallengesBusinessesSuffer.map((businessChallenge, i) =>
            <div key={i} className={`hover:bg-red-500 translate-4`} >
              <ChallengeCard businessChallenge={businessChallenge} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
};

export default Challenges;