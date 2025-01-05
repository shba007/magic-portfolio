import Link from 'next/link'
import Image from 'next/image'
import AppFooter from '@/app/components/AppFooter'
import ProjectCard from '@/app/components/ProjectCard'

export default function Design() {
  const projectName = 'Design Projects'
  const details = [
    `Product design is a dynamic and multifaceted discipline that blends aesthetics, functionality, and innovation to create products that enhance
		users'; lives and experiences. Through a meticulous process of research, ideation, prototyping, and iteration, product designers transform
		concepts into tangible solutions, addressing both practical needs and emotional desires.`,
    `Striking a delicate balance between form and function, product design continually evolves to adapt to emerging technologies, societal trends, and user
		preferences, shaping the way we interact with the world around us and defining the landscape of our everyday lives.`,
  ]

  return (
    <main className="m-4 max-w-[67.5rem] md:mx-auto">
      <section className="flex flex-col gap-7 md:px-10 md:py-7">
        <h1 className="text-2xl font-semibold md:text-4xl">{projectName}</h1>
        <p className="max-w-[34rem] text-sm opacity-60 md:text-base">
          {details[0]}
          <br />
          <br />
          {details[1]}
        </p>
      </section>
      <ul className="flex gap-3 py-4 md:p-7">
        <Link href="/design/project-1" className="tab w-fit cursor-pointer whitespace-nowrap rounded-full px-4 py-2 text-[0.65rem]">
          Project 1
        </Link>
        <Link href="/design/project-2" className="tab w-fit cursor-pointer whitespace-nowrap rounded-full px-4 py-2 text-[0.65rem]">
          Project 2
        </Link>
        <Link href="/design/project-3" className="tab w-fit cursor-pointer whitespace-nowrap rounded-full px-4 py-2 text-[0.65rem]">
          Project 3
        </Link>
      </ul>
      <section className="card-gradient aspect-[2] w-full rounded-[1.875rem] p-1.5">
        <Image src="./images/project-cover-1.jpg" width={2880} height={1440} alt="project-cover" className="rounded-[1.875rem]" />
      </section>
      {/* Section-1 */}
      <section className="my-4 flex flex-col items-center md:my-16 md:flex-row">
        <div className="w-4/5 flex-1 md:w-full">
          <Image src="./images/section-cover-1.svg" width={1440} height={1440} alt="section-cover" />
        </div>
        <div className="my-4 flex flex-1 flex-col gap-6 md:my-[5.625rem] md:gap-10">
          <h2 className="text-2xl md:text-4xl">Project title and some additional information</h2>
          <h5 className="text-base opacity-80 md:text-xl">
            Explain what your project is about: what kind of problem does it solve, who is the target group, and how does it provide a sufficient solution?
          </h5>
          <h6 className="text-xs opacity-80">
            You can additionally provide more details, but try to be brief. Nobody wants to read long texts, so it’s crucial to have a good balance of /images and texts.
          </h6>
        </div>
      </section>
      {/* Section-2 */}
      <section>
        <div className="mx-auto my-4 flex flex-1 flex-col gap-10 text-center md:my-[5.625rem]">
          <h2 className="text-2xl md:text-4xl">
            Section title:
            <br />
            And a subtitle
          </h2>
          <h5 className="text-sm opacity-80 md:text-lg">Explain an important feature of the project and show some image variations to showcase your versatile solution to a problem.</h5>
        </div>
        <ProjectCard title="Add image" description='Change the fill type to "image"' img="cover-1.jpg" icon="thunder.svg" isSizeFluid={true} />
      </section>
      {/* Section-3 */}
      <section className="relative">
        <div className="my-4 ml-auto flex max-w-3xl flex-1 flex-col gap-10 text-right md:my-[5.625rem]">
          <h2 className="text-2xl md:text-4xl">
            Section title:
            <br />
            And a subtitle
          </h2>
          <h5 className="text-sm opacity-80 md:text-lg">Explain an important feature of the project and show some image variations to showcase your versatile solution to a problem.</h5>
        </div>
        <Image src="./images/section-cover-2.svg" width={1440} height={1440} alt="section-cover-2" className="relative -left-full w-full max-w-5xl translate-x-full" />
      </section>
      {/* Section-4 */}
      <section className="md:mx-32">
        <div className="mx-auto my-4 flex flex-1 flex-col gap-10 text-center md:my-[5.625rem]">
          <h2 className="text-2xl md:text-4xl">Section title with different styles</h2>
          <h5 className="text-sm opacity-80 md:text-lg">Explain an important feature of the project and show some image variations to showcase your versatile solution to a problem.</h5>
        </div>
        <div className="aspect-[1.31] rounded-3xl bg-white/10"></div>
      </section>
      {/* Section-5 */}
      <section className="relative mx-auto my-8 flex max-w-3xl flex-col gap-8 md:my-32 md:gap-16">
        <h2 className="text-2xl md:text-4xl">
          Takeaway:
          <br />
          <span className="opacity-60">And a subtitle</span>
        </h2>
        <h5 className="text-sm opacity-60 md:text-lg">Write about what you&apos;ve learned during this project, what are the main takeaways and what will you do differently in your next projects.</h5>
        <Image src="./images/background-3.svg" width={1440} height={1440} alt="backgroound" className="absolute -bottom-1/2 w-[200%]" />
      </section>
      <AppFooter />
    </main>
  )
}
