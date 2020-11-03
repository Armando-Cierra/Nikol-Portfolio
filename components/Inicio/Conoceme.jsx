import Link from 'next/link'

export default function Conoceme(){
    return(
        <section className="conocemeHome">
            <div className="contenedor" data-aos="zoom-in">
                <div className="texto">
                    <div className="caja">
                        <h2 data-aos="fade-in">Conóceme</h2>
                        <p data-aos="fade-up" data-aos-delay="250">"Defino el interiorismo como un arte que pasa de la imaginación a algo físico y puede cambiar la vida de las personas..."</p>
                        <div data-aos="fade-up" data-aos-delay="500"><Link href="/conoceme"><button className="btn">Descubre Más</button></Link></div>
                    </div>
                </div>
                <img src="./img/foto.jpg" alt=""/>
            </div>
        </section>
    )
}