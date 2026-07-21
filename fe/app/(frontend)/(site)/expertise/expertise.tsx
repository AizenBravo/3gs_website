import Pipe from '@core/components/pipe/pipe';
import PipeV2 from '@core/components/pipe/pipe-v2';
import PipeV3 from '@core/components/pipe/pipe-v3';
import PipeV4 from '@core/components/pipe/pipe-v4';
import PipeV5 from '@core/components/pipe/pipe-v5';
import TriangleLayout from '@core/components/shapes/triangle-layout';
import { expertiseOfferings } from '@core/constants/expertise-offerings';
import { columnFlex, flexCenterTwoAxis } from '@core/css-custom-classes/flex';
import { sectionVerticalPadding } from '@core/css-custom-classes/section';
import { h2 } from '@core/css-custom-classes/text';
import { FlexDirection } from '@core/enums/flex-direction.enum';
import { Repeat2 } from 'lucide-react';

const Expertise = () => {
  // Add the bricks-like structure you had on your portfolio, perhaps also do those rbicks in the form
  // Of a castle colum
  const subtitle = 'What we offer to your business';
  const iconSize = 100;
  const cardOpacity = 42;

  return (
    <div className={``} id="expertise">
      <div className={`${columnFlex({})} ${sectionVerticalPadding} `}>
        <h2 className={`${h2} text-right`}>{subtitle}</h2>
        {/* Since we will not offer customs services yet, we will only have one service, i.e., developing
        Software for businesses to increment their productivity and earnings by removing inefficiencies */}
        {expertiseOfferings.map((expertiseOffering, i) => (
          <div
            className={`test ${flexCenterTwoAxis({ flexDirection: FlexDirection.ROW })} gap-6`}
            key={`expertiseOffering-${i}`}
          >
            <expertiseOffering.beforeIcon width={iconSize} height={iconSize} />
            <PipeV5
              opacity={cardOpacity}
              header={
                <h2
                  className={`text-center line-clamp-4 overflow-hidden text-ellipsis`}
                >
                  {expertiseOffering.title}
                </h2>
              }
              body={
                <div className={`line-clamp-3 overflow-hidden text-ellipsis`}>
                  <p>{expertiseOffering.description}</p>
                </div>
              }
            />
            <expertiseOffering.afterIcon width={iconSize} height={iconSize} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Expertise;
