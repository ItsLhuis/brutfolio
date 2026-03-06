const STATS = [
  {
    value: "12+",
    label: "YEARS ACTIVE",
    desc: "Full-service design studio operating since 2012."
  },
  {
    value: "42",
    label: "PROJECTS",
    desc: "From startups to enterprise, every project is a flagship."
  },
  {
    value: "8",
    label: "AWARDS",
    desc: "Recognized by Awwwards, D&AD, and Communication Arts."
  },
  {
    value: "3",
    label: "RETAINERS",
    desc: "Long-term partnerships built on consistency and results."
  }
]

export const Stats = () => {
  return (
    <section className="bg-black border-b-2 border-white grid grid-cols-2 lg:grid-cols-4">
      {STATS.map((stat, i) => {
        const isEven = i % 2 === 0
        const isFirstRow = i < 2
        const isLast = i === STATS.length - 1
        const cls = [
          "p-6 md:p-12 flex flex-col gap-3 min-h-[160px] md:min-h-[190px] border-white border-b-2",
          isEven ? "border-r-2" : "",
          isFirstRow ? "border-t-2" : "",
          "lg:border-t-2",
          !isLast ? "lg:border-r-2" : "lg:border-r-0",
        ]
          .filter(Boolean)
          .join(" ")
        return (
        <div
          key={stat.label}
          className={cls}
        >
          <div className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-none tracking-[2px] text-brut-green">
            {stat.value}
          </div>
          <div className="text-[11px] md:text-[13px] font-bold tracking-[1.5px] text-white">
            {stat.label}
          </div>
          <p className="text-[12px] md:text-[13px] leading-relaxed text-white">{stat.desc}</p>
        </div>
        )
      })}
    </section>
  )
}
