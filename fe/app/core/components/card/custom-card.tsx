import React from "react";
import { glassmorphism } from "@core/css-custom-classes/card";
import { Card } from "../ui/card";

const CustomCard = ({
  children,
  className,
  hasGlassmorphism = false,
  opacity = 95,
  hslBackground = "var(--card)",
}: {
  children: React.ReactNode;
  className?: string;
  hasGlassmorphism?: boolean;
  opacity?: number;
  hslBackground?: string;
}) => {
  const cardStyle: React.CSSProperties = hasGlassmorphism
    ? {
      backgroundColor: `hsl(${hslBackground} / ${opacity / 100})`, // Use HSL with transparency
    }
    : {};

  const cardCssClasses = hasGlassmorphism ? glassmorphism : "";

  return (
    <Card className={`${cardCssClasses} ${className}`} style={cardStyle}>
      {children}
    </Card>
  );
};

export default CustomCard;
