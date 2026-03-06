const CAPABILITIES = [
  "Brand Identity · Visual Systems",
  "Web Design · UI/UX",
  "Art Direction · Campaign",
  "Editorial · Publication",
  "Packaging · Print",
  "Motion · Typography",
]

export const Philosophy = () => {
  return (
    <section id="about" className="bg-white border-b-2 border-black grid grid-cols-1 md:grid-cols-2">
      <div className="p-8 md:p-12 flex flex-col gap-5 md:gap-6 border-b-2 md:border-b-0 md:border-r-2 border-black">
        <span className="text-[11px] font-bold tracking-[2px] text-black uppercase">
          PHILOSOPHY
        </span>
        <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-none tracking-[2px] text-black">
          DESIGN THAT
          <br />
          EARNS ITS
          <br />
          PLACE.
        </h2>
        <p className="text-[13px] leading-relaxed text-black max-w-120">
          Every element must justify its existence. No decoration for decoration&apos;s sake. We
          build systems that work, identities that last, and experiences that respect the
          user&apos;s intelligence.
        </p>
      </div>
      <div className="p-8 md:p-12 flex flex-col gap-5 md:gap-6">
        <span className="text-[11px] font-bold tracking-[2px] text-black uppercase">
          CAPABILITIES
        </span>
        <div className="flex flex-col gap-2">
          {CAPABILITIES.map((c) => (
            <span key={c} className="text-[13px] leading-relaxed text-black">
              {c}
            </span>
          ))}
        </div>
        <div className="w-full h-px bg-black" />
        <span className="text-[11px] font-bold tracking-[2px] text-black uppercase">TOOLS</span>
        <p className="text-[13px] leading-relaxed text-black">
          Figma · After Effects · Blender · Photoshop · InDesign · Webflow
        </p>
      </div>
    </section>
  )
}
