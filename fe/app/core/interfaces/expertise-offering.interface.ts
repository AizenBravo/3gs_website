import { LucideProps } from 'lucide-react';
import React from 'react';

export interface ExpertiseOffering {
  title: string;
  description: string;
  beforeIcon: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >;
  afterIcon: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >;
}
