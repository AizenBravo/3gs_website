'use client';
import { flexCenterTwoAxis } from '@core/css-custom-classes/flex';
import Link from 'next/link';
import React, { ReactNode } from 'react';
import { NavigationTools } from './navigation-tools';
import { navbarConfig } from '@core/config/navbar-config';
import { Separator } from '../ui/separator';
import { SidebarTrigger } from '../ui/sidebar';

export const Navbar = ({
	logo = 'InvesTools',
	hasSeparator = true,
}: {
	logo?: string | ReactNode;
	hasSeparator?: boolean;
}) => {
	return (
		<header className="border-grid sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div
				className={`${flexCenterTwoAxis(
					{}
				)} flex-nowrap gap-3 px-8 md:px-12 py-5`}
			>
				<SidebarTrigger />
				<div className="logo-container max-w-24 px-2 py-1">{logo}</div>
				<div
					className={`hidden sm:flex ${flexCenterTwoAxis(
						{}
					)} navigation-links gap-5`}
				>
					{navbarConfig.map((navConfData, i) => (
						<Link
							href={navConfData.href}
							key={i}
							className="max-w-24 text-wrap"
						>
							{navConfData.title}
						</Link>
					))}
				</div>
				<NavigationTools />
			</div>
			{hasSeparator && <Separator />}
		</header>
	);
};
