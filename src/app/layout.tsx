import Navbar from '@/components/Navbar'


import './globals.css'
import type { Metadata } from 'next'
import { Montserrat , Secular_One} from 'next/font/google'

const dekko =  Montserrat({
  weight: '400', // Puedes ajustar estas opciones según tus necesidades
  style: 'normal',
  display: 'swap', 
  subsets: ['latin'],// Por ejemplo, aquí se define 'display' como 'swap'
  // Agrega otras opciones según sea necesario
})

const secular =  Secular_One({
  weight: '400', // Puedes ajustar estas opciones según tus necesidades
  style: 'normal',
  variable:'--font-secular',
  display: 'swap', 
  subsets: ['latin'],// Por ejemplo, aquí se define 'display' como 'swap'
  // Agrega otras opciones según sea necesario
})

export const metadata: Metadata = {
  title: 'Portafolio Percy-Valderrama',
  description: 'Hecho por Percy Valderrama',
  icons:{
    icon:['/favicon.icon?v=4'],
    apple:['/apple-touch-icon.png?=4'],
    shortcut:['/android-chrome-512x512.png']
  }
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={dekko.className  }>
        <Navbar/>
        <div className={`${secular.variable}`}>
        {children}
        </div>

      </body>
    </html>
  )
}
