"use client";

import React, { useState, useEffect } from "react";
import Testimonial from "../Testimonial/Testimonial";
import styles from "./TestimonialCarousel.module.css";

export default function TestimonialCarousel({ items, interval = 4000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [currentIndex, interval]);

  const handleNext = () => {
    setCurrentIndex((i) => (i + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((i) => (i - 1 + items.length) % items.length);
  };

  return (
    <div className={styles.section}>
        <button className={styles.prev} onClick={handlePrev}>
            &#10094;
        </button>

        <div className={styles.fadeWrapper}>
            {items.map((item, index) => (
            <div
                key={index}
                className={`${styles.slide} ${
                index === currentIndex ? styles.active : styles.inactive
                }`}
            >
                <Testimonial {...item} />
            </div>
            ))}
        </div>

        <button className={styles.next} onClick={handleNext}>
            &#10095;
        </button>
    </div>
  );
}
