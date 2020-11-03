import Link from 'next/link'

import listaProyectos from '../helper/proyectos'

export default function GaleriaProyectos(){

    return(
        <section className="galeriaProyectos">
            <h2>Proyectos</h2>
            <div className="contenedor">
                {listaProyectos.map((proyecto, index)=>(
                    <Link href="/proyectos/[slug]" as={`proyectos/${proyecto.slug}`} key={index}>
                        <div className="proyectoCover">
                            {proyecto.cover && <img src={proyecto.cover} alt=""/>}
                            <h3 className="titulo">{proyecto.nombre}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}