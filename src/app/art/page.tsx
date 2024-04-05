import AppFooter from '@/app/components/AppFooter';
import ProjectCard from '@/app/components/ProjectCard';

export default function Art() {
	const projectName = 'Art Projects';
	const details = [
		`Digital art is an imaginative and enchanting genre that transports viewers into realms of the extraordinary, where artists 
		merge creativity with digital tools to craft striking visual narratives. By manipulating color, form, and texture, these 
		artists breathe life into mythical creatures, enchanted landscapes, and surreal worlds, provoking wonder and awe.`,
		`The boundless possibilities of digital artistry constantly challenge the limits of the imagination, inspiring artists 
		to create ever more immersive and intricate masterpieces that captivate the mind and stir the soul.`,
	];

	return (
		<main className="mx-auto max-w-[67.5rem]">
			<section className="flex flex-col gap-7 px-10 py-7">
				<h1 className="font-semibold text-4xl">{projectName}</h1>
				<p className="max-w-[34rem] text-base opacity-60">
					{details[0]}
					<br />
					<br />
					{details[1]}
				</p>
			</section>
			<section className="grid grid-cols-2 grid-flow-row gap-2">
				<div className="col-span-2 w-full aspect-[2.023] bg-white/10 rounded-[2rem]" />
				<div className="row-span-2 col-span-1 w-full aspect-[0.81] bg-white/10 rounded-[2rem]" />
				<div className="col-span-1 w-full aspect-[1.67] bg-white/10 rounded-[2rem]" />
				<div className="col-span-1 w-full aspect-[1.67] bg-white/10 rounded-[2rem]" />
				<div className="col-span-2 w-full aspect-[2.023] bg-white/10 rounded-[2rem]" />
				<div className="col-span-1 w-full aspect-[1.67] bg-white/10 rounded-[2rem]" />
				<div className="row-span-2 col-span-1 w-full aspect-[0.81] bg-white/10 rounded-[2rem]" />
				<div className="col-span-1 w-full aspect-[1.67] bg-white/10 rounded-[2rem]" />
				<ProjectCard
					className="col-span-2"
					title="Add image"
					description='Change the fill type to "image"'
					img="/images/cover-1.jpg"
					icon="/icons/thunder.svg"
					isSizeFluid={true}
				/>
			</section>
			<AppFooter />
		</main>
	);
}
