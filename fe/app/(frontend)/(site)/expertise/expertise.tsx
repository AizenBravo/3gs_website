import Pipe from '@core/components/pipe/pipe';
import PipeV2 from '@core/components/pipe/pipe-v2';
import PipeV3 from '@core/components/pipe/pipe-v3';
import TriangleLayout from '@core/components/shapes/triangle-layout';
import { columnFlex } from '@core/css-custom-classes/flex';
import { sectionVerticalPadding } from '@core/css-custom-classes/section';
import { h2 } from '@core/css-custom-classes/text';

const Expertise = () => {
  // Add the bricks-like structure you had on your portfolio, perhaps also do those rbicks in the form
  // Of a castle colum
  const subtitle = 'What we offer to your business';

  return (
    <div className={``} id="expertise">
      <div className={`${columnFlex({})} ${sectionVerticalPadding} `}>
        <h2 className={`${h2} text-right`}>{subtitle}</h2>
        {/* Since we will not offer customs services yet, we will only have one service, i.e., developing
        Software for businesses to increment their productivity and earnings by removing inefficiencies */}
        <Pipe
          body={
            <p className="text-base">
              We develop custom software solutions tailored to your business
              needs.
            </p>
          }
          opacity={35}
        />
        <PipeV2
          header={<h3>Custom software development</h3>}
          body={
            <p className="text-base">
              We develop custom software solutions tailored to your business
              needs.
            </p>
          }
          opacity={35}
        />
      </div>
      <PipeV3>
        <p>Custom software development</p>
      </PipeV3>
    </div>
  );
};

export default Expertise;
