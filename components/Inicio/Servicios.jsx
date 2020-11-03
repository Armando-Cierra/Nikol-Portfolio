export default function Servicios(){

    const servicios = [
        {
            nombre: 'Diseño Arquitectónico',
            descripcion: 'Servicios de arquitectura generales para proyectos personalizados, asesorías para la elaboración de planos de casas, centros comerciales, etc.',
            img: './img/servicios/diseño-arquitectonico.jpg'
        }, {
            nombre: 'Diseño Interior',
            descripcion: 'Ambientación a la medida para cada uno de tus espacios, decoración, stands, escaparatismo, etc.',
            img: './img/servicios/diseño-interior.jpg'
        }, {
            nombre: 'Visualizacion 3D',
            descripcion: 'Renders, Tour Interactivos, Realidad Virtual , Secciones 3d y Modelado de ideas. Para que pueda presentar sus proyectos de diferentes maneras y poder adaptarse a las necesidades tecnológicas actuales.',
            img: './img/servicios/visualizacion-3d.jpg'
        }
    ]

    return(
        <section className="servicios">
            <div className="titulo">
                <h2>Servicios</h2>
            </div>
            <div className="contenedor">
                {servicios.map((servicio, index)=>(
                    <div className="servicio" key={index} data-aos="fade-up" data-aos-delay={index * 200}>
                        <img src={servicio.img} alt=""/>
                        <h3>{servicio.nombre}</h3>
                        <p>{servicio.descripcion}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}