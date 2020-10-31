import Head from 'next/head'

import MenuMovil from '../components/MenuMovil'
import MenuEscritorio from '../components/MenuEscritorio'
import Slideshow from '../components/Inicio/Slideshow'
import Conoceme from '../components/Inicio/Conoceme'
import Servicios from '../components/Inicio/Servicios'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Portafolio Nikol - Inicio</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossOrigin="anonymous" />
      <h1 className="hidden">Nikol Pérez | Interiorismo</h1>
      </Head>
      <MenuMovil/>
      <MenuEscritorio/>
      <Slideshow/>
      <Conoceme/>
      <Servicios/>
      <Footer/>
    </>
  )
}
