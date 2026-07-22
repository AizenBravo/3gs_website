import PipeV5 from '@core/components/pipe/pipe-v5';
import { flexCenterTwoAxis } from '@core/css-custom-classes/flex';
import { FlexDirection } from '@core/enums/flex-direction.enum';
import { ExpertiseOffering } from '@core/interfaces/expertise-offering.interface';

const ExpertiseOfferingDisplay = ({
  id,
  expertiseOffering,
  iconSize,
  cardOpacity,
}: {
  id: number;
  expertiseOffering: ExpertiseOffering;
  iconSize: number;
  cardOpacity: number;
}) => {
  return id % 2 === 0 ? (
    <div
      className={`group test ${flexCenterTwoAxis({ flexDirection: FlexDirection.ROW })} gap-6 w-full`}
      key={`expertiseOffering-${id}`}
    >
      <expertiseOffering.beforeIcon width={iconSize} height={iconSize} className="before-icon-glow shrink-0" />
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
      <expertiseOffering.afterIcon width={iconSize} height={iconSize} className="after-icon-glow shrink-0" />
    </div>
  ) : (
    <div
      className={`group test ${flexCenterTwoAxis({ flexDirection: FlexDirection.ROW })} gap-6 w-full`}
      key={`expertiseOffering-${id}`}
    >
      <expertiseOffering.afterIcon width={iconSize} height={iconSize} className="after-icon-glow shrink-0" />
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
        isArrowPointingRight={false}
      />
      <expertiseOffering.beforeIcon width={iconSize} height={iconSize} className="before-icon-glow shrink-0" />
    </div>
  );
};

export default ExpertiseOfferingDisplay;
