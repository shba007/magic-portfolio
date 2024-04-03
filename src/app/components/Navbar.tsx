'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useLayoutEffect, useState } from 'react';

export default function Navbar() {
	const internalLinks = [
		{ icon: 'home', path: '/' },
		{ icon: 'angle', path: '/design/project-1' },
		{ icon: 'palette', path: '/art' },
		{ icon: 'camera', path: '/photograph' },
	];
	const externalLinks = [
		{ icon: 'linkedin', path: 'https://www.linkedin.com/company/once-ui' },
		{ icon: 'dribbble', path: 'https://dribbble.com/once-ui' },
	];

	const currPath = usePathname();
	const [heightlightRow, setHeighlightRow] = useState(0);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		for (const index in internalLinks) {
			const { path } = internalLinks[index];
			if (path == currPath) setHeighlightRow(parseInt(index));
		}
	}, [currPath]);

	useLayoutEffect(() => {
		setIsMobile(window.innerWidth < 768);
	}, []);

	return (
		<nav className="fixed left-1/2 bottom-4 md:top-4 md:bottom-auto md:left-4 -translate-x-1/2 md:translate-x-0 p-1 rounded-full border border-white/10 navbar !bg-black z-10">
			<ul className="relative grid grid-flow-col md:grid-flow-row grid-rows-1 md:grid-rows-none grid-cols-none md:grid-cols-1 items-center justify-items-center">
				<span
					id="highlight"
					className="absolute -top-0.5 bottom-0 md:left-0 md:right-0 size-10 rounded-full bg-white/10 duration-300"
					style={isMobile ? { left: `calc(2.5rem*${heightlightRow})` } : { top: `calc(2.25rem*${heightlightRow})` }}
				/>
				{internalLinks.map(({ icon, path }, index) => (
					<li key={icon} className="flex justify-center items-center p-2 w-10 h-9">
						<Link href={path} className={`flex flex-col gap-2 items-center justify-center ${currPath == path && 'translate-y-1'}`}>
							<Image
								src={`/icons/${icon}.svg`}
								alt={icon}
								width={18}
								height={18}
								className={`size-[18px] ${currPath == path && 'scale-[1.33]'} duration-500`}
							/>
							<span className={`${currPath == path ? 'inline-block' : 'hidden'} rounded-full size-1 bg-[#AAAEB9]`} />
						</Link>
					</li>
				))}
				<span className="inline-block my-3 w-0.5 md:w-full h-full md:h-0.5 bg-[#AAAEB9]" />
				{externalLinks.map(({ icon, path }) => (
					<li key={icon} className="flex justify-center items-center p-2 size-9">
						<Link href={path} target="_blank">
							<Image src={`/icons/${icon}.svg`} alt={icon} width={24} height={24} className={`size-6`} />
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
