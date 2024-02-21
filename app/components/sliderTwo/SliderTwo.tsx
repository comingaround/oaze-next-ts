'use client'
import "./sliderTwo.css"
import styles from "./sliderTwo.module.css"
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function SliderTwo() {
    return(
    <div className={styles.SliderTwo}>
        <section className="sliderOne2">
            <div className='sliderCont2'>
                <Swiper
                    className='swiperCont2'
                    draggable={false}
                    slidesPerView={1}
                    spaceBetween={40}
                    loop={true}
                    pagination={{ type: 'bullets' }}
                    navigation
                    modules={[Navigation, Pagination]}
                >
                    <SwiperSlide>
                            <Image
                                src='/imagesOne/first.png'
                                alt='First'
                                width={326}
                                height={437}
                                className='swiperImage2'
                                quality={100}
                                draggable={false}
                            />
                            <div className="swiper_slide_text2">
                                <h3>Perlo lašo auskarai</h3>
                                <h6>Nuo 1.800 €</h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src='/imagesOne/second.png'
                                alt='Second'
                                width={326}
                                height={437}
                                className='swiperImage2'
                                quality={100}
                                draggable={false}
                            />
                            <div className="swiper_slide_text2">
                                <h3>Perlo lašo auskarai</h3>
                                <h6>Nuo 1.800 €</h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src='/imagesOne/third.png'
                                alt='Third'
                                width={326}
                                height={437}
                                className='swiperImage2'
                                quality={100}
                                draggable={false}
                            />
                            <div className="swiper_slide_text2">
                                <h3>Perlo lašo auskarai</h3>
                                <h6>Nuo 1.800 €</h6>
                            </div>
                        </SwiperSlide>
                </Swiper>
            </div>
        </section>
        <div className={styles.SliderTwoCover}>
            <Image 
                src='/imagesTwo/cover_three.png'
                layout="fill"
                quality={100}
                alt="cover_three"
            />
        </div>
    </div>
    );
}