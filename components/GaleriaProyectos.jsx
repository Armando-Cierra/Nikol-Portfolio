import listaProyectos from '../helper/proyectos'

export default function GaleriaProyectos(){

    console.log(listaProyectos);

    return(
        <section className="galeriaProyectos">
            <h2>Proyectos</h2>
            <div className="contenedor">
                {listaProyectos.map((proyecto, index)=>(
                    <div className="proyectoCover" key={index}>
                        {proyecto.cover && <img src={proyecto.cover} alt=""/>}
                        <div className="titulo">{proyecto.nombre}</div>
                    </div>
                ))}
            </div>
        </section>
    )
}