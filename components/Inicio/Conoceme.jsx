import Link from 'next/link'

export default function Conoceme(){
    return(
        <section className="conocemeHome">
            <div className="contenedor">
                <div className="texto">
                    <div className="caja">
                        <h2>Conóceme</h2>
                        <p>"Defino el interiorismo como un arte que pasa de la imaginación a algo físico y puede cambiar la vida de las personas..."</p>
                        <div><Link href="/conoceme"><button className="btn">Descubre Más</button></Link></div>
                    </div>
                </div>
                <img src="./img/foto.png" alt=""/>
            </div>
        </section>
    )
}