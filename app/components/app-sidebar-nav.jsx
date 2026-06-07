'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function AppSidebarNav() {
  const pathname = usePathname()

  const sidebarList = [
    { title: 'Resume', link: '/' },
    { title: 'Skills', link: '' },
    { title: 'More About Me', link: '' },
    { title: 'Contact', link: '/contact' }
  ]

  return (
    <nav>
      <ul>
        {sidebarList.map(item => ((
          <li
            key={item.title}
            className="text-base font-medium py-2 px-6 group"
          >
            <Link href={item.link}>
              <div
                className={clsx(
                  "group-hover:translate-x-2 group-hover:font-bold animate",
                  {'translate-x-2 font-bold': pathname === item.link}
                )}
              >
                {item.title}
              </div>
            </Link>
          </li>
        )))}
      </ul>
    </nav>
  )
}