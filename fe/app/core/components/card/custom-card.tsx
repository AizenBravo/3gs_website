import React from "react";
import { glassmorphism } from "@core/css-custom-classes/card";
import { Card } from "../ui/card";

const CustomCard = ({
  children,
  className,
  hasGlassmorphism = false,
  opacity = 95,
  hslBackground = "var(--card)",
  hasBorder = true
}: {
  children: React.ReactNode;
  className?: string;
  hasGlassmorphism?: boolean;
  opacity?: number;
  hslBackground?: string;
  hasBorder?: boolean;
}) => {
  let cardStyle: React.CSSProperties = hasGlassmorphism
    ? {
      backgroundColor: `color-mix(in oklch, ${hslBackground} ${opacity}%, transparent)`,
    }
    : {};

  if (!hasBorder) {
    console.log('XD, no border')
    cardStyle = { ...cardStyle, border: 'none' }
  }


  const cardCssClasses = hasGlassmorphism ? glassmorphism : "";

  return (
    <Card className={`${cardCssClasses} ${className}`} style={cardStyle}>
      {children}
    </Card>
  );
};

export default CustomCard;
