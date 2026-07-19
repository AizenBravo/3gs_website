import { PipeData } from '@core/interfaces/pipe-data.interface';
import React from 'react';

const Pipe = ({
  header,
  body,
  opacity = 30,
}: PipeData & { opacity?: number }) => {
  const opacityVal = Math.min(Math.max(opacity, 0), 100);

  return (
    <div className="relative flex items-stretch w-full min-h-[3.5rem] rounded-full border border-primary/30 shadow-md transition-all duration-300 hover:border-primary/60 hover:shadow-lg">
      {/* 3D Cylindrical Reflection Overlay */}
      <div
        className="absolute inset-0 rounded-full -z-10 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom, 
            color-mix(in oklch, var(--primary) 40%, transparent) 0%, 
            color-mix(in oklch, var(--primary) ${opacityVal}%, transparent) 30%, 
            color-mix(in oklch, var(--primary) ${Math.max(0, opacityVal - 15)}%, transparent) 70%, 
            color-mix(in oklch, var(--primary) 45%, transparent) 100%)`,
        }}
      />

      {/* Header (Cap on the left) */}
      {header && (
        <div className="relative flex items-center justify-center px-6 py-2 bg-primary text-primary-foreground font-semibold text-sm tracking-wider uppercase rounded-l-full border-r border-primary/20 shadow-[2px_0_8px_rgba(0,0,0,0.15)] z-10 shrink-0 min-w-[120px] text-center">
          {header}
        </div>
      )}

      {/* Body Content */}
      <div className="flex-1 flex items-center px-6 py-2 text-foreground font-medium z-10">
        {body}
      </div>
    </div>
  );
};

export default Pipe;
