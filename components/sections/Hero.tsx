import Image from "next/image"

export const Hero = () => {
  return (
    <section className="bg-black min-h-svh md:h-200 flex flex-col justify-end relative overflow-hidden">
      <Image
        src="/brutfolio/hero.jpeg"
        alt="Marcus Reid"
        width={500}
        height={700}
        priority
        className="absolute md:right-[25%] bottom-0 h-[85%] w-auto object-contain object-bottom grayscale contrast-125 select-none pointer-events-none"
      />
      <div className="px-6 md:px-12 py-6 flex flex-col relative z-10">
        <span className="mb-4 text-[11px] font-bold tracking-[2px] text-white uppercase">
          DESIGNER / ART DIRECTOR
        </span>
        <div className="flex justify-between items-end mb-4">
          <div className="flex items-end justify-between gap-6 mb-5">
            <h1 className="font-display text-[clamp(2.5rem,10vw,7.5rem)] leading-none tracking-[2px] text-white shrink-0">
              CRAFTING BOLD
              <br />
              VISUAL SYSTEMS
              <br />
              THAT ENDURE.
            </h1>
          </div>
          <span className="flex items-center gap-1.5 bg-brut-green text-black text-[11px] font-bold tracking-[0.5px] px-3 py-1.5 whitespace-nowrap">
            <span className="size-1.5 rounded-full bg-black shrink-0" />
            OPEN TO WORK
          </span>
        </div>
        <div className="w-full h-px bg-white/30 mb-4" />
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
          <p className="text-white text-[13px] leading-relaxed max-w-100">
            Brand identity, digital experiences and art direction for studios and startups that
            refuse to be ordinary.
          </p>
          <div className="flex items-center gap-2 flex-wrap">
            {(["42 PROJECTS", "8 AWARDS", "12 CLIENTS"] as const).map((label) => (
              <span
                key={label}
                className="border-2 border-white text-white text-[11px] font-bold tracking-[0.5px] px-3 py-1.5 whitespace-nowrap"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
