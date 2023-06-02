import styles from "./Slider.module.scss";

import { ReactComponent as Next } from "../../assets/img/next.svg";
import { ReactComponent as Prev } from "../../assets/img/prev.svg";

import "pure-react-carousel/dist/react-carousel.es.css";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";

import { useEffect, useState } from "react";
import SlideCard from "../SlideCard";
import { useAppDispatch, useAppSelector } from "../../hook/redux";
import { fetchData } from "../../store/actions/dataActions";

const SliderMain = () => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const [currentSlide, setCurrentSlide] = useState<number>(1);

  const slide = data.map((data: any, i: number) => (
    <Slide key={i} index={i} className={styles.slide}>
      <SlideCard key={i} data={data} />
    </Slide>
  ));

  const slideCounter = (
    <div className={styles.currentSlide}>
      {currentSlide} <span>/ {slide.length}</span>
    </div>
  );

  const changeSlide = (i: number) => {
    setCurrentSlide((currentSlide) => currentSlide + i);
  };

  return (
    <>
      <CarouselProvider
        naturalSlideWidth={90}
        naturalSlideHeight={125}
        totalSlides={slide.length}
        visibleSlides={1}
        className={styles.sliderWrapper}
        isIntrinsicHeight
      >
        <Slider className={styles.slider}>{slide}</Slider>
        <div className={styles.wrapperArrow}>
          <ButtonBack onClick={() => changeSlide(-1)} className={styles.prev}>
            <Prev />
          </ButtonBack>
          {slideCounter}
          <ButtonNext onClick={() => changeSlide(1)} className={styles.next}>
            <Next />
          </ButtonNext>
        </div>
      </CarouselProvider>
    </>
  );
};

export default SliderMain;
