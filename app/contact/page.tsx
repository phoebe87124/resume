import {
  EnvelopeIcon,
  LinkIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  IdentificationIcon
} from '@heroicons/react/24/outline'
import clsx from 'clsx'
import Link from 'next/link'
import BaseDecoTitle from '@/app/components/base-deco-title'

export default function ContactPage () {
  const contactList = [
    {
      title: '聯絡信箱',
      icon: EnvelopeIcon,
      link: 'mailto:phoebe87124@gmail.com'
    },
    {
      title: 'LinkedIn',
      icon: LinkIcon,
      link: 'https://www.linkedin.com/in/%E7%AD%B1%E8%93%81-4181b5181/'
    },
    {
      title: 'CakeResume',
      icon: ChatBubbleOvalLeftEllipsisIcon,
      link: 'https://www.cake.me/resumes/phoebe87124'
    },
    {
      title: '104',
      icon: IdentificationIcon,
      link: 'https://pda.104.com.tw/profile/share/a6ccMG9jEYGwYjTdKJH4BdhsL5ojQMJv'
    }
  ]

  return (
    <div className="contact-page px-10 flex justify-center items-center w-full h-full">
      <div>
        <BaseDecoTitle
          className="mb-28"
          content={'如果您對我過去的專案經歷感興趣或想進一步了解履歷內容\n歡迎隨時透過以下方式與我聯繫～'}
        />

        <div className="flex justify-between">
          {
            contactList.map((item) => {
              const LinkIcon = item.icon

              return (
                <Link
                  target="_blank"
                  href={item.link}
                >
                  <div className="group relative px-4 py-8 w-40 border border-lime-700/50 rounded-2xl" key={item.title}>
                    <div
                      className={clsx(
                        'absolute bg-green-100/70 w-full h-full left-0 top-0 rounded-2xl animate',
                        'opacity-0 group-hover:opacity-100 group-hover:translate-3'
                      )}
                    />
                    <div className="relative z-1 flex flex-col items-center gap-4">
                      <LinkIcon className="w-8" />
                      <div className="text-lg">{item.title}</div>
                    </div>
                  </div>
                </Link>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}