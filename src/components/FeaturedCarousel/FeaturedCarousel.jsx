"use client";

import React, { useState, useEffect, useRef } from "react";
import Featured from "../Featured/Featured";
import styles from "./FeaturedCarousel.module.css";

export default function FeaturedCarousel({ items, interval = 5000 }) {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const timeoutRef = useRef(null);

  // Create infinite scroll array: [last, ...items, first]
  const infiniteItems = [items[items.length - 1], ...items, items[0]];

  useEffect(() => {
    const timer = setInterval(() => handleNext(), interval);
    return () => clearInterval(timer);
  }, [currentIndex, interval]);

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const goToSlide = (index) => {
    setIsTransitioning(true);
    setCurrentIndex(index + 1);
  };

  // Handle infinite loop reset
  useEffect(() => {
    if (currentIndex === 0) {
      // We moved onto the LEFT CLONE (index 0)
      timeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(items.length); // go to last REAL slide without animation
      }, 600);
    }
    else if (currentIndex === infiniteItems.length - 1) {
      // We moved onto the RIGHT CLONE (index N+1)
      timeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(1); // go to first REAL slide without animation
      }, 600);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentIndex, items.length, infiniteItems.length]);

  const actualIndex = ((currentIndex - 1) % items.length + items.length) % items.length;

  return (
    <div className={styles.carousel}>
      <div
        className={styles.carouselTrack}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isTransitioning ? "transform 0.6s ease-in-out" : "none",
        }}
      >
        {infiniteItems.map((item, index) => (
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
              index === actualIndex ? styles.active : ""
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}