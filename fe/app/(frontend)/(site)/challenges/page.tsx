import { commonChallengesBusinessesSuffer } from "@core/constants/common-challenges-businesses-suffer";
import { columnFlex } from "@core/css-custom-classes/flex";
import ChallengeCard from "./components/challenge-card";
import { sectionVerticalPadding } from "@core/css-custom-classes/section";

const Challenges = () => {
  // Add glassmorphism card along a background with moving balls (just like in the portfolio website)
  // Then those will be behind the glassmorphism cards, addign dynamism.
  // The color of the balls ahev to matc the website

  return (
    <div className={`${columnFlex({})} bg-red-400`} id="challenges">
      <div className={`${sectionVerticalPadding}`}>
        <h2>The challenges businesses face</h2>
        <div className="flex flex-row flex-wrap gap-4">
          {commonChallengesBusinessesSuffer.map((businessChallenge, i) => <ChallengeCard key={i} businessChallenge={businessChallenge} />)}
        </div>
      </div>
    </div>
  )
};

export default Challenges;