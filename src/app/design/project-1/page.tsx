import AppFooter from '@/app/components/AppFooter';
import ProjectCard from '@/app/components/ProjectCard';
import Link from 'next/link';

export default function Design() {
	const projectName = 'Design Projects';
	return (
		<main className="mx-auto max-w-[67.5rem]">
			<section className="flex flex-col gap-7 px-10 py-7">
				<h1 className="font-semibold text-4xl">{projectName}</h1>
				<p className="max-w-[34rem] text-base opacity-60">
					Product design is a dynamic and multifaceted discipline that blends aesthetics, functionality, and innovation to create products that enhance users'
					lives and experiences. Through a meticulous process of research, ideation, prototyping, and iteration, product designers transform concepts into
					tangible solutions, addressing both practical needs and emotional desires.
					<br />
					<br />
					Striking a delicate balance between form and function, product design continually evolves to adapt to emerging technologies, societal trends, and user
					preferences, shaping the way we interact with the world around us and defining the landscape of our everyday lives.
				</p>
			</section>
			<ul className="flex gap-3 p-7">
				<Link href="/design/project-1" className="tab rounded-full px-4 py-2 w-fit text-[0.65rem] cursor-pointer">Project 1</Link>
				<Link href="/design/project-2" className="tab rounded-full px-4 py-2 w-fit text-[0.65rem] cursor-pointer">Project 2</Link>
				<Link href="/design/project-3" className="tab rounded-full px-4 py-2 w-fit text-[0.65rem] cursor-pointer">Project 3</Link>
			</ul>
			<section className="rounded-[1.875rem] p-1.5 w-full aspect-[2] card-gradient">
				<img src="/images/project-cover-1.jpg" className="rounded-[1.875rem]" />
			</section>
			{/* Section-1 */}
			<section className="flex items-center my-16">
				<div className="flex-1">
					<img src="/images/section-cover-1.svg" />
				</div>
				<div className="flex-1 flex flex-col gap-10 p-[5.625rem]">
					<h2 className="text-4xl">Project title and some additional information</h2>
					<h5 className="text-xl opacity-80">
						Explain what your project is about: what kind of problem does it solve, who is the target group, and how does it provide a sufficient solution?
					</h5>
					<h6 className="text-xs opacity-80">
						You can additionally provide more details, but try to be brief. Nobody wants to read long texts, so it’s crucial to have a good balance of images
						and texts.
					</h6>
				</div>
			</section>
			{/* Section-2 */}
			<section>
				<div className="flex-1 flex flex-col gap-10 mx-auto py-[5.625rem] text-center">
					<h2 className="text-4xl">
						Section title:
						<br /> And a subtitle
					</h2>
					<h5 className="text-lg opacity-80">
						Explain an important feature of the project and show some image variations to showcase your versatile solution to a problem.
					</h5>
				</div>
				<ProjectCard title="Add image" description='Change the fill type to "image"' img="/images/cover-1.jpg" icon="/icons/tool-1.svg" isSizeFluid={true} />
			</section>
			{/* Section-3 */}
			<section className="relative">
				<div className="flex-1 flex flex-col gap-10 ml-auto py-[5.625rem] text-right max-w-3xl">
					<h2 className="text-4xl">
						Section title:
						<br /> And a subtitle
					</h2>
					<h5 className="text-lg opacity-80">
						Explain an important feature of the project and show some image variations to showcase your versatile solution to a problem.
					</h5>
				</div>
				<img src="/images/section-cover-2.svg" className="relative -left-full translate-x-full max-w-5xl" />
			</section>
			{/* Section-4 */}
			<section className="px-32">
				<div className="flex-1 flex flex-col gap-10 mx-auto py-[5.625rem] text-center">
					<h2 className="text-4xl">Section title with different styles</h2>
					<h5 className="text-lg opacity-80">
						Explain an important feature of the project and show some image variations to showcase your versatile solution to a problem.
					</h5>
				</div>
				<div className="rounded-3xl aspect-[1.31] bg-white/10"></div>
			</section>
			{/* Section-5 */}
			<section className="relative flex flex-col gap-16 my-32 mx-auto max-w-3xl">
				<h2 className="text-4xl">
					Takeaway:
					<br />
					<span className="opacity-60">And a subtitle</span>
				</h2>
				<h5 className="text-lg opacity-60">
					Write about what you’ve learned during this project, what are the main takeaways and what will you do differently in your next projects.
				</h5>
				<img src="/images/background-3.svg" className="absolute -bottom-1/2 w-[200%]" />
			</section>
			<AppFooter />
		</main>
	);
}
