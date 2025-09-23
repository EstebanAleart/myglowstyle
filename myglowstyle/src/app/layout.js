import { Playfair_Display, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata = {
  title: "MyGlowStyle - Bronceado Orgánico Premium",
  description:
    "Descubre el bronceado perfecto con MyGlowStyle. Bronceado orgánico con aerógrafo, natural y duradero. Reserva tu cita hoy.",
  keywords: "bronceado, bronceado orgánico, aerógrafo, MyGlowStyle, bronceado natural",
  openGraph: {
    title: "MyGlowStyle - Bronceado Orgánico Premium",
    description: "El bronceado perfecto te espera en MyGlowStyle",
    type: "website",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${playfair.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
