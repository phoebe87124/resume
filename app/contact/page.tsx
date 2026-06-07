import {
  EnvelopeIcon,
  LinkIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  IdentificationIcon
} from '@heroicons/react/24/outline'
import clsx from 'clsx'
import Link from 'next/link'

export default function ContactPage () {
  // 感謝您撥冗瀏覽我的作品與經歷。如果您對我的背景、專案經驗或未來合作感興趣，歡迎隨時透過以下方式與我聯繫：聯絡信箱：[您的 Email 地址]LinkedIn：[您的 LinkedIn 個人檔案連結]個人作品集：[您的 Portfolio / 網站連結]聯絡電話：[您的手機號碼，例如：+886 9XX-XXX-XXX]
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
        <div className="relative p-10 mb-28">
          <div className="absolute bg-green-100/70 w-full h-full left-0 top-0 translate-3" />
          <div className="absolute border border-lime-700/50 w-full h-full left-0 top-0 -translate-3" />
          <h2 className="relative z-1 text-2xl font-bold text-center text-lime-800">如果您對我過去的專案經歷感興趣或想進一步了解履歷內容<br />歡迎隨時透過以下方式與我聯繫～</h2>
        </div>

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