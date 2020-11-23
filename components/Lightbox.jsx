export default function Lightbox({servicio, setServicio}){

    const videos = [
        {
            nombre: 'Diseño Arquitectónico',
            video: `
                Diseño Arquitectónico
            `
        }, {
            nombre: 'Diseño Interior',
            video: `
                Diseño Interior
            `
        }, {
            nombre: 'Visualizacion 3D',
            video: `
                Visualizacion 3D
            `
        }
    ]

    if(servicio != null){
        return(
            <section className="lightbox">
                <div>
                    {videos.map((video, index)=>{
                        if(video.nombre === servicio){
                            return <h3 key={index}>{video.nombre}</h3>
                        }
                    })}
                </div>
            </section>
        )
    } else {
        return null
    }
}