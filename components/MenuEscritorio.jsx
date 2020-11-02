import Link from 'next/link'
import NavLink from './NavLink'

export default function MenuEscritorio(){
    return(
        <nav className="menuEscritorio">
            <div className="contenedor">
                <Link href="/" className="logo">
                    <img src="./img/logo.png" alt=""/>
                </Link>
                <div className="enlaces">
                    <NavLink href="/">Inicio</NavLink>
                    <NavLink href="/conoceme">Conóceme</NavLink>
                    <NavLink href="/proyectos">Proyectos</NavLink>
                </div>
            </div>
        </nav>
    )
}