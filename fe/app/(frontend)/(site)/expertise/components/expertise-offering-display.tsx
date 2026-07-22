import PipeV5 from '@core/components/pipe/pipe-v5';
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
  const isEven = id % 2 === 0;

  // On desktop (md+): horizontal row with icon → pipe → icon
  // On mobile: vertical column with icon on top → pipe (arrow rotated 90°) → icon on bottom
  const BeforeIcon = expertiseOffering.beforeIcon;
  const AfterIcon = expertiseOffering.afterIcon;

  return (
    <div
      className={`group flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 w-full`}
      key={`expertiseOffering-${id}`}
    >
      {/* First icon: beforeIcon for even, afterIcon for odd */}
      {isEven ? (
        <BeforeIcon
          width={iconSize}
          height={iconSize}
          className="before-icon-glow shrink-0"
        />
      ) : (
        <AfterIcon
          width={iconSize}
          height={iconSize}
          className="after-icon-glow shrink-0"
        />
      )}

      <PipeV5
        opacity={cardOpacity}
        isArrowPointingRight={isEven}
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

      {/* Second icon: afterIcon for even, beforeIcon for odd */}
      {isEven ? (
        <AfterIcon
          width={iconSize}
          height={iconSize}
          className="after-icon-glow shrink-0"
        />
      ) : (
        <BeforeIcon
          width={iconSize}
          height={iconSize}
          className="before-icon-glow shrink-0"
        />
      )}
    </div>
  );
};

export default ExpertiseOfferingDisplay;
