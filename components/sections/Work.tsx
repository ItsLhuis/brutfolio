import Image from "next/image"

const PROJECTS = [
  {
    num: "01",
    title: "NORTH\nSTUDIO",
    category: "BRAND IDENTITY",
    year: "2024",
    img: "https://images.unsplash.com/photo-1660480339341-b14ed4706c92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
  },
  {
    num: "02",
    title: "VOLTA\nARCHITECTURE",
    category: "ART DIRECTION",
    year: "2024",
    img: "https://images.unsplash.com/photo-1770562232700-a43f220db45e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
  },
  {
    num: "03",
    title: "RAW\nMAGAZINE",
    category: "EDITORIAL",
    year: "2023",
    img: "https://images.unsplash.com/photo-1617380607001-2797ed957a6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
  },
  {
    num: "04",
    title: "SIGNAL\nFESTIVAL",
    category: "CAMPAIGN",
    year: "2023",
    img: "https://images.unsplash.com/photo-1698428058981-be275eadb980?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
  },
  {
    num: "05",
    title: "BLACKBOX\nLABS",
    category: "PACKAGING",
    year: "2022",
    img: "https://images.unsplash.com/photo-1701686794599-7924cf0b1329?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
  }
]

export const Work = () => {
  const cells = [...PROJECTS, null]

  return (
    <section id="work" className="bg-white">
      <div className="flex justify-between items-center px-6 md:px-12 py-5 md:py-6 border-b-2 border-black">
        <h2 className="font-display text-[clamp(2rem,5vw,4.5rem)] leading-none tracking-[2px] text-black">
          SELECTED WORK
        </h2>
        <span className="text-[13px] text-black">(005)</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {cells.map((project, i) => {
          const isRightCol = i % 2 === 1
          const borderClass = `border-l-2 border-r-2 border-b-2 border-black${isRightCol ? " md:border-l-0" : ""}`

          if (!project) {
            return (
              <div
                key="cta"
                className={`bg-white min-h-60 flex items-center justify-center ${borderClass} cursor-pointer hover:bg-zinc-50 transition-colors`}
              >
                <div className="font-display text-[clamp(1.5rem,3vw,2rem)] leading-none tracking-[2px] text-black text-center">
                  VIEW ALL
                  <br />
                  WORK →
                </div>
              </div>
            )
          }

          return (
            <div
              key={project.num}
              className={`group flex flex-col overflow-hidden ${borderClass} cursor-pointer`}
            >
              <div className="h-60 md:h-78 shrink-0 overflow-hidden bg-black">
                <Image
                  src={project.img}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex-1 bg-white p-6 md:p-12 flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <span className="font-display text-[11px] tracking-[1px] text-black">
                    {project.num}
                  </span>
                  <span className="border-2 border-black text-black text-[11px] font-bold tracking-[0.5px] px-2 py-1">
                    {project.category}
                  </span>
                </div>
                <div className="font-display text-[clamp(1.75rem,4vw,3rem)] leading-none tracking-[2px] text-black flex-1 whitespace-pre-line">
                  {project.title}
                </div>
                <div className="flex justify-between items-center mt-auto pt-2">
                  <span className="text-[13px] text-black">{project.year}</span>
                  <a
                    href="#"
                    className="text-[11px] font-bold tracking-[1px] text-black no-underline hover:opacity-50 transition-opacity"
                  >
                    VIEW PROJECT →
                  </a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
