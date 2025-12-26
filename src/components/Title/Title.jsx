"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Title({
  title = "",
  imgSrc = "",
  videoSrc = "",
}) {
  const [isVisible, setIsVisible] = useState(true);
  const spacerRef = useRef(null);

  useEffect(() => {
    if (!spacerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(prev =>
          prev === entry.isIntersecting ? prev : entry.isIntersecting
        );
      },
      { threshold: 0 }
    );

    observer.observe(spacerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={spacerRef} className="h-[15vw] max-md:h-[100px]" />

      {isVisible && (
        <div className="fixed top-0 left-0 w-full h-[15vw] max-md:h-[100px] flex items-center pointer-events-none z-0">
          <h1
            className="text-5xl max-md:text-2xl font-black"
            style={{
              color: "#ffb800",
              textShadow: "3px 3px 0 #ffffff, 6px 6px 0 #000000",
            }}
          >
            {title}
          </h1>
          <Image
            src={imgSrc}
            alt="My Photo"
            width={400}
            height={300}
            className="w-[20%] h-auto"
            priority
          />
        </div>
      )}

      <div className="relative h-screen w-full bg-black">
        <video
          className="absolute inset-0 w-full h-full object-cover rounded-[2rem]"
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      </div>
    </>
  );
}
