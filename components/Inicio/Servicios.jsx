export default function Servicios(){

    const servicios = [
        {
            nombre: 'Diseño Arquitectónico',
            descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis eaque velit laborum in. Praesentium labore vitae magnil.',
            img: './img/servicios/diseño-arquitectonico.jpg'
        }, {
            nombre: 'Diseño Interior',
            descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis eaque velit laborum in. Praesentium labore vitae magnil.',
            img: './img/servicios/diseño-interior.jpg'
        }, {
            nombre: 'Visualizacion 3D',
            descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis eaque velit laborum in. Praesentium labore vitae magnil.',
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
                    <div className="servicio" key={index}>
                        <img src={servicio.img} alt=""/>
                        <h3>{servicio.nombre}</h3>
                        <p>{servicio.descripcion}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}