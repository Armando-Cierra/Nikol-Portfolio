import Head from 'next/head'

import MenuEscritorio from '../components/MenuEscritorio'
import MenuMovil from '../components/MenuMovil'
import GaleriaProyectos from '../components/GaleriaProyectos'
import Footer from '../components/Footer'

export default function Proyectos(){
    return(
        <>
            <Head>
                <title>Portafolio Nikol - Proyectos</title>
                <meta name="description" content="Diseñadora de interiores especializado en diseño residencial, comercial." />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossOrigin="anonymous" />
            </Head>
        
            <h1 className="hidden">Nikol Pérez | Proyectos</h1>

            <MenuMovil/>
            <MenuEscritorio/>
            <GaleriaProyectos/>
            <Footer/>

            <a className="whatsapp" target="_blank" href="https://api.whatsapp.com/send?phone=50375472234&amp;text=¡Hola!&nbsp;tengo&nbsp;un&nbsp;proyecto&nbsp;en&nbsp;mente.&nbsp;¿Me&nbsp;puedes&nbsp;ayudar?">
                <img src="./img/whatsapp-brands.svg" alt=""/>
            </a>
        </>
    )
}