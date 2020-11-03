import Head from 'next/head'
import Link from 'next/link'

import MenuEscritorio from '../components/MenuEscritorio'
import MenuMovil from '../components/MenuMovil'
import Footer from '../components/Footer'

export default function Error(props){
    return(
        <>
            <Head>
                <title>Nikol Pérez | 404</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossOrigin="anonymous" />
            </Head>
            <MenuMovil url="./img/logo.png"/>
            <MenuEscritorio url="./img/logo.png"/>
            <section className="error404">
                <div className="contenedorSmall">
                    <h2>Error 404</h2>
                    <p>Ups... La página que buscas no se encuentra disponible o no existe.</p>
                    <div><Link href="/"><button className="btn">Regresar a Inicio</button></Link></div>
                </div>
            </section>
            <a className="whatsapp" target="_blank" href="https://api.whatsapp.com/send?phone=50375472234&amp;text=¡Hola!&nbsp;tengo&nbsp;un&nbsp;proyecto&nbsp;en&nbsp;mente.&nbsp;¿Me&nbsp;puedes&nbsp;ayudar?">
                <img src="./img/whatsapp-brands.svg" alt=""/>
            </a>
        </>
    )
}