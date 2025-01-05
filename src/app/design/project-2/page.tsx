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
      {' '}
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
        <Image src="/images/project-cover-2.jpg" width={1440} height={1440} alt="project-cover" className="rounded-[1.875rem]" />
      </section>
      <section className="my-4 flex flex-col items-center justify-between gap-20 md:my-36 md:flex-row">
        <div className="aspect-[1.1] w-full rounded-2xl bg-white/10 md:w-[39.375rem]" />
        <div className="flex max-w-md flex-col gap-8">
          <h2 className="text-2xl font-semibold md:text-4xl">Project title and some additional information</h2>
          <p className="text-base md:text-lg">Explain what your project is about: what kind of problem does it solve, who is the target group, and how does it provide a sufficient solution?</p>
          <p className="text-xs">You can additionally provide more details, but try to be brief. Nobody wants to read long texts, so it’s crucial to have a good balance of /images and te</p>
          <Link href={''} className="tab w-fit cursor-pointer rounded-full px-4 py-2 text-[0.65rem]">
            Visit Link
          </Link>
        </div>
      </section>
      <section>
        <div className="mx-auto my-4 flex max-w-3xl flex-col gap-4 text-center md:my-8 md:gap-8">
          <h2 className="mx-auto w-fit text-2xl font-semibold md:text-4xl">
            <span>Section title:</span>
            <br />
            And a subtitle
          </h2>
          <p className="text-base text-white/80 md:text-lg">Explain an important feature of the project and show some image variations to showcase your versatile solution to a problem.</p>
        </div>
        <ProjectCard title="Add image" description='Change the fill type to "image"' img="cover-1.jpg" icon="thunder.svg" isSizeFluid={true} />
      </section>
      <section className="my-4 flex flex-col justify-between gap-8 md:my-36 md:flex-row md:gap-20">
        <div className="flex max-w-md flex-col gap-8 text-right">
          <h2 className="text-2xl font-semibold md:text-4xl">
            Section title:
            <br />
            And a subtitle
          </h2>
          <p className="text-base md:text-lg">Explain an important feature of the project and show some image variations to showcase your versatile solution to a problem.</p>
        </div>
        <div className="aspect-[0.75] w-full rounded-2xl bg-white/10 md:w-[36.375rem]" />
      </section>
      <section className="my-8 flex max-w-3xl flex-col gap-8 text-left md:my-24">
        <h2 className="text-2xl font-semibold md:text-4xl">
          Takeaway:
          <br />
          And a subtitle
        </h2>
        <p className="text-base md:text-lg">Write about what you’ve learned during this project, what are the main takeaways and what will you do differently in your next projects.</p>
      </section>
      <AppFooter />
    </main>
  )
}
