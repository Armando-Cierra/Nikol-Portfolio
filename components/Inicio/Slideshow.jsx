import Link from 'next/link'
import SwiperCore, { Navigation, Pagination, Autoplay, EffectFade} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);

export default function Slideshow(){

    const urlImgs = [
        './img/slideshow/1.jpg',
        './img/slideshow/2.jpg',
        './img/slideshow/3.jpg',
        './img/slideshow/4.jpg',
        './img/slideshow/5.jpg',
        './img/slideshow/6.jpg',
        './img/slideshow/7.jpg',
        './img/slideshow/9.jpg',
        './img/slideshow/10.jpg'
    ];

    return(
        <header>
            <div className="slideshow" data-aos="zoom-in">
                <Swiper
                    effect="fade"
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    navigation
                    loop
                    speed = {1000}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false
                    }}
                >
                    {urlImgs.map((url, index)=>(
                        <SwiperSlide key={index}>
                            <div className="imagen" style={{background: `url('${url}')`}}></div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="contenedorSmall" data-aos="fade-up" data-aos-delay="250">
                <p>Descubre mis últimos trabajos y encuentra el diseño ideal.</p>
                <Link href="/proyectos"><button className="btn">Ver Todos los Proyectos</button></Link>
            </div>
        </header>
    )
}