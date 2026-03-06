import { ArrowRight } from "lucide-react"

const ITEMS = [
  "BRAND IDENTITY",
  "WEB DESIGN",
  "ART DIRECTION",
  "MOTION",
  "TYPOGRAPHY",
  "EDITORIAL",
  "PACKAGING",
  "CAMPAIGN",
]

const TickerList = () => (
  <>
    {ITEMS.map((item, i) => (
      <span
        key={i}
        className="font-display text-[18px] md:text-[22px] tracking-[1px] leading-none text-black px-6 md:px-8 whitespace-nowrap inline-flex items-center gap-3"
      >
        {item}
        <ArrowRight className="w-4 h-4 shrink-0" />
      </span>
    ))}
  </>
)

export const Ticker = () => {
  return (
    <div className="overflow-hidden border-t-2 border-b-2 border-black bg-white py-4">
      <div className="flex w-max animate-marquee">
        <TickerList />
        <TickerList />
      </div>
    </div>
  )
}
