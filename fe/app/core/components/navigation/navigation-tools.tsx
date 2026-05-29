import React from 'react';
import { ModeToggle } from '../ui/mode-toggle';
import { flexCenterTwoAxis } from '@core/css-custom-classes/flex';

export const NavigationTools = () => {
	return (
		<div className={`${flexCenterTwoAxis({})}`}>
			<ModeToggle />
		</div>
	);
};
