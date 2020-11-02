import Head from 'next/head'

import MenuEscritorio from '../components/MenuEscritorio'
import MenuMovil from '../components/MenuMovil'
import Footer from '../components/Footer'

export default function Conoceme(){
    return(
        <>
            <Head>
                <title>Portafolio Nikol - Conóceme</title>
                <meta name="description" content="Soy Nikol Pérez Me defino como una persona que se reta constantemente, admiro lo
                    que me rodea y como funciona. Elegí el diseño de interiores porque es..." />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossOrigin="anonymous" />
            </Head>

            <h1 className="hidden">Nikol Pérez | Conóceme</h1>

            <MenuMovil/>
            <MenuEscritorio/>
            <section className="conoceme">
                <div className="header">
                    <h2>Nikol Pérez</h2>
                </div>
                <div className="info">
                    <div className="text">
                    <p>Soy Nikol Pérez Me defino como una persona que se reta constantemente, admiro lo
                    que me rodea y como funciona. Elegí el diseño de interiores porque es un arte que
                    pasa de la imaginación a algo físico y puede cambiar la vida de las personas.</p>
                    <p>Opto por persistir en todo esto y entiendo que el esfuerzo siempre es necesario para
                    llegar al resultado deseado, el ser interiorista requiere de empatía para comprender lo
                    que las personas quieren proyectar. Cada proyecto muestra y expresa parte del diseño
                    y color que me caracteriza para poder llevar una parte de lo que soy y lo que las
                    personas obtendrán de mí.</p>
                    <p>A lo largo de mi carrera he creído que es mejor trabajar con disciplina, más que con
                    emociones. La primera nos reta a continuar aun cuando la segunda no esta.</p>
                    </div>
                </div>
            </section>
            <Footer/>


            <a className="whatsapp" target="_blank" href="https://api.whatsapp.com/send?phone=50375472234&amp;text=¡Hola!&nbsp;tengo&nbsp;un&nbsp;proyecto&nbsp;en&nbsp;mente.&nbsp;¿Me&nbsp;puedes&nbsp;ayudar?">
                <img src="./img/whatsapp-brands.svg" alt=""/>
            </a>
        </>
    )
}