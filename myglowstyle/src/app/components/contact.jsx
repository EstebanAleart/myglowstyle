"use client"

import { useState } from "react"
import { Card, CardContent, CardTitle, CardHeader } from "./ui/card"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"
import { MessageCircle, MapPin, Clock, Send, Instagram } from "lucide-react"
import Image from "next/image"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault()

    const message = `¡Hola! Me interesa reservar una cita en MyGlowStyle.

*Mis datos:*
Nombre: ${formData.name}
Teléfono: ${formData.phone}
Servicio de interés: ${formData.service}

*Mensaje adicional:*
${formData.message}

¡Espero su respuesta para coordinar la cita!`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/5493469692229?text=${encodedMessage}`

    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="contacto" className="py-10 sm:py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 sm:mb-6 text-balance">
            Reserva tu Cita
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-full sm:max-w-3xl mx-auto text-pretty leading-relaxed">
            Estamos aquí para ayudarte a conseguir el bronceado perfecto. Contáctanos y te asesoraremos sobre el mejor tratamiento para ti.
          </p>
        </div>

        {/* Facial Images Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-full sm:max-w-4xl mx-auto mb-10 sm:mb-16">
          <div className="text-center">
            <div className="relative h-48 sm:h-64 mb-4 rounded-lg overflow-hidden w-full">
              <Image src="/images/facial-closeup.jpg" alt="Bronceado facial y escote" fill className="object-cover" />
            </div>
            <h3 className="font-serif text-base sm:text-lg font-semibold">Facial + Escote</h3>
          </div>
          <div className="text-center">
            <div className="relative h-48 sm:h-64 mb-4 rounded-lg overflow-hidden w-full">
              <Image src="/images/facial-natural.jpg" alt="Resultado natural en rostro" fill className="object-cover" />
            </div>
            <h3 className="font-serif text-base sm:text-lg font-semibold">Resultado Natural</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-full lg:max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="overflow-hidden w-full">
            <CardHeader>
              <CardTitle className="text-2xl font-serif font-bold text-center">Formulario de Contacto</CardTitle>
              <p className="text-muted-foreground text-center text-sm">
                Completa el formulario y te contactaremos por WhatsApp
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleWhatsAppSubmit} className="space-y-4 sm:space-y-6">
                <div className="space-y-1 sm:space-y-2">
                  <Label htmlFor="name">Nombre completo *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Tu nombre completo"
                    className="w-full"
                  />
                </div>

                <div className="space-y-1 sm:space-y-2">
                  <Label htmlFor="phone">Teléfono *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Tu número de teléfono"
                    className="w-full"
                  />
                </div>

                <div className="space-y-1 sm:space-y-2">
                  <Label htmlFor="service">Servicio de interés</Label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="Facial - $15.000">Facial - $15.000</option>
                    <option value="Medio Cuerpo - $20.500">Medio Cuerpo - $20.500</option>
                    <option value="Cuerpo Completo - $30.000">Cuerpo Completo - $30.000</option>
                    <option value="Consulta general">Consulta general</option>
                  </select>
                </div>

                <div className="space-y-1 sm:space-y-2">
                  <Label htmlFor="message">Mensaje adicional</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Cuéntanos sobre tus expectativas, experiencias previas con bronceado, o cualquier pregunta que tengas..."
                    className="w-full min-h-[100px] resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground flex items-center justify-center space-x-2 text-base sm:text-lg"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar por WhatsApp</span>
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8 w-full">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-lg font-semibold mb-2">WhatsApp</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      La forma más rápida de contactarnos y reservar tu cita
                    </p>
                    <Button
                      onClick={() => window.open("https://wa.me/5493469692229", "_blank")}
                      className="bg-green-600 hover:bg-green-700 text-white flex items-center space-x-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Contactar por WhatsApp</span>
                    </Button>
                    <p className="text-xs text-muted-foreground mt-2">+54 9 3469692229</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Instagram Contact Card */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-6 h-6 text-pink-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-lg font-semibold mb-2">Instagram</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Síguenos para ver nuestros trabajos y novedades
                    </p>
                    <Button
                      onClick={() => window.open("https://www.instagram.com/vir.style/", "_blank")}
                      className="bg-pink-600 hover:bg-pink-700 text-white flex items-center space-x-2"
                    >
                      <Instagram className="w-4 h-4" />
                      <span>vir.style</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold mb-2">Horarios de Atención</h3>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>Lunes a Viernes: 9:00 - 19:00</p>
                      <p>Sábados: 9:00 - 17:00</p>
                      <p>Domingos: Solo con cita previa</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold mb-2">Ubicación</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Contáctanos por WhatsApp para conocer nuestra ubicación exacta y coordinar tu visita.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h3 className="font-serif text-lg font-semibold mb-4 text-primary">Información Importante</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Se recomienda exfoliar la piel 24-48 horas antes de la sesión</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>No realizar bronceado sobre piel lesionada o irritada</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Duración del tratamiento: 30-45 minutos aproximadamente</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Resultados visibles inmediatamente, máximo desarrollo en 8 horas</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
