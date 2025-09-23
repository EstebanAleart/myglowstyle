import { Header } from "./components/header"
import { Hero } from "./components/hero"
import { Services } from "./components/services"
import { Process } from "./components/process"
import { Contact } from "./components/contact"
import { Footer } from "./components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Process />
      <Contact />
      <Footer />
    </main>
  )
}
