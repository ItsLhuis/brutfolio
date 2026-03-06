import { Contact } from "@/components/sections/Contact"
import { Footer } from "@/components/sections/Footer"
import { Hero } from "@/components/sections/Hero"
import { Navbar } from "@/components/sections/Navbar"
import { Philosophy } from "@/components/sections/Philosophy"
import { Services } from "@/components/sections/Services"
import { Stats } from "@/components/sections/Stats"
import { Ticker } from "@/components/sections/Ticker"
import { Work } from "@/components/sections/Work"

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Ticker />
      <Work />
      <Stats />
      <Philosophy />
      <Services />
      <Contact />
      <Footer />
    </main>
  )
}

export default Home
