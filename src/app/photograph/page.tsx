import AppFooter from '@/app/components/AppFooter';
import ProjectCard from '@/app/components/ProjectCard';
import Image from 'next/image';

export default function Photograph() {
	const projectName = 'Photography';
	const details = [
		`Photography is a captivating art form that captures moments in time, preserving memories and emotions within a single frame. 
		Through the skilled interplay of light, composition, and subject matter, photographers can convey powerful narratives and evoke a variety of emotions.`,
		`As a constantly evolving medium, photography continues to push the boundaries of creativity,
		 allowing artists to experiment with innovative techniques and technologies to produce stunning visual masterpieces.`,
	];

	return (
		<main className="m-4 md:mx-auto max-w-[67.5rem]">
			<section className="flex flex-col gap-7 md:px-10 md:py-7">
				<h1 className="font-semibold text-2xl md:text-4xl">{projectName}</h1>
				<p className="max-w-[34rem] text-sm md:text-base opacity-60">
					{details[0]}
					<br />
					<br />
					{details[1]}
				</p>
			</section>
			<section className="grid grid-cols-2 grid-flow-row gap-2 my-4">
				<div className="col-span-2 w-full aspect-[2.023] bg-white/10 rounded-lg md:rounded-[2rem]" />
				<div className="row-span-2 col-span-1 w-full aspect-[0.81] bg-white/10 rounded-lg md:rounded-[2rem]" />
				<div className="col-span-1 w-full aspect-[1.67] bg-white/10 rounded-lg md:rounded-[2rem]" />
				<div className="col-span-1 w-full aspect-[1.67] bg-white/10 rounded-lg md:rounded-[2rem]" />
				<div className="col-span-2 w-full aspect-[2.023] bg-white/10 rounded-lg md:rounded-[2rem]" />
				<div className="col-span-1 w-full aspect-[1.67] bg-white/10 rounded-lg md:rounded-[2rem]" />
				<div className="row-span-2 col-span-1 w-full aspect-[0.81] bg-white/10 rounded-lg md:rounded-[2rem]" />
				<div className="col-span-1 w-full aspect-[1.67] bg-white/10 rounded-lg md:rounded-[2rem]" />
				<ProjectCard
					className="col-span-2"
					title="Add image"
					description='Change the fill type to "image"'
					img="cover-1.jpg"
					icon="thunder.svg"
					isSizeFluid={true}
				/>
			</section>
			<AppFooter />
		</main>
	);
}
