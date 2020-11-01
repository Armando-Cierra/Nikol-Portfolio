import {useState} from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

export default function Footer(){

    const year = new Date().getFullYear();
    const [error, setError] = useState({
        activo: false,
        mensaje: ''
    })
    const [info, setInfo] = useState({
        nombre: '',
        correo: '',
        telefono: '',
        descripcion: ''
    })

    function capturarInfo(e){
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        })
    }

    async function validarInfo(e){
        e.preventDefault();
        
        const {data} = await axios.post('https://portfolio-nikol.vercel.app/api/formulario', info);

        if(data.error){
            setError({
                activo: true,
                mensaje: data.message
            })
        } else {
            setError({
                activo: false,
                mensaje: 'data.message'
            })
            setInfo({
                nombre: '',
                correo: '',
                telefono: '',
                descripcion: ''
            })
            const Toast = Swal.mixin({
                toast: true,
                position: 'bottom-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                onOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
            Toast.fire({
                icon: 'success',
                title: 'Mensaje enviado exitosamente'
            })
        }
    }

    return(
        <footer>
            <h2>Contáctame</h2>
            <form onSubmit={validarInfo}>
                <div className="contenedorSmall">
                    <div className="campo">
                        <label htmlFor="nombre">Nombre:</label>
                        <input 
                            type="text" placeholder="..." name="nombre" id="nombre"
                            value={info.nombre}
                            onChange={capturarInfo}
                        />
                    </div>
                    <div className="campo">
                        <label htmlFor="correo">Correo:</label>
                        <input 
                            type="text" placeholder="..." name="correo" id="correo"
                            value={info.correo}
                            onChange={capturarInfo}
                        />
                    </div>
                    <div className="campo">
                        <label htmlFor="telefono">Número de Teléfono:</label>
                        <input 
                            type="text" placeholder="..." name="telefono" id="telefono"
                            value={info.telefono}
                            onChange={capturarInfo}
                        />
                    </div>
                    <div className="campo">
                        <label htmlFor="descripcion">Descripción del Proyecto:</label>
                        <textarea 
                            name="descripcion" id="descripcion" placeholder="..."
                            value={info.descripcion}
                            onChange={capturarInfo}
                        ></textarea>
                    </div>
                </div>
                {error.activo && <div className="contenedor"><p className="error">{error.mensaje}</p></div>}
                <div className="botonera">
                    <button type="submit" className="btn full">Enviar</button>
                </div>
            </form>
            <div className="base">
                <p>Copyright {year} © nikolp.com</p>
                <div className="redes">
                    <a href=""><i className="fab fa-facebook-square"></i></a>
                    <a href=""><i className="fab fa-instagram"></i></a>
                    <a href=""><i className="fab fa-behance-square"></i></a>
                </div>
            </div>
        </footer>
    )
}