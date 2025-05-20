// import Swiper core and required modules
/*import React, { useEffect } from 'react';
import { useRef, useState } from 'react';
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
    }, [data]);
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
            slidesPerView={"auto"}
            allowTouchMove
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
// import React, { useEffect } from "react";
// import styles from "./Carousal.module.css";
// //@ts-ignore
// import Swiper from "swiper";
// import { useSwiper,SwiperSlide  } from 'swiper/react';
// import "swiper/css";
// import  CarousalLeftNavigation  from "./CarousalLeftNavigation/CarousalLeftNavigation";
// import  CarousalRightNavigation  from "./CarousalRightNavigation/CarousalRightNavigation";
/*import React, { useEffect, useRef, useState } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import styles from "./Carousel.module.css";
import 'swiper/css';
import CarouselLeftNavigation from './CarouselLeftNavigation/CarouselLeftNavigation';
import CarouselRightNavigation from './CarouselRightNavigation/CarouselRightNavigation';

const Controls = ({ data }) => {
  const swiper = useSwiper();
  useEffect(() => {
    swiper.slideTo(0);
  }, [data]);
  return null;
};

function Carousel({ data, renderComponent }) {
  const swiperRef = useRef(null);
  const [nextClicks, setNextClicks] = useState(0);

  // Track right nav click
  const handleRightNavClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
      setNextClicks((prev) => prev + 1);
    }
  };

  return (
    <div className={styles.wrapper}>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        style={{ padding: "0px 20px" }}
        initialSlide={0}
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={"auto"}
        allowTouchMove
      >
        <Controls data={data} />
        
        {/* Custom navigation buttons }
        <CarouselLeftNavigation />
        <CarouselRightNavigation onClick={handleRightNavClick} />

        {data.map((ele, index) => {
          // After 4 right clicks, hide first 2 slides
          if (nextClicks >= 4 && index < 2) return null;
          return <SwiperSlide key={index}>{renderComponent(ele)}</SwiperSlide>;
        })}
      </Swiper>
    </div>
  );
}

export default Carousel;*/
// import Swiper core and required modules
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
    }, [data]);
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
            slidesPerView={"auto"}
            allowTouchMove
        >
            <Controls data={data} />
            <CarouselLeftNavigation />
            <CarouselRightNavigation />
            
            {data.map((ele) => (<SwiperSlide>{renderComponent(ele)}</SwiperSlide>))}
        </Swiper>
      </div>
    );
  };

export default Carousel;