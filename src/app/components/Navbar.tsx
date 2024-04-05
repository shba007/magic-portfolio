'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

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

	useEffect(() => {
		for (const index in internalLinks) {
			const { path } = internalLinks[index];
			if (path == currPath) setHeighlightRow(parseInt(index) + 1);
		}
	}, [currPath]);

	return (
		<nav className="fixed top-4 left-4 p-1 rounded-full border border-white/10 navbar !bg-black z-10">
			<ul className="relative grid grid-flow-row grid-cols-1 items-center justify-items-center">
				<span className="col-start-1 size-14 rounded-full bg-white/10 duration-300" style={{ gridRowStart: heightlightRow }} />
				{internalLinks.map(({ icon, path }, index) => (
					<li key={icon} className="col-start-1 flex justify-center items-center p-3 size-12" style={{ gridRowStart: index + 1 }}>
						<Link href={path} className={`flex flex-col gap-2 items-center justify-center ${currPath == path && 'translate-y-1'}`}>
							<Image src={`/icons/${icon}.svg`} alt={icon} width={24} height={24} className={`size-6 ${currPath == path && 'scale-[1.33]'} duration-500`} />
							<span className={`${currPath == path ? 'inline-block' : 'hidden'} rounded-full size-1 bg-[#AAAEB9]`} />
						</Link>
					</li>
				))}
				<span className="col-start-1 inline-block my-4 w-full h-0.5 bg-[#AAAEB9]" />
				{externalLinks.map(({ icon, path }) => (
					<li key={icon} className="p-3 pt-0 size-12">
						<Link href={path} target="_blank">
							<Image src={`/icons/${icon}.svg`} alt={icon} width={24} height={24} className={`size-6`} />
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
