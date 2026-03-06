export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-white border-b-2 border-black px-6 md:px-12 py-4 md:py-5">
      <a href="#" className="font-display text-[18px] md:text-[22px] tracking-[1px] leading-none text-black no-underline shrink-0">
        MARCUS REID
      </a>
      <div className="flex items-center gap-4 md:gap-8">
        <ul className="hidden md:flex items-center gap-7 list-none m-0 p-0">
          {(["Work", "About", "Services", "Contact"] as const).map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-[11px] font-bold tracking-[2px] text-black no-underline hover:opacity-50 transition-opacity"
              >
                {link.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1.5 bg-brut-green text-black text-[11px] font-bold tracking-[0.5px] px-3 py-1.5 whitespace-nowrap">
            <span className="size-1.5 rounded-full bg-black shrink-0" />
            AVAILABLE
          </span>
          <span className="hidden sm:inline-flex border-2 border-black text-black text-[11px] font-bold tracking-[0.5px] px-3 py-1.5 whitespace-nowrap">
            PORTO, PT
          </span>
        </div>
      </div>
    </nav>
  )
}
