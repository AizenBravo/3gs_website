'use client';

import { FlexDirection } from '../enums/flex-direction.enum';

export function flexCenterTwoAxis({
  flexDirection = FlexDirection.ROW,
}: {
  flexDirection?: FlexDirection;
}) {
  return `flex ${flexDirection} justify-between items-center`;
}
