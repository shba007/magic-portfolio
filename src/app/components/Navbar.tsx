'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useLayoutEffect, useState } from 'react'

export default function Navbar() {
  const internalLinks = [
    { icon: 'home', path: '/' },
    { icon: 'angle', path: '/design/project-1' },
    { icon: 'palette', path: '/art' },
    { icon: 'camera', path: '/photograph' },
  ]
  const externalLinks = [
    { icon: 'linkedin', path: 'https://www.linkedin.com/company/once-ui' },
    { icon: 'dribbble', path: 'https://dribbble.com/once-ui' },
  ]

  const currPath = usePathname()
  const [highlightRow, setHighlightRow] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    for (const index in internalLinks) {
      const { path } = internalLinks[index]
      if (path == currPath) setHighlightRow(parseInt(index))
    }
  }, [currPath])

  useLayoutEffect(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])

  return (
    <nav className="navbar fixed bottom-4 left-1/2 z-10 -translate-x-1/2 rounded-full border border-white/10 !bg-black p-1 md:bottom-auto md:left-4 md:top-4 md:translate-x-0">
      <ul className="relative grid grid-flow-col grid-cols-none grid-rows-1 items-center justify-items-center md:grid-flow-row md:grid-cols-1 md:grid-rows-none">
        <span
          id="highlight"
          className="absolute -top-0.5 bottom-0 size-10 rounded-full bg-white/10 duration-300 md:left-0 md:right-0"
          style={isMobile ? { left: `calc(2.5rem*${highlightRow})` } : { top: `calc(2.25rem*${highlightRow})` }}
        />
        {internalLinks.map(({ icon, path }, index) => (
          <li key={icon} className="flex h-9 w-10 items-center justify-center p-2">
            <Link href={path} className={`flex flex-col items-center justify-center gap-2 ${currPath == path && 'translate-y-1'}`}>
              <Image src={`/icons/${icon}.svg`} alt={icon} width={18} height={18} className={`size-[18px] ${currPath == path && 'scale-[1.33]'} duration-500`} />
              <span className={`${currPath == path ? 'inline-block' : 'hidden'} size-1 rounded-full bg-[#AAAEB9]`} />
            </Link>
          </li>
        ))}
        <span className="my-3 inline-block h-full w-0.5 bg-[#AAAEB9] md:h-0.5 md:w-full" />
        {externalLinks.map(({ icon, path }) => (
          <li key={icon} className="flex size-9 items-center justify-center p-2">
            <Link href={path} target="_blank">
              <Image src={`/icons/${icon}.svg`} alt={icon} width={24} height={24} className={`size-6`} />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
