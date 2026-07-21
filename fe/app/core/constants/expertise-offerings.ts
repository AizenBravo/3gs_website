import {
  Calculator,
  ChartNoAxesCombined,
  DatabaseZap,
  Repeat2,
  Trash2,
  Workflow,
} from 'lucide-react';
import { ExpertiseOffering } from '../interfaces/expertise-offering.interface';

export const expertiseOfferings: ExpertiseOffering[] = [
  {
    title: 'Automated Ecosystems',
    description:
      'We replace repetitive processes with intelligent, hands-free software workflows.',
    beforeIcon: Repeat2,
    afterIcon: Workflow,
  },
  {
    title: 'Data & Financial Intelligence',
    description:
      'We eliminate manual calculations in Finance, Economics, and Crypto to give you real-time visibility.',
    beforeIcon: Calculator,
    afterIcon: DatabaseZap,
  },
  {
    title: 'Lean Infrastructure',
    description:
      'We audit wasteful operational processes and replace them with scalable digital assets.',
    beforeIcon: Trash2,
    afterIcon: ChartNoAxesCombined,
  },
];
