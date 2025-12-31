"use client";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { TypographyH3 } from "@/components/ui/dashboard-ui/typography/typography";
import { usePrevNextButtons } from "./usePrevNextButtons";
import { ArrowBigRight, ArrowBigLeft } from "lucide-react";
import Link from "next/link";
import styles from "./styles.module.scss";
import type { EmblaOptionsType } from "embla-carousel";

type GenericEmblaCarouselProps<T> = {
  slides: T[];
  title: string;
  options: EmblaOptionsType;
  renderItem: (item: T) => React.JSX.Element;
  sectionLink: string;
  external_urls?: React.JSX.Element;
  isLoading?: boolean;
};

export const EmblaCarousel = <T,>({
  slides,
  options,
  title,
  renderItem,
  sectionLink,
  external_urls,
  isLoading,
}: GenericEmblaCarouselProps<T>) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const filtered = slides.filter((item) => item !== null);

  return (
    <div className={styles.root}>
      <div className={styles.headerRow}>
        <div className={styles.headerInner}>
          <Link href={sectionLink}>
            <TypographyH3 className="hover:underline">{title}</TypographyH3>
          </Link>

          <div className={styles.controls}>
            <Button
              variant="ghost"
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
              size="icon-lg"
            >
              <ArrowBigLeft />
            </Button>

            <Button
              variant="ghost"
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
              size="icon-lg"
            >
              <ArrowBigRight />
            </Button>
          </div>
        </div>

        {external_urls}
      </div>

      <div ref={emblaRef} className={styles.carousel}>
        <div className={styles.track}>
          {isLoading
            ? "loading"
            : filtered?.map((item, i) => (
                <div key={i} className={styles.slide}>
                  {renderItem(item)}
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};
