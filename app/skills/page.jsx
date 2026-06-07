import BaseDecoTitle from '@/app/components/base-deco-title'
import BaseCard from '@/app/components/base-card'

export default function SkillsPage() {
  const skillsList = [
    {
      title: 'Frontend',
      list: [
        'Vue 2 / Vue 3',
        'Nuxt 2 / Nuxt 3',
        'TypeScript',
        'Vuex / Pinia',
        'Vuetify',
        'Sass / Scss',
        'SPA / SSR Architecture'
      ]
    },
    {
      title: 'Performance & SEO',
      list: [
        'SSR Rendering Optimization',
        'SEO Optimization',
        'Website Performance Optimization'
      ]
    },
    {
      title: 'Architecture',
      list: [
        'Clean Architecture',
        'Domain-Driven Design (DDD)',
        'Scalable Frontend Architecture'
      ]
    },
    {
      title: 'DevOps & Infrastructure',
      list: [
        'CI/CD Pipeline',
        'Docker',
        'Kubernetes (k8s)',
        'Drone CI',
        'Argo CD'
      ]
    }
  ]

  return (
    <div className="skills-page px-5 py-15">
      <BaseDecoTitle
        className="mb-15 mx-auto w-150"
        content="專業技能 Skills"
      />

      <div className="w-4/5 grid grid-cols-12 gap-4 mx-auto">
        {
          skillsList.map((skill) => ((
            <BaseCard
              className="text-center col-span-12 sm:col-span-6 lg:col-span-4"
              key={skill.title}
            >
              <div className="relative z-1">
                <h3 className="text-lg text-lime-700/70 font-bold">{skill.title}</h3>
                <hr className="text-lime-700/20 my-3" />
                <ul>
                  {skill.list.map((item, index) => ((
                    <li
                      key={index}
                    >
                      {item}
                      {index !== skill.list.length - 1 && <div className="text-sm text-lime-700/50">．</div>}
                    </li>
                  )))}
                </ul>
              </div>
            </BaseCard>
          )))
        }
        
        {/* {
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
        } */}
      </div>
    </div>
  )
}