'use client'
import styles from "./sliderOne.module.css"
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function SliderOne() {
  return (
    <section className={styles.sliderOne}>
      <div className={styles.sliderCont}>
            <Swiper
                navigation
                pagination={{ type: 'fraction' }}
                modules={[Navigation, Pagination]}
                className={styles.swiperCont}
            >
                <SwiperSlide>
                        <Image
                            src='/imagesOne/first.png'
                            alt='First'
                            layout="fill"
                            objectFit="contain"
                            className={styles.swiperImage}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            src='/imagesOne/second.png'
                            alt='Second'
                            layout="fill"
                            objectFit="contain"
                            className={styles.swiperImage}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            src='/imagesOne/third.png'
                            alt='Third'
                            layout="fill"
                            objectFit="contain"
                            className={styles.swiperImage}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            src='/imagesOne/fourth.png'
                            alt='Fourth'
                            layout="fill"
                            objectFit="contain"
                            className={styles.swiperImage}
                        />
                </SwiperSlide>
            </Swiper>
      </div>
    </section>
  )
}