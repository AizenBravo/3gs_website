import { BusinessChallenge } from "@core/interfaces/business-challenge.interface";

import { Repeat, HandIcon, Trash2 } from "lucide-react";


export const commonChallengesBusinessesSuffer: BusinessChallenge[] = [
  {
    title: 'Repetitive processes',
    description: 'Does your business have many processes that are repeated but slow down your advancement?',
    icon: Repeat
  },
  {
    title: 'Manual processes',
    description: 'Does it become hard to manage and execute processes that require a lot of labor?',
    icon: HandIcon
  },
  {
    title: 'Wasteful processes',
    description: 'We identify bottlenecks on processes to optimize them',
    icon: Trash2
  }
];