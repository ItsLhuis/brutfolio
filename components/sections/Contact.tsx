export const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-white px-6 md:px-12 py-16 md:py-20 flex flex-col items-center gap-6 md:gap-8"
    >
      <span className="text-[11px] font-bold tracking-[2px] text-black uppercase">
        AVAILABLE FOR PROJECTS
      </span>
      <h2 className="font-display text-[clamp(2.5rem,8vw,7.5rem)] leading-none tracking-[2px] text-black text-center">
        LET&apos;S WORK
        <br />
        TOGETHER.
      </h2>
      <a
        href="mailto:hello@marcusreid.design"
        className="text-[13px] text-black no-underline hover:opacity-50 transition-opacity"
      >
        hello@marcusreid.design
      </a>
      <div className="flex items-center gap-2 flex-wrap justify-center">
        {(["BEHANCE", "DRIBBBLE", "LINKEDIN"] as const).map((social) => (
          <a
            key={social}
            href="#"
            className="border-2 border-black text-black text-[11px] font-bold tracking-[0.5px] px-3 py-1.5 no-underline hover:opacity-50 transition-opacity"
          >
            {social}
          </a>
        ))}
      </div>
    </section>
  )
}
