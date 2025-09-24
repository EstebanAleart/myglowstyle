import { MessageCircle, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-8 sm:py-10 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="mb-8 md:mb-0">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">MG</span>
              </div>
              <span className="font-serif text-xl font-bold">MyGlowStyle</span>
            </div>
            <p className="text-background/60 text-md mb-2 italic">Virginia Gamulin</p>
            <p className="text-background/80 text-sm text-pretty leading-relaxed">
              Tu destino para el bronceado perfecto. Tratamientos orgánicos con aerógrafo para un resultado natural y
              duradero.
            </p>
          </div>

          {/* Contact */}
          <div className="mb-8 md:mb-0">
            <h3 className="font-serif text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <a
                href="https://wa.me/5493469692229"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-background/80 hover:text-background transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm">+54 9 3469692229</span>
              </a>
            </div>
          </div>

          {/* Social & Hours */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://www.instagram.com/soyvirginiaestilo/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
            <div className="text-background/80 text-sm">
              <p className="font-medium mb-2">Horarios:</p>
              <p>Lun - Vie: 9:00 - 19:00</p>
              <p>Sáb: 9:00 - 17:00</p>
              <p>Dom: Solo con cita previa</p>
            </div>
          </div>
        </div>

  <div className="border-t border-background/20 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-background/60 text-sm">© 2025 MyGlowStyle. Todos los derechos reservados.</p>
          <p className="text-background/40 text-xs mt-2">sitio potenciado por PairProgramming</p>
        </div>
      </div>
    </footer>
  )
}
