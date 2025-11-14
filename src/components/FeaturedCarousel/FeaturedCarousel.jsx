"use client";

import React, { useState, useEffect, useRef } from "react";
import Featured from "../Featured/Featured";
import styles from "./FeaturedCarousel.module.css";

export default function FeaturedCarousel({ items, interval = 5000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => handleNext(), interval);
    return () => clearInterval(timer);
  }, [currentIndex, interval]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    timeoutRef.current = setTimeout(() => setIsAnimating(false), 600);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    timeoutRef.current = setTimeout(() => setIsAnimating(false), 600);
  };

  const goToSlide = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    timeoutRef.current = setTimeout(() => setIsAnimating(false), 600);
  };

  return (
    <div className={styles.carousel}>
      <div
        className={styles.carouselTrack}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {items.map((item, index) => (
          <div className={styles.slide} key={index}>
            <Featured {...item} />
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button className={styles.prev} onClick={handlePrev}>
        &#10094;
      </button>
      <button className={styles.next} onClick={handleNext}>
        &#10095;
      </button>

      {/* Navigation Dots */}
      <div className={styles.dots}>
        {items.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              index === currentIndex ? styles.active : ""
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
