import React from 'react';
import CustomCard from '@core/components/card/custom-card';
import { CardContent, CardHeader } from '@core/components/ui/card';
import { flexCenterTwoAxis } from '@core/css-custom-classes/flex';
import ArrowLeftSVG from '@core/svgs/arrow-left.svg';
import ArrowRightSVG from '@core/svgs/arrow-right.svg';

interface PipeV5Props {
  header?: React.ReactNode;
  body: React.ReactNode;
  opacity?: number;
  isArrowPointingRight?: boolean;
}

const PipeV5 = ({
  header,
  body,
  opacity = 35,
  isArrowPointingRight = true,
}: PipeV5Props) => {
  return (
    <div className="relative w-full min-h-[140px] flex items-center overflow-hidden rounded-lg select-none bg-transparent">
      {/* Background Pipeline Image / SVG Arrow */}
      <div
        className={`absolute inset-0 pointer-events-none ${flexCenterTwoAxis({})}`}
      >
        {isArrowPointingRight ? (
          <ArrowRightSVG
            className="w-full h-[28px] pointer-events-none"
            fill="var(--jet-gray)"
            stroke="var(--jet-gray)"
            style={{
              width: '1200px',
              height: '200px',
            }}
          />
        ) : (
          <ArrowLeftSVG
            className="w-full h-[28px] pointer-events-none"
            fill="var(--jet-gray)"
            stroke="var(--jet-gray)"
            style={{
              width: '100%',
            }}
          />
        )}
      </div>

      <div className="relative z-10 w-full h-full flex items-center justify-center px-[4%] md:px-[6%] max-w-[900px] mx-auto">
        <CustomCard
          hasGlassmorphism={true}
          opacity={opacity}
          className="w-full max-w-[70%] max-h-[85%] border border-white/10 shadow-xl text-foreground flex flex-col items-center justify-center overflow-hidden py-3 px-4"
        >
          {header && (
            <CardHeader className="w-full p-0 pb-1.5 text-center font-bold tracking-tight">
              {header}
            </CardHeader>
          )}
          <CardContent className="p-0 text-xs sm:text-sm font-medium text-center w-full">
            {body}
          </CardContent>
        </CustomCard>
      </div>
    </div>
  );
};

export default PipeV5;
