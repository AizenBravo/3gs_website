'use client'
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'
import { ReactNode } from 'react';

const DynamicBackground = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-xl">
      <div className="absolute inset-0 -z-10">
        <ShaderGradientCanvas style={{ width: '100%', height: '100%', pointerEvents: 'none' }}>
          <ShaderGradient
            animate="on"
            brightness={1.2}
            cAzimuthAngle={180}
            cDistance={3.6}
            cPolarAngle={90}
            cameraZoom={1}
            color1="#42f6ff"
            color2="#00003c"
            color3="#b4bbd1"
            grain="off"
            lightType="env"
            positionX={-1.4}
            positionY={0}
            positionZ={0}
            range="disabled"
            rangeEnd={40}
            rangeStart={0}
            reflection={0.1}
            rotationX={0}
            rotationY={10}
            rotationZ={50}
            shader="defaults"
            type="waterPlane"
            uAmplitude={1}
            uDensity={1.3}
            uFrequency={5.5}
            uSpeed={0.2}
            uStrength={3.8}
            uTime={0}
            wireframe={false}
          />
        </ShaderGradientCanvas>
      </div>
      <div className="relative z-10 w-full h-full p-6 sm:p-10">
        {children}
      </div>
    </div>
  )
}

export default DynamicBackground;