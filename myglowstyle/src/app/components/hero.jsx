"use client"

import { Button } from "./ui/button"
import { Sun, Sparkles, MessageCircle } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contacto")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient and image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-full-body.jpg"
          alt="Elegant tanning experience"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-muted/60 to-secondary/40" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 opacity-20">
        <Sun className="w-16 h-16 text-primary animate-pulse" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-20">
        <Sparkles className="w-12 h-12 text-secondary animate-pulse" />
      </div>
      <div className="absolute top-1/3 right-20 opacity-10">
        <div className="w-32 h-32 rounded-full border-2 border-primary/30" />
      </div>
      <div className="absolute bottom-1/3 left-20 opacity-10">
        <div className="w-24 h-24 rounded-full border-2 border-secondary/30" />
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            <span>Bronceado Orgánico Premium</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6 text-balance leading-tight">
            MyGlowStyle
          </h1>

          <p className="text-lg text-muted-foreground/70 mb-6 italic">
            <a
              href="https://www.instagram.com/vir.style/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @vir.style
            </a>
          </p>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty leading-relaxed max-w-3xl mx-auto">
            Descubre el bronceado perfecto con nuestro tratamiento orgánico con aerógrafo. Natural, duradero y
            completamente personalizado para tu piel.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span>100% Orgánico</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span>Resultados Inmediatos</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span>Duración 7-10 días</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span>Sin Manchas</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
            >
              Reservar Cita
            </Button>
            <Button
              onClick={() => window.open("https://wa.me/5493469692229", "_blank")}
              variant="outline"
              size="lg"
              className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 text-lg flex items-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp</span>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground mb-4">Confían en nosotros</p>
            <div className="flex justify-center items-center space-x-8 text-muted-foreground/60">
              <span className="text-2xl">★★★★★</span>
              <span className="text-sm">Clientes satisfechos</span>
              <span className="text-2xl">★★★★★</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
