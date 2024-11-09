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

    const tempArr = [0,1,2,3,4];
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
                slidesPerView={window.screen.width > 767 ? 2 : 3}
                spaceBetween={4}
                allowTouchMove={false}
                className={styles["swiper-component"]}
            >
                {tempArr.map((_,i) => (
                    <SwiperSlide className={styles["swiper-item"]} key={i}>
                        <Card />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}