import ProjectCard from '@/app/components/ProjectCard';
import AppFooter from '@/app/components/AppFooter';

export default function Home() {
	const name = 'Your Name';
	return (
		<main className="mx-auto max-w-[67.5rem]">
			<div className="flex flex-col gap-7 px-10 py-7">
				<h1 className="font-semibold text-4xl">{name}</h1>
				<p className="max-w-[34rem] text-base opacity-60">
					Welcome to the extraordinary world of {name}, a versatile and imaginative artist who skillfully navigates the realms of product design, photography
					and digital art. With a keen eye for detail and a relentless pursuit of innovation, {name} crafts captivating visual narratives, immersive digital
					realms, and functional yet aesthetically pleasing products.
				</p>
			</div>
			<div className="flex flex-col gap-10">
				<h2 className="px-10 font-semibold text-3xl">Projects</h2>
				<div className="relative left-1/2 -translate-x-1/2 w-[calc(100vw-1.5rem)] px-4 overflow-x-scroll scrollbar-hidden">
					<div className="flex gap-7 w-fit mx-32">
						<ProjectCard title="Design" description="My design projects" img="/images/cover-1.jpg" icon="/icons/angle.svg" link="/design/project-1" />
						<ProjectCard title="Art" description="My art projects" img="/images/cover-2.jpg" icon="/icons/palette.svg" link="/art" />
						<ProjectCard title="Photography" description="My photos" img="/images/cover-3.jpg" icon="/icons/image.svg" link="/photograph" />
					</div>
				</div>
			</div>
			<AppFooter />
		</main>
	);
}
