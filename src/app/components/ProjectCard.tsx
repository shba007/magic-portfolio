import Image from 'next/image'
import Link from 'next/link'

export default function ProjectCard({
  img,
  icon,
  link,
  title = 'Project title',
  description = 'Project description',
  isSizeFluid = false,
  className = '',
}: {
  img: string
  icon: string
  link?: string
  title?: string
  description?: string
  isSizeFluid?: boolean
  className?: string
}) {
  const renderContent = (
    <>
      <Image src={`./images/${img}`} alt={title} width={1945} height={1024} className={`w-full ${isSizeFluid ? 'aspect-[1.86]' : 'aspect-[1.95]'} rounded-[1.5rem]`} />
      <div className="flex gap-5 px-10 py-3">
        <Image src={`./icons/${icon}`} alt="icon" width={28} height={28} />
        <div className="flex flex-col gap-2">
          <h4 className="text-sm font-semibold">{title}</h4>
          <p className="text-xs">{description}</p>
        </div>
      </div>
    </>
  )

  return link ? (
    <Link href={link} className={`relative block min-w-[33.75rem] rounded-[1.875rem] p-2 ${isSizeFluid ? 'aspect-[1.66]' : 'aspect-[1.55]'} card-gradient overflow-hidden`}>
      {renderContent}
    </Link>
  ) : (
    <div className={`relative block rounded-[1.875rem] p-2 md:min-w-[33.75rem] ${isSizeFluid ? 'aspect-[1.66]' : 'aspect-[1.55]'} card-gradient overflow-hidden ${className}`}>{renderContent}</div>
  )
}
