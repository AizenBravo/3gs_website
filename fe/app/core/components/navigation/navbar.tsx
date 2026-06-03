'use client';
import { flexCenterTwoAxis } from '@core/css-custom-classes/flex';
import Link from 'next/link';
import { ReactNode } from 'react';
import { NavigationTools } from './navigation-tools';
import { navbarConfig } from '@core/config/navbar-config';
import { Separator } from '../ui/separator';
import Image from 'next/image';
import saegisulLogo from '@/public/assets/logos/logo_3gs.svg';

export const Navbar = ({
	logo = (
		<Image
			src={saegisulLogo}
			alt="3GS Logo"
			width={40}
			height={40}
			priority
			className="h-10 w-auto"
		/>
	),
	hasSeparator = true,
}: {
	logo?: ReactNode;
	hasSeparator?: boolean;
}) => {
	return (
		<header className="border-grid sticky top-0 z-50 w-full bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div
				className={`${flexCenterTwoAxis(
					{}
				)} flex-nowrap gap-3 px-8 md:px-12 py-5`}
			>
				<div className="logo-container px-2 py-1">{logo}</div>
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
