import { commonChallengesBusinessesSuffer } from '@core/constants/common-challenges-businesses-suffer';
import { columnFlex } from '@core/css-custom-classes/flex';
import ChallengeCard from './components/challenge-card';
import { sectionHorizontalPadding } from '@core/css-custom-classes/section';
import { h2 } from '@core/css-custom-classes/text';
import { GapSize } from '@core/enums/gap-size';
import DynamicBackground from '@core/components/dynamic-background';
import DynamicBubbles from '@core/components/backgrounds/dynamic-bubbles';

const Challenges = () => {
  // Add glassmorphism card along a background with moving balls (just like in the portfolio website)
  // Then those will be behind the glassmorphism cards, adding dynamism.
  // The color of the balls have to match the website
  const subtitle = 'Common challenges your business might be facing';

  return (
    <div className={``} id="challenges">
      <div className={`${columnFlex({})} ${sectionHorizontalPadding} `}>
        <h2 className={h2}>{subtitle}</h2>
        <DynamicBubbles>
          {/* <div className={`bg-red-500`}> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Here have to go the balls */}

            {commonChallengesBusinessesSuffer.map((businessChallenge, i) => (
              <div key={i} className={``}>
                <ChallengeCard
                  businessChallenge={businessChallenge}
                  hasGlassmorphism={true}
                />
              </div>
            ))}
          </div>
          {/* </div> */}
        </DynamicBubbles>
      </div>
    </div>
  );
};

export default Challenges;
