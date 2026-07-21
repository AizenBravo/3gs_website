import React from 'react';
import Image from 'next/image';
import PipeV8Image from '@/public/assets/stock/pipe_v8.1.webp';
import CustomCard from '@core/components/card/custom-card';
import { CardContent } from '@core/components/ui/card';
import PipeLabel from './pipe-label';

interface PipeV4Props {
  header?: React.ReactNode;
  body: React.ReactNode;
  opacity?: number;
}

const PipeV4 = ({ header, body, opacity = 35 }: PipeV4Props) => {
  return (
    <div className="relative w-full aspect-[500/150] min-h-[140px] flex items-center overflow-hidden rounded-lg select-none bg-red-600">
      {/* Background Pipeline Image */}
      <div className="absolute inset-0 rounded-full pointer-events-none bg-pink-500">
        <Image
          src={PipeV8Image}
          alt="Pipeline Background"
          // fill
          style={{
            width: '100%',
            height: 'auto',
            background: 'teal',
            // height: 'auto',
          }}
          sizes="(max-width: 768px) 100vw, 500px"
          // sizes="(max-width: 768px) 100vw, 500px"
          className="object-cover pointer-events-none"
          priority
        />
        <Image
          src={PipeV8Image}
          alt="Pipeline Background"
          // fill
          style={{
            width: '100%',
            height: 'auto',
            background: 'teal',
            // height: 'auto',
          }}
          sizes="(max-width: 768px) 100vw, 500px"
          // sizes="(max-width: 768px) 100vw, 500px"
          className="object-cover pointer-events-none"
          priority
        />
      </div>

      {/* Grid Overlay for Content Positioning */}
      <div className="relative z-10 w-full h-full flex items-center px-[4%] md:px-[6%]">
        {/* Left Side: Header Sticker */}
        <div className="w-[42%] h-[60%] flex items-center justify-center">
          {header && <PipeLabel className="w-full h-full">{header}</PipeLabel>}
        </div>

        {/* Right Side: Glassmorphic Card Content */}
        <div className="w-[58%] h-full flex items-center pl-[6%] pr-[2%]">
          <CustomCard
            hasGlassmorphism={true}
            opacity={opacity}
            className="w-full max-h-[85%] border-none shadow-none text-foreground flex items-center justify-center overflow-auto"
          >
            <CardContent className="p-2 sm:p-4 text-xs sm:text-sm md:text-base font-medium text-center w-full">
              {body}
            </CardContent>
          </CustomCard>
        </div>
      </div>
    </div>
  );
};

export default PipeV4;
