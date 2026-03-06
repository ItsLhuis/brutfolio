const SERVICES = [
  {
    num: "01",
    category: "BRAND IDENTITY",
    title: "BRAND\nIDENTITY",
    desc: "Complete brand systems from logo to full guidelines, built to scale across every touchpoint.",
    price: "FROM €4,000"
  },
  {
    num: "02",
    category: "WEB DESIGN",
    title: "WEB\nDESIGN",
    desc: "High-fidelity interfaces and design systems for digital products that convert and endure.",
    price: "FROM €4,000"
  },
  {
    num: "03",
    category: "ART DIRECTION",
    title: "ART\nDIRECTION",
    desc: "Visual strategy and creative direction for campaigns, films, and publications.",
    price: "FROM €4,000"
  }
]

export const Services = () => {
  return (
    <section id="services" className="bg-black">
      <div className="flex justify-between items-center px-6 md:px-12 py-5 md:py-6 border-b-2 border-white">
        <h2 className="font-display text-[clamp(2rem,5vw,4.5rem)] leading-none tracking-[2px] text-white">
          SERVICES
        </h2>
        <span className="text-[13px] text-white">(03)</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {SERVICES.map((service, i) => (
          <div
            key={service.num}
            className={`p-6 md:p-12 flex flex-col gap-4 justify-between min-h-70 border-b-2 border-white ${
              i < SERVICES.length - 1 ? "md:border-r-2" : ""
            }`}
          >
            <span className="self-start border-2 border-white text-white text-[11px] font-bold tracking-[0.5px] px-3 py-1.5 whitespace-nowrap">
              {service.num} / {service.category}
            </span>
            <div className="font-display text-[clamp(2rem,4vw,3rem)] leading-none tracking-[2px] text-white whitespace-pre-line flex-1">
              {service.title}
            </div>
            <p className="text-[13px] leading-relaxed text-white">{service.desc}</p>
            <span className="self-start border-2 border-white text-white text-[11px] font-bold tracking-[0.5px] px-3 py-1.5 whitespace-nowrap">
              {service.price}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
