export const Footer = () => {
  return (
    <footer className="bg-white border-t-2 border-black px-12 py-4 flex justify-between items-center">
      <span className="text-[11px] text-black uppercase">
        © {new Date().getFullYear()} MARCUS REID STUDIO
      </span>
      <span className="text-[11px] text-black uppercase">PORTO, PORTUGAL</span>
    </footer>
  )
}
