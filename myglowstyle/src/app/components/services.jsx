"use client"

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { ImageCarousel } from "./ui/carousel"
import { User, Users, Sparkles, Clock, Shield, Heart } from "lucide-react"
import Image from "next/image"

export function Services() {
  const services = [
    {
      id: "facial",
      title: "Facial",
      price: "$15.000",
      description: "Bronceado facial que incluye escote para un look natural y radiante",
      icon: User,
      images: ["/images/facial-closeup.jpg", "/images/facial-natural.jpg"],
      features: ["Incluye escote", "Duración: 20-30 min", "Resultado natural", "Ideal para eventos"],
      popular: false,
    },
    {
      id: "medio-cuerpo",
      title: "Medio Cuerpo",
      price: "$20.500",
      description: "Bronceado de cintura para arriba (incluyendo rostro para un acabado uniforme) o cintura para abajo",
      icon: Users,
      images: ["/images/legs-elegant.jpg", "/images/legs-tanning.jpg", "/images/tanning-application.jpg"],
      features: [
        "Cintura para arriba/abajo",
        "Incluye rostro para acabado uniforme",
        "Duración: 30-40 min",
        "Perfecto para vestidos",
      ],
      popular: true,
    },
    {
      id: "cuerpo-completo",
      title: "Cuerpo Completo",
      price: "$30.000",
      description: "Tratamiento completo que incluye rostro para un bronceado uniforme en todo el cuerpo",
      icon: Sparkles,
      images: ["/images/hero-full-body.jpg"],
      features: ["Cuerpo completo", "Incluye rostro", "Duración: 45-60 min", "Máxima cobertura"],
      popular: false,
    },
  ]

  const scrollToContact = () => {
    const element = document.getElementById("contacto")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="servicios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Elige el tratamiento perfecto para ti. Todos nuestros servicios utilizan productos 100% orgánicos y están
            sujetos a modificación según tus necesidades específicas.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <Card
                key={service.id}
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-lg ${
                  service.popular ? "ring-2 ring-primary/20 shadow-lg" : ""
                }`}
              >
                {service.popular && (
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground z-10">Más Popular</Badge>
                )}

                <ImageCarousel images={service.images} alt={`Servicio ${service.title}`} className="relative" />

                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-serif font-bold">{service.title}</CardTitle>
                  {/* <div className="text-3xl font-bold text-primary">{service.price}</div> */}
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-center mb-6 text-pretty">{service.description}</p>

                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={scrollToContact}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Reservar {service.title}
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Color Scale Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-serif font-bold text-foreground mb-4">Escala de Colores</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Elige el tono perfecto para ti. Nuestro bronceado orgánico se adapta a todos los tipos de piel.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Image
              src="/images/color-scale.jpg"
              alt="Escala de colores de bronceado"
              width={800}
              height={200}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Additional Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-serif text-lg font-semibold mb-2">Resultados Rápidos</h3>
            <p className="text-sm text-muted-foreground text-pretty">
              Resultados visibles inmediatamente, desarrollo completo en 8 horas
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-serif text-lg font-semibold mb-2">100% Seguro</h3>
            <p className="text-sm text-muted-foreground text-pretty">
              Productos orgánicos certificados, sin químicos dañinos para tu piel
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-serif text-lg font-semibold mb-2">Personalizado</h3>
            <p className="text-sm text-muted-foreground text-pretty">
              Cada tratamiento se adapta a tu tipo de piel y tono deseado
            </p>
          </div>
        </div>

        {/* Note */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground italic">
            * Todos los precios están sujetos a modificación según las necesidades específicas del cliente
          </p>
        </div>
      </div>
    </section>
  )
}
