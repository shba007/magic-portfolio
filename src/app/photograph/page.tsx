import AppFooter from '@/app/components/AppFooter'
import ProjectCard from '@/app/components/ProjectCard'
import Image from 'next/image'

export default function Photograph() {
  const projectName = 'Photography'
  const details = [
    `Photography is a captivating art form that captures moments in time, preserving memories and emotions within a single frame. 
		Through the skilled interplay of light, composition, and subject matter, photographers can convey powerful narratives and evoke a variety of emotions.`,
    `As a constantly evolving medium, photography continues to push the boundaries of creativity,
		 allowing artists to experiment with innovative techniques and technologies to produce stunning visual masterpieces.`,
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
      <section className="my-4 grid grid-flow-row grid-cols-2 gap-2">
        <div className="col-span-2 aspect-[2.023] w-full rounded-lg bg-white/10 md:rounded-[2rem]" />
        <div className="col-span-1 row-span-2 aspect-[0.81] w-full rounded-lg bg-white/10 md:rounded-[2rem]" />
        <div className="col-span-1 aspect-[1.67] w-full rounded-lg bg-white/10 md:rounded-[2rem]" />
        <div className="col-span-1 aspect-[1.67] w-full rounded-lg bg-white/10 md:rounded-[2rem]" />
        <div className="col-span-2 aspect-[2.023] w-full rounded-lg bg-white/10 md:rounded-[2rem]" />
        <div className="col-span-1 aspect-[1.67] w-full rounded-lg bg-white/10 md:rounded-[2rem]" />
        <div className="col-span-1 row-span-2 aspect-[0.81] w-full rounded-lg bg-white/10 md:rounded-[2rem]" />
        <div className="col-span-1 aspect-[1.67] w-full rounded-lg bg-white/10 md:rounded-[2rem]" />
        <ProjectCard className="col-span-2" title="Add image" description='Change the fill type to "image"' img="cover-1.jpg" icon="thunder.svg" isSizeFluid={true} />
      </section>
      <AppFooter />
    </main>
  )
}
