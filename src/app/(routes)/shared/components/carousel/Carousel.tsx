import React from "react";
import { BigCarousel } from "@/components/dashboard/anime/main/components/carousel/big-carousel/BigCarousel";
import type { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = {};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export const Carousel = () => {
  return <div>Carousel</div>;
};
