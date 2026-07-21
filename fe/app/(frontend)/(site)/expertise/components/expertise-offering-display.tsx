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
      className={`test ${flexCenterTwoAxis({ flexDirection: FlexDirection.ROW })} gap-6`}
      key={`expertiseOffering-${id}`}
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
  ) : (
    <div
      className={`test ${flexCenterTwoAxis({ flexDirection: FlexDirection.ROW })} gap-6`}
      key={`expertiseOffering-${id}`}
    >
      <expertiseOffering.afterIcon width={iconSize} height={iconSize} />
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
      <expertiseOffering.beforeIcon width={iconSize} height={iconSize} />
    </div>
  );
};

export default ExpertiseOfferingDisplay;
