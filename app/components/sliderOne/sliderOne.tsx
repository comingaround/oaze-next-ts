'use client'
import styles from "./sliderOne.module.css"
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './swiperGeneral.css'

export default function SliderOne() {

  return (
    <div className={styles.Gallery}>
        <div className={styles.GalleryTitle}>
            <h1>Populiariausi</h1>
        </div>
        <section className="sliderOne">
            <div className='sliderCont'>
                <Swiper
                    className='swiperCont'
                    slidesPerView={1}
                    spaceBetween={40}
                    loop={true}
                    navigation
                    modules={[Navigation, Pagination]}
                    breakpoints={{
                        576: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                        },
                        992: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                        },
                    }}
                >
                    <SwiperSlide>
                            <Image
                                src='/imagesOne/first.png'
                                alt='First'
                                width={450}
                                height={340}
                                className='swiperImage'
                                quality={100}
                                draggable={false}
                            />
                            <div className="swiper-slide-text">
                                <h3>Grandinėlė su perlo lašu</h3>
                                <h6>Nuo 2.400 €</h6>
                                <p>10K auksas, <br /> Kultivuoti gėlo vandens perlai</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src='/imagesOne/second.png'
                                alt='Second'
                                width={450}
                                height={340}
                                className='swiperImage'
                                quality={100}
                                draggable={false}
                            />
                            <div className="swiper-slide-text">
                                <h3>Grandinėlė su perlo lašu</h3>
                                <h6>Nuo 2.400 €</h6>
                                <p>10K auksas, <br /> Kultivuoti gėlo vandens perlai</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src='/imagesOne/third.png'
                                alt='Third'
                                width={450}
                                height={340}
                                className='swiperImage'
                                quality={100}
                                draggable={false}
                            />
                            <div className="swiper-slide-text">
                                <h3>Grandinėlė su perlo lašu</h3>
                                <h6>Nuo 2.400 €</h6>
                                <p>10K auksas, <br /> Kultivuoti gėlo vandens perlai</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src='/imagesOne/fourth.png'
                                alt='Fourth'
                                width={450}
                                height={340}
                                className='swiperImage'
                                quality={100}
                                draggable={false}
                            />
                            <div className="swiper-slide-text">
                                <h3>Grandinėlė su perlo lašu</h3>
                                <h6>Nuo 2.400 €</h6>
                                <p>10K auksas, <br /> Kultivuoti gėlo vandens perlai</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src='/imagesOne/first.png'
                                alt='First'
                                width={450}
                                height={340}
                                className='swiperImage'
                                quality={100}
                                draggable={false}
                            />
                            <div className="swiper-slide-text">
                                <h3>Grandinėlė su perlo lašu</h3>
                                <h6>Nuo 2.400 €</h6>
                                <p>10K auksas, <br /> Kultivuoti gėlo vandens perlai</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src='/imagesOne/second.png'
                                alt='Second'
                                width={450}
                                height={340}
                                className='swiperImage'
                                quality={100}
                                draggable={false}
                            />
                            <div className="swiper-slide-text">
                                <h3>Grandinėlė su perlo lašu</h3>
                                <h6>Nuo 2.400 €</h6>
                                <p>10K auksas, <br /> Kultivuoti gėlo vandens perlai</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src='/imagesOne/third.png'
                                alt='Third'
                                width={450}
                                height={340}
                                className='swiperImage'
                                quality={100}
                                draggable={false}
                            />
                            <div className="swiper-slide-text">
                                <h3>Grandinėlė su perlo lašu</h3>
                                <h6>Nuo 2.400 €</h6>
                                <p>10K auksas, <br /> Kultivuoti gėlo vandens perlai</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src='/imagesOne/fourth.png'
                                alt='Fourth'
                                width={450}
                                height={340}
                                className='swiperImage'
                                quality={100}
                                draggable={false}
                            />
                            <div className="swiper-slide-text">
                                <h3>Grandinėlė su perlo lašu</h3>
                                <h6>Nuo 2.400 €</h6>
                                <p>10K auksas, <br /> Kultivuoti gėlo vandens perlai</p>
                            </div>
                        </SwiperSlide>                      
                </Swiper>
            </div>
        </section>
    </div>
  )
}