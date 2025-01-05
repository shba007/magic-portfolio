import AppFooter from '@/app/components/AppFooter'
import ProjectCard from '@/app/components/ProjectCard'

export default function Art() {
  const projectName = 'Art Projects'
  const details = [
    `Digital art is an imaginative and enchanting genre that transports viewers into realms of the extraordinary, where artists 
		merge creativity with digital tools to craft striking visual narratives. By manipulating color, form, and texture, these 
		artists breathe life into mythical creatures, enchanted landscapes, and surreal worlds, provoking wonder and awe.`,
    `The boundless possibilities of digital artistry constantly challenge the limits of the imagination, inspiring artists 
		to create ever more immersive and intricate masterpieces that captivate the mind and stir the soul.`,
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
