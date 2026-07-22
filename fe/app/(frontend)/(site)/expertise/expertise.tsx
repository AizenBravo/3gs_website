import Pipe from '@core/components/pipe/pipe';
import PipeV2 from '@core/components/pipe/pipe-v2';
import PipeV3 from '@core/components/pipe/pipe-v3';
import PipeV4 from '@core/components/pipe/pipe-v4';
import PipeV5 from '@core/components/pipe/pipe-v5';
import TriangleLayout from '@core/components/shapes/triangle-layout';
import { expertiseOfferings } from '@core/constants/expertise-offerings';
import { columnFlex, flexCenterTwoAxis } from '@core/css-custom-classes/flex';
import { sectionHorizontalPadding } from '@core/css-custom-classes/section';
import { h2 } from '@core/css-custom-classes/text';
import { FlexDirection } from '@core/enums/flex-direction.enum';
import { Repeat2 } from 'lucide-react';
import ExpertiseOfferingDisplay from './components/expertise-offering-display';
import { GapSize } from '@core/enums/gap-size';

const Expertise = () => {
  // Add the bricks-like structure you had on your portfolio, perhaps also do those rbicks in the form
  // Of a castle colum
  const subtitle = 'What we offer to your business';
  const iconSize = 100;
  const cardOpacity = 42;

  return (
    <div className={``} id="expertise">
      <div
        className={`flex flex-col ${sectionHorizontalPadding} gap-20 sm:gap-4`}
      >
        <h2 className={`${h2} text-right`}>{subtitle}</h2>
        {/* Since we will not offer customs services yet, we will only have one service, i.e., developing
        Software for businesses to increment their productivity and earnings by removing inefficiencies */}
        {expertiseOfferings.map((expertiseOffering, i) => (
          <ExpertiseOfferingDisplay
            key={`expertiseOffering-${i}`}
            id={i}
            expertiseOffering={expertiseOffering}
            iconSize={iconSize}
            cardOpacity={cardOpacity}
          />
        ))}
      </div>
    </div>
  );
};

export default Expertise;
