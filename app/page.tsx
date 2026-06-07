import Image from "next/image";

export default function Home() {
  const intro = 'Hello，我是 Phoebe 鄭筱蓁，擁有 5 年前端與 Web 平台開發經驗，目前於 STARBIT 擔任 RD Assistant Manager，負責前端技術決策、系統架構設計與團隊技術推動。\n\n具備中大型 SaaS 與前後台系統開發經驗，近期導入 Clean Architecture 與 Domain-driven Design（DDD）概念，提升專案可維護性與擴展能力，重視程式品質及效能，並持續優化前端架構設計。\n\n熟悉從 0 到 1 建立多模組平台，並與各團隊密切協作，完成 CRM、CMS、AI、區塊鏈與數據分析等多項產品開發，推動產品從需求分析、邏輯架構設計到落地實作，並擁有通過資安檢測及無障礙標準之開發經驗。\n\n持續精進前端架構與系統設計能力，並拓展區塊鏈與資訊安全領域知識，取得 AppWorks School Blockchain Program 結業證書與 Google Cybersecurity Certificate 證照。'

  const leadershipList = [
    {
      title: '架構轉型',
      content: '主導前端專案導入 Clean Architecture 與領域導向設計（DDD），建立模組化架構，並降低業務邏輯與框架間的耦合度，提升系統可維護性、可讀性與擴充性'
    },
    {
      title: '流程管理',
      content: '規劃前端開發與發布流程，導入 PR 與 Code Review 機制，提升程式品質與團隊協作效率'
    },
    {
      title: '基礎設施建置',
      content: '配合既有 CI/CD（Docker / Drone / Argo）建立前端部署流程，提升部署版本控管與可追溯性'
    },
    {
      title: '效能與穩定性',
      content: '修復 Kubernetes Pod 長時間運行的 Memory Leak 問題，優化 Nuxt 專案架構設計，結合 ISR / Prerender 機制，降低伺服器運算負載'
    },
    {
      title: '合規與品質',
      content: '參與資安強化與無障礙（Accessibility）規範落實，協助系統通過相關檢測與國家級標章認證'
    }
  ]

  const projectSectionList = [
    {
      sectionTitle: 'Key Projects',
      projectList: [
        {
          title: 'CRM 與社群訊息管理系統',
          featureList: [
            '導入 Clean Architecture，將核心業務邏輯獨立於 UI，以分層方式解耦系統架構，提升系統可測試性及可維護性',
            '基於 Domain-driven 設計概念，依會員、自動回應、訊息推播與標籤分群等業務領域拆分模組，降低跨功能耦合並提升系統擴展能力',
            '開發整合 Facebook / LINE Messaging 的 CRM SaaS 平台，提供會員管理、自動回應、訊息推播與標籤分群等社群互動功能'
          ]
        },
        {
          title: '活動網頁前後台',
          featureList: [
            '採用 Monorepo 架構開發前後台，提升元件及邏輯可重用性',
            '活動期間單日最高達 19 萬活躍使用者，並持續維持穩定流量與營運',
            '導入 ISR 與 Prerender 策略改善 SSR 壓力並持續優化效能及穩定性',
            '建立可動態配置前台畫面與商家管理後台，提升營運操作彈性'
          ]
        },
        {
          title: '整合 AI 之數據分析後台',
          featureList: [
            '優化多維度數據分析功能之大量資料篩選與運算邏輯，降低前端運算時間複雜度',
            '其餘包含開發 Dashboard 圖表資料顯示、多權限後台管理等功能'
          ]
        }
      ]
    },
    {
      sectionTitle: 'Additional Projects',
      projectList: [
        {
          title: 'Jcard Verify',
          featureList: [
            '開發 AI 客服機器人諮詢功能，以及區塊鏈資料查詢介面',
            '設計並實作論壇模組，建立貼文、留言、按讚等社群互動機制'
          ]
        },
        {
          title: '藝遊桃園 NFT 集章平台',
          featureList: [
            '建置結合 GPS 定位與多元使用者互動機制（包含測驗、融合、刮刮樂等）之 NFT 集章活動平台',
            '開發活動及集章管理後台，使活動規則能快速重組並重用於不同專案',
            '平台通過資安檢測及無障礙標章認證'
          ]
        },
        {
          title: '其餘技術實作',
          featureList: [
            '將既有專案獨立包裝成 Chrome Extension，延伸查詢功能使用場景',
            '開發 Line Chatbot 並串接 AI 客服機器人，建立跨平台互動體驗'
          ]
        }
      ]
    }
  ]

  const certificateList = [
    {
      name: 'Blockchain Program Batch #1',
      publisher: 'AppWorks School',
      year: '2022',
      content: '系統學習區塊鏈原理、DApp 架構與鏈上資料整合實作',
      img: ''
    },
    {
      name: 'Google Cybersecurity Certificate',
      publisher: 'Google',
      year: '2025',
      content: '建立資安風險辨識、攻擊防護與安全開發觀念',
      img: '/img/google-cybersecurity-certificate.jpeg'
    }
  ]

  return (
    <div className="w-full px-5 py-15">
      <div className="resume-wrap max-w-3xl mx-auto border border-lime-700/30">
        <section className="intro-section flex items-start gap-8 bg-amber-100/50 p-8">
          <div className="flex flex-col gap-5 flex-shrink-0">
            <Image
              className="rounded-circle"
              src="/img/avatar.jpg"
              width={120}
              height={120}
            />
            <div className="text-lg font-bold text-center text-lime-800/75">
              系統設計<br />
              x<br />
              溝通合作
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">
              鄭筱蓁 Phoebe
            </h2>
            {/* <div className="text-lg font-bold text-lime-800/75 mb-2">
              系統設計 x 溝通合作
            </div> */}
            <p className="whitespace-pre-wrap">{intro}</p>
          </div>
        </section>

        <section className="experience-section p-5">
          <h2 className="text-2xl font-bold">工作經驗 Experience</h2>

          <hr className="text-lime-700/15 my-3" />

          <article className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-lime-800/75">
                思偉達創新科技 - RD Assistant Manager
              </h3>
              <span className="text-sm text-olive-700/70 ml-8">
                Sep. 2020 - 現在
              </span>
            </div>

            <div>
              <h4 className="text-lg text-amber-700/70 font-bold">Frontend Technical Leadership</h4>
              <ul>
                {leadershipList.map((item, index) => ((
                  <li className="py-2">
                    <div className="font-bold">
                      #0{index + 1} {item.title}
                    </div>
                    <p className="text-olive-700/80">{item.content}</p>
                  </li>
                )))}
              </ul>
            </div>

            {
              projectSectionList.map((section) => ((
                <div>
                  <h4 className="text-lg text-amber-700/70 font-bold">{section.sectionTitle}</h4>
                  <ul>{
                    section.projectList.map((item, index) => ((
                      <li className="py-2" key={item.title}>
                        <div className="font-bold">
                          #0{index + 1} {item.title}
                        </div>

                        <ul className="list-decimal pl-6">
                          {item.featureList.map((feature, featureIndex) => ((
                            <li
                              className="text-olive-700/80"
                              key={featureIndex}
                            >
                              {feature}
                            </li>
                          )))}
                        </ul>
                      </li>
                    )))
                  }</ul>
                </div>
              )))
            }
          </article>
        </section>

        <section className="certificate-section p-5 bg-amber-100/50">
          <h2 className="text-2xl font-bold">專業認證與培訓 Certifications</h2>

          <hr className="text-lime-700/15 my-3" />

          <div className="flex flex-col gap-3">
            {
              certificateList.map(certificate => {
                return (
                  <article className="flex items-center gap-5 even:flex-row-reverse" key={certificate.title}>
                    <div className="w-[300px]">
                      <Image
                        src={certificate.img}
                        width={300}
                        height={150}
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-xl font-bold text-lime-800/75">
                        {certificate.publisher} - {certificate.name}
                      </h3>
                      <span className="text-sm text-olive-700/70">
                        {certificate.year}
                      </span>

                      <p>{certificate.content}</p>
                    </div>
                  </article>
                )
              })
            }
          </div>
        </section>
      </div>
    </div>
  );
}
