import React from "react";
import type { EmblaOptionsType } from "embla-carousel";
import { PrevButton, NextButton, usePrevNextButtons } from "./ArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./styles.module.scss";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

export const BigCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slides.map((index) => (
            <div className={styles.embla__slide} key={index}>
              <div className={styles.embla__slide__number}>{index + 1}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.embla__controls}>
        <PrevButton onClick={onPrevButtonClick} isDisabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} isDisabled={nextBtnDisabled} />
      </div>
    </section>
  );
};
