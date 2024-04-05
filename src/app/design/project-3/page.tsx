import Link from 'next/link';
import Image from 'next/image';
import AppFooter from '@/app/components/AppFooter';

export default function Design() {
	const projectName = 'Design Projects';
	const details = [
		`Product design is a dynamic and multifaceted discipline that blends aesthetics, functionality, and innovation to create products that enhance
		users'; lives and experiences. Through a meticulous process of research, ideation, prototyping, and iteration, product designers transform
		concepts into tangible solutions, addressing both practical needs and emotional desires.`,
		`Striking a delicate balance between form and function, product design continually evolves to adapt to emerging technologies, societal trends, and user
		preferences, shaping the way we interact with the world around us and defining the landscape of our everyday lives.`,
	];

	return (
		<main className="mx-auto max-w-[67.5rem]">
			{' '}
			<section className="flex flex-col gap-7 px-10 py-7">
				<h1 className="font-semibold text-4xl">{projectName}</h1>
				<p className="max-w-[34rem] text-base opacity-60">
					{details[0]}
					<br />
					<br />
					{details[1]}
				</p>
			</section>
			<ul className="flex gap-3 p-7">
				<Link href="/design/project-1" className="tab rounded-full px-4 py-2 w-fit text-[0.65rem] cursor-pointer">
					Project 1
				</Link>
				<Link href="/design/project-2" className="tab rounded-full px-4 py-2 w-fit text-[0.65rem] cursor-pointer">
					Project 2
				</Link>
				<Link href="/design/project-3" className="tab rounded-full px-4 py-2 w-fit text-[0.65rem] cursor-pointer">
					Project 3
				</Link>
			</ul>
			<section className="rounded-[1.875rem] p-1.5 w-full aspect-[2] card-gradient">
				<Image src="/images/project-cover-3.jpg" width={1440} height={1440} alt="project-cover" className="rounded-[1.875rem]" />
			</section>
			<AppFooter />
		</main>
	);
}
