import ProjectCard from '@/app/components/ProjectCard'
import AppFooter from '@/app/components/AppFooter'

export default function Home() {
  const name = 'Your Name'
  return (
    <main className="mx-auto max-w-[67.5rem]">
      <div className="flex flex-col gap-5 p-4 md:gap-7 md:px-10 md:py-7">
        <h1 className="text-2xl font-semibold md:text-4xl">{name}</h1>
        <p className="max-w-[34rem] text-sm opacity-60 md:text-base">
          Welcome to the extraordinary world of {name}, a versatile and imaginative artist who skillfully navigates the realms of product design, photography and digital art. With a keen eye for
          detail and a relentless pursuit of innovation, {name} crafts captivating visual narratives, immersive digital realms, and functional yet aesthetically pleasing products.
        </p>
      </div>
      <div className="flex flex-col gap-6 md:gap-10">
        <h2 className="p-4 text-xl font-semibold md:px-10 md:text-3xl">Projects</h2>
        <div className="scrollbar-hidden relative left-1/2 w-full -translate-x-1/2 overflow-x-scroll px-4 md:w-[calc(100vw-1.5rem)]">
          <div className="mx-4 flex w-fit gap-7 md:mx-32">
            <ProjectCard title="Design" description="My design projects" img="cover-1.jpg" icon="angle.svg" link="/design/project-1" />
            <ProjectCard title="Art" description="My art projects" img="cover-2.jpg" icon="palette.svg" link="/art" />
            <ProjectCard title="Photography" description="My photos" img="cover-3.jpg" icon="image.svg" link="/photograph" />
          </div>
        </div>
      </div>
      <AppFooter />
    </main>
  )
}
