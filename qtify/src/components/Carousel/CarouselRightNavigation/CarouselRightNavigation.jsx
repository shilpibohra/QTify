/*import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import styles from "./CarouselRightNavigation.module.css";
import {ReactComponent as RightArrow } from "../../../assets/rightnav.svg";

export default function CarouselRightNavigation() {
    const swiper = useSwiper();
    const [isEnd, setIsEnd] = useState(swiper.isEnd);

    useEffect(() => {
        swiper.on("slideChange", function() {
            setIsEnd(swiper.isEnd);
        })
    }, []);
    return (
        <div className={styles.rightNavigation}>
            {!isEnd && <RightArrow onClick={()  => swiper.slideNext()} />}
        </div>
    )
}*/
/*import React from 'react';
import { useSwiper } from 'swiper/react';
import styles from './CarouselRightNavigation.module.css';
import {ReactComponent as RightArrow } from "../../../assets/rightnav.svg";


const CarouselRightNavigation = ({ onClick }) => {
  const swiper = useSwiper();

  return (
    <button
      className={styles.rightNav}
      onClick={() => {
        swiper.slideNext();
        if (onClick) onClick(); // trigger click counter in parent
      }}
    >
     <RightArrow/>
    </button>
  );
};

export default CarouselRightNavigation;*/
/*import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import styles from "./CarouselRightNavigation.module.css";
import {ReactComponent as RightArrow } from "../../../assets/rightnav.svg";

export default function CarouselRightNavigation() {
    const swiper = useSwiper();
    const [isEnd, setIsEnd] = useState(swiper.isEnd);

    useEffect(() => {
        swiper.on("slideChange", function() {
            setIsEnd(swiper.isEnd);
        })
    }, []);
    return (
        <div className={styles.rightNavigation}>
            {!isEnd && <RightArrow onClick={()  => swiper.slideNext()} />}
        </div>
    )
}*/

import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import styles from "./CarouselRightNavigation.module.css";
import { ReactComponent as RightArrow } from "../../../assets/rightnav.svg";

export default function CarouselRightNavigation({ onClick }) {
    const swiper = useSwiper();
    const [isEnd, setIsEnd] = useState(swiper.isEnd);

    useEffect(() => {
        const handleSlideChange = () => {
            setIsEnd(swiper.isEnd);
        };

        swiper.on("slideChange", handleSlideChange);

        // Cleanup listener to prevent memory leaks
        return () => {
            swiper.off("slideChange", handleSlideChange);
        };
    }, [swiper]);

    return (
        <div className={styles.rightNavigation}>
            {!isEnd && (
                <RightArrow
                    onClick={() => {
                        swiper.slideNext(); // Move to the next slide
                        onClick(); // Trigger the click tracking callback
                    }}
                />
            )}
        </div>
    );
}