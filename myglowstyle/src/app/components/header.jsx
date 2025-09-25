"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { Menu, X, MessageCircle } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
       <div className="flex items-center space-x-2">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">VMG</span>
          </div>

          <div className="flex flex-col">
            <p className="text-sm text-muted-foreground/70 italic">Virginia Gamulin</p>
            <span className="font-serif text-xl font-bold text-foreground">MyGlowStyle</span>
          </div>
      </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("proceso")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Proceso
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contacto
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              onClick={() => window.open("https://wa.me/5493469692229", "_blank")}
              className="bg-green-600 hover:bg-green-700 text-white flex items-center space-x-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("servicios")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("proceso")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                Proceso
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                Contacto
              </button>
              <Button
                onClick={() => window.open("https://wa.me/5493469692229", "_blank")}
                className="bg-green-600 hover:bg-green-700 text-white flex items-center space-x-2 w-fit"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
