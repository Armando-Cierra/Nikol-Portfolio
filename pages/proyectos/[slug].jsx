import {useState, useEffect} from 'react'
import Link from 'next/link'
import Head from 'next/head'

import MenuEscritorio from '../../components/MenuEscritorio'
import MenuMovil from '../../components/MenuMovil'
import Footer from '../../components/Footer'
import listaProyectos from '../../helper/proyectos'

export default function Proyecto({slug}){

    const [load, setLoad] = useState(true);
    const [proyecto, setProyecto] = useState();

    useEffect(()=>{
        cargarInfo();
    },[]);

    async function cargarInfo(){
        const [info] = await listaProyectos.filter(e=> e.slug === slug);
        await setProyecto(info);
        setLoad(false);
    }

    if(load){
        return(
            <>
                <MenuMovil url="../img/logo.png"/>
                <MenuEscritorio url="../img/logo.png"/>
            </>
        )
    } else {
        return(
            <>
                <Head>
                    <title>Portafolio Nikol - {proyecto && proyecto.nombre}</title>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossOrigin="anonymous" />
                </Head>
                <MenuMovil url="../img/logo.png"/>
                <MenuEscritorio url="../img/logo.png"/>
                
                <section className="proyectoInfo">
                    <h2 data-aos="zoom-in">{proyecto.nombre}</h2>
                    <div className="contenedor">
                        <div className="texto" dangerouslySetInnerHTML={{__html: proyecto.texto}} data-aos="fade-up"></div>
                        <div className="galeria">
                            {proyecto.imagenes.map((imagen, index)=>(
                                <img src={`.${imagen}`} alt="" key={`i${index}`} data-aos="fade-up"/>
                            ))}
                        </div>
                        <div className="botonera"><Link href="/proyectos"><button className="btn naranja">Regresar</button></Link></div>
                    </div>
                </section>
                <Footer/>
                <a className="whatsapp" target="_blank" href="https://api.whatsapp.com/send?phone=50375472234&amp;text=¡Hola!&nbsp;tengo&nbsp;un&nbsp;proyecto&nbsp;en&nbsp;mente.&nbsp;¿Me&nbsp;puedes&nbsp;ayudar?">
                    <img src="../img/whatsapp-brands.svg" alt=""/>
                </a>
            </>
        )
    }
}

export async function getServerSideProps(context){
    const {slug} = context.query; 
    return{
        props: {
            slug: slug
        }
    }
}