import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"

import styles from "../../styles/swiper.module.scss"

function Card () {
    return(
        <div className={styles["card-container"]}>
            <h4>INTJ & ENFP</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis iste debitis magni cupiditate libero illo.</p>
        </div>
    )
}

export default function SwiperContainer () {
    return(
        <div className={styles["swiper-container"]}>
            <Swiper
                direction="vertical"
                modules={[Navigation, Autoplay]}
                loop
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true
                }}
                slidesPerView={2}
                spaceBetween={4}
                className={styles["swiper-component"]}
            >
                <SwiperSlide className={styles["swiper-item"]}>
                    <Card />
                </SwiperSlide>
                <SwiperSlide className={styles["swiper-item"]}>
                    <Card />
                </SwiperSlide>
                <SwiperSlide className={styles["swiper-item"]}>
                    <Card />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}