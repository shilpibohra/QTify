/*// import Swiper core and required modules
import React, { useEffect } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import styles from "./Carousel.module.css";
// Import Swiper styles
import 'swiper/css';
import CarouselLeftNavigation from './CarouselLeftNavigation/CarouselLeftNavigation';
import CarouselRightNavigation from './CarouselRightNavigation/CarouselRightNavigation';


const Controls = ({ data}) => {
    const swiper = useSwiper();
    useEffect(() => {
        swiper.slideTo(0)
    }, [data, swiper]);
    return <></>;
}

function Carousel({data, renderComponent}) {
    return (
        <div className={styles.wrapper}>
        <Swiper
            style={{ padding: "0px 20px" }}
            initialSlide={0}
            modules={[Navigation]}
            spaceBetween={40}
            slidesPerView={"3"}
            allowTouchMove
            loop={false}
        >
            <Controls data={data} />
            <CarouselLeftNavigation />
            <CarouselRightNavigation />
            
            {data.map((ele) => (<SwiperSlide>{renderComponent(ele)}</SwiperSlide>))}
        </Swiper>
      </div>
    );
  };

export default Carousel;*/
import React, { useEffect, useRef, useState } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from "./Carousel.module.css";
import CarouselLeftNavigation from './CarouselLeftNavigation/CarouselLeftNavigation';
import CarouselRightNavigation from './CarouselRightNavigation/CarouselRightNavigation';

function Carousel({ data, renderComponent }) {
    const [nextClicks, setNextClicks] = useState(0);
    const swiperRef = useRef(null);

    // Increment nextClicks on "next" button click
    const handleNextClick = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
            setNextClicks((prev) => prev + 1);
        }
    };

    // Reset the swiper and nextClicks when data changes
    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.slideTo(0);
            setNextClicks(0);
        }
    }, [data]);

    return (
        <div className={styles.wrapper}>
            <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                slidesPerView={3} // Equivalent to slidesPerView: 3 in vanilla Swiper
                spaceBetween={20} // Equivalent to spaceBetween: 20
                loop={false} // Equivalent to loop: false
                navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                modules={[Navigation]}
            >
                {/* Custom navigation */}
                <CarouselLeftNavigation />
                <CarouselRightNavigation onClick={handleNextClick} />

                {data.map((ele, index) => {
                    // Hide the first 2 slides after 4 clicks
                    if (nextClicks >= 4 && index < 2) return null;
                    return <SwiperSlide key={index}>{renderComponent(ele)}</SwiperSlide>;
                })}
            </Swiper>
        </div>
    );
}
export default Carousel;