'use client';
import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, Mousewheel } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from "./slider.module.css";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const Slider = ({ slides }) => {
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current) {
            const swiperInstance = swiperRef.current.swiper;
            swiperInstance.params.navigation.prevEl = `.${styles.swiperButtonPrev}`;
            swiperInstance.params.navigation.nextEl = `.${styles.swiperButtonNext}`;
            swiperInstance.navigation.update();
        }
    }, []);

    return (
        <div className={styles.container}>
            {/* Custom Navigation Buttons */}
            <div className={styles.swiperButtonPrev}><FaAngleLeft /></div>
            <div className={styles.swiperButtonNext}><FaAngleRight /></div>

            <Swiper
                ref={swiperRef}
                slidesPerView={3}
                modules={[Pagination, Mousewheel, Navigation, Scrollbar]}
                breakpoints={{
                    // When window width is <= 450px
                    382.5: {
                        slidesPerView: 1,
                    },
                    // When window width is between 450px and 768px
                    650: {
                        slidesPerView: 2,
                    },
                    // When window width is between 768px and 1194px
                    1150: {
                        slidesPerView: 3,
                    },
                    1500: {
                        slidesPerView: 3,
                    }


                }}
                spaceBetween={10}
                navigation={{
                    nextEl: `.${styles.swiperButtonNext}`,
                    prevEl: `.${styles.swiperButtonPrev}`,
                }}
                scrollbar={{ draggable: true }}
                mousewheel={{ forceToAxis: true, sensitivity: 0.1, releaseOnEdges: true }}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className={styles.slide}
                            style={{
                                backgroundImage: `url(${slide.backgroundImage})`, // Set background image
                                backgroundSize: 'cover', // Ensure the background covers the slide
                                backgroundPosition: 'center', // Center the background
                            }}
                        >
                            {slide.content}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slider;