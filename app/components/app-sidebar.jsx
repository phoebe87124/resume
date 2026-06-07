import Image from 'next/image'

import AppSidebarNav from '@/app/components/app-sidebar-nav'

export default function AppSidebar() {
  return (
    <aside className="flex flex-col content-center w-64 px-5 py-10 bg-lime-700/35">
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

      <AppSidebarNav />
    </aside>
  )
}