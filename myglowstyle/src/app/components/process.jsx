import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import { UserCheck, Droplets, SprayCan as Spray, Timer, Sparkles, Shield, Heart, Sun } from "lucide-react"
import Image from "next/image"

export function Process() {
  const steps = [
    {
      number: "01",
      title: "Consulta Inicial",
      description: "Evaluamos tu tipo de piel y definimos el tono perfecto para ti",
      icon: UserCheck,
      details: ["Análisis de tipo de piel", "Selección de tono", "Explicación del proceso"],
    },
    {
      number: "02",
      title: "Preparación",
      description: "Preparamos tu piel con productos especializados para un resultado óptimo",
      icon: Droplets,
      details: ["Limpieza profunda", "Exfoliación suave", "Hidratación preparatoria"],
    },
    {
      number: "03",
      title: "Aplicación",
      description: "Aplicamos el bronceado orgánico con técnica de aerógrafo profesional",
      icon: Spray,
      details: ["Técnica de aerógrafo", "Aplicación uniforme", "Atención a detalles"],
    },
    {
      number: "04",
      title: "Desarrollo",
      description: "El bronceado se desarrolla naturalmente en las siguientes 8 horas",
      icon: Timer,
      details: ["Desarrollo gradual", "Resultado natural", "Sin manchas"],
    },
  ]

  const benefits = [
    {
      icon: Shield,
      title: "100% Orgánico",
      description: "Productos naturales sin químicos dañinos",
    },
    {
      icon: Heart,
      title: "Seguro para la Piel",
      description: "Fórmulas dermatológicamente probadas",
    },
    {
      icon: Sun,
      title: "Protección UV",
      description: "Sin exposición a rayos ultravioleta",
    },
    {
      icon: Sparkles,
      title: "Resultado Natural",
      description: "Bronceado uniforme y realista",
    },
  ]

  return (
    <section id="proceso" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            Nuestro Proceso
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Un proceso cuidadosamente diseñado para garantizar el mejor resultado. Cada paso está pensado para tu
            comodidad y seguridad.
          </p>
        </div>

        {/* Process Images Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          <div className="text-center">
            <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/images/tanning-application.jpg"
                alt="Aplicación de bronceado en piernas"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-serif text-lg font-semibold">Aplicación Profesional</h3>
          </div>
          <div className="text-center">
            <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/images/legs-elegant.jpg"
                alt="Resultado en piernas - cintura para arriba"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-serif text-lg font-semibold">Cintura para Arriba</h3>
          </div>
          <div className="text-center">
            <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/images/legs-application.jpg"
                alt="Resultado en piernas - cintura para abajo"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-serif text-lg font-semibold">Cintura para Abajo</h3>
          </div>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-20">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  {/* Step Number */}
                  <Badge variant="secondary" className="absolute top-4 right-4 text-xs font-bold">
                    {step.number}
                  </Badge>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="font-serif text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 text-pretty">{step.description}</p>

                  {/* Details */}
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-xs text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Benefits Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-serif font-bold text-center mb-12">¿Por qué elegir bronceado orgánico?</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-serif text-lg font-semibold mb-2">{benefit.title}</h4>
                  <p className="text-sm text-muted-foreground text-pretty">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 p-8 bg-primary/5 rounded-2xl border border-primary/10">
          <h3 className="font-serif text-2xl font-bold text-center mb-6 text-primary">Información Importante</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-semibold mb-3">Antes del tratamiento:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Exfoliar la piel 24-48 horas antes</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>No usar cremas hidratantes el día del tratamiento</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Usar ropa holgada y oscura</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Después del tratamiento:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Evitar el agua por 8 horas</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Hidratar diariamente para mantener el bronceado</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Duración: 7-10 días con cuidado adecuado</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
