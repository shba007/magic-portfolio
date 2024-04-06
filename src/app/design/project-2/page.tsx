import Link from 'next/link';
import Image from 'next/image';
import AppFooter from '@/app/components/AppFooter';
import ProjectCard from '@/app/components/ProjectCard';

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
		<main className="m-4 md:mx-auto max-w-[67.5rem]">
			{' '}
			<section className="flex flex-col gap-7 md:px-10 md:py-7">
				<h1 className="font-semibold text-2xl md:text-4xl">{projectName}</h1>
				<p className="max-w-[34rem] text-sm md:text-base opacity-60">
					{details[0]}
					<br />
					<br />
					{details[1]}
				</p>
			</section>
			<ul className="flex gap-3 py-4 md:p-7">
				<Link href="/design/project-1" className="tab rounded-full px-4 py-2 w-fit text-[0.65rem] cursor-pointer whitespace-nowrap">
					Project 1
				</Link>
				<Link href="/design/project-2" className="tab rounded-full px-4 py-2 w-fit text-[0.65rem] cursor-pointer whitespace-nowrap">
					Project 2
				</Link>
				<Link href="/design/project-3" className="tab rounded-full px-4 py-2 w-fit text-[0.65rem] cursor-pointer whitespace-nowrap">
					Project 3
				</Link>
			</ul>
			<section className="rounded-[1.875rem] p-1.5 w-full aspect-[2] card-gradient">
				<Image src="/images/project-cover-2.jpg" width={1440} height={1440} alt="project-cover" className="rounded-[1.875rem]" />
			</section>
			<section className="flex flex-col md:flex-row justify-between items-center gap-20 my-4 md:my-36">
				<div className="w-full md:w-[39.375rem] aspect-[1.1] bg-white/10 rounded-2xl" />
				<div className="flex flex-col gap-8 max-w-md">
					<h2 className="text-2xl md:text-4xl font-semibold">Project title and some additional information</h2>
					<p className="text-base md:text-lg">
						Explain what your project is about: what kind of problem does it solve, who is the target group, and how does it provide a sufficient solution?
					</p>
					<p className="text-xs">
						You can additionally provide more details, but try to be brief. Nobody wants to read long texts, so it’s crucial to have a good balance of /images
						and te
					</p>
					<Link href={''} className="tab rounded-full px-4 py-2 w-fit text-[0.65rem] cursor-pointer">
						Visit Link
					</Link>
				</div>
			</section>
			<section>
				<div className="flex flex-col gap-4 md:gap-8 mx-auto my-4 md:my-8 max-w-3xl text-center">
					<h2 className="mx-auto w-fit text-2xl md:text-4xl font-semibold">
						<span>Section title:</span>
						<br />
						And a subtitle
					</h2>
					<p className="text-base md:text-lg text-white/80">
						Explain an important feature of the project and show some image variations to showcase your versatile solution to a problem.
					</p>
				</div>
				<ProjectCard title="Add image" description='Change the fill type to "image"' img="cover-1.jpg" icon="thunder.svg" isSizeFluid={true} />
			</section>
			<section className="flex flex-col md:flex-row justify-between gap-8 md:gap-20 my-4 md:my-36">
				<div className="flex flex-col gap-8 max-w-md text-right">
					<h2 className="font-semibold text-2xl md:text-4xl">
						Section title:
						<br />
						And a subtitle
					</h2>
					<p className="text-base md:text-lg">
						Explain an important feature of the project and show some image variations to showcase your versatile solution to a problem.
					</p>
				</div>
				<div className="w-full md:w-[36.375rem] aspect-[0.75] bg-white/10 rounded-2xl" />
			</section>
			<section className="flex flex-col gap-8 my-8 md:my-24 max-w-3xl text-left">
				<h2 className="text-2xl md:text-4xl font-semibold">
					Takeaway:
					<br />
					And a subtitle
				</h2>
				<p className="text-base md:text-lg">
					Write about what you’ve learned during this project, what are the main takeaways and what will you do differently in your next projects.
				</p>
			</section>
			<AppFooter />
		</main>
	);
}
