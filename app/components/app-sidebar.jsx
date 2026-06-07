import Link from 'next/link'
import Image from 'next/image';

export default function AppSidebar() {
  const sidebarList = [
    { title: 'Resume', link: '/' },
    { title: 'Skills', link: '' },
    { title: 'More About Me', link: '' },
    { title: 'Contact', link: '' }
  ]

  return (
    <div className="flex flex-col content-center w-64 px-5 py-10 bg-lime-700/35">
      <Image
        className="rounded-circle object-cover mx-auto mb-4"
        src="/avatar.jpg"
        alt="Phoebe Cheng"
        width={150}
        height={150}
      />

      <h1 className="text-center text-olive-700 text-xl font-black">
        鄭筱蓁<br />Phoebe Cheng
      </h1>

      <hr className="text-lime-100/50 my-4" />

      <nav>
        <ul>
          {sidebarList.map(item => ((
            <Link
              key={item.title}
              href={item.link}
            >
              <li className='text-base font-medium py-2 px-6 group'>
                <div
                  className='group-hover:translate-x-2 group-hover:font-bold animate'
                >
                  {item.title}
                </div>
              </li>
            </Link>
          )))}
        </ul>
      </nav>
    </div>
  )
}