import React, { useState, useEffect, useRef } from "react";

export default function Title({
  title = "Playground",
  subtitle = "Marketing Firm",
  splatterColor = "#7AFF6B", // Bright green default
  videoSrc = "",
  imgSrc = "",
}) {
  const [isVisible, setIsVisible] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const spacerRef = useRef(null);
  const containerRef = useRef(null);

  // Generate random splatter positions and sizes
  const splatters = useRef(
    Array.from({ length: 40 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 80 + 20,
      depth: Math.random() * 3 + 1, // For parallax depth
      rotation: Math.random() * 360,
      opacity: Math.random() * 0.4 + 0.6,
    }))
  ).current;

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Intersection observer for visibility
  useEffect(() => {
    if (!spacerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible((prev) =>
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
      <div ref={spacerRef} className="h-[100vh] max-md:h-[100px]" />

      {isVisible && (
        <div
          ref={containerRef}
          className="fixed top-0 left-0 w-full h-[100vh] max-md:h-[100px] flex items-center justify-center pointer-events-none z-0"
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Animated splatters with parallax */}
            {splatters.map((splatter, i) => (
              <div
                key={i}
                className="absolute rounded-full blur-sm transition-transform duration-75 ease-out"
                style={{
                  left: `${splatter.x}%`,
                  top: `${splatter.y}%`,
                  width: `${splatter.size}px`,
                  height: `${splatter.size}px`,
                  backgroundColor: splatterColor,
                  opacity: splatter.opacity,
                  transform: `
                    translate(-50%, -50%) 
                    translate(${mousePos.x * splatter.depth * 15}px, ${mousePos.y * splatter.depth * 15}px)
                    rotate(${splatter.rotation}deg)
                  `,
                }}
              />
            ))}

            {/* Additional splatter details (smaller dots) */}
            {splatters.slice(0, 20).map((splatter, i) => (
              <div
                key={`small-${i}`}
                className="absolute rounded-full transition-transform duration-75 ease-out"
                style={{
                  left: `${(splatter.x + 5) % 100}%`,
                  top: `${(splatter.y + 3) % 100}%`,
                  width: `${splatter.size * 0.3}px`,
                  height: `${splatter.size * 0.3}px`,
                  backgroundColor: splatterColor,
                  opacity: splatter.opacity * 0.8,
                  transform: `
                    translate(-50%, -50%) 
                    translate(${mousePos.x * splatter.depth * 20}px, ${mousePos.y * splatter.depth * 20}px)
                  `,
                }}
              />
            ))}

            {/* Text content */}
            <div className="relative z-10 text-center px-8">
              <h1
                className="text-7xl max-md:text-4xl font-black tracking-tight"
                style={{
                  color: "#000000",
                  textShadow: `
                    3px 3px 0 #ffffff,
                    6px 6px 0 #000000,
                    -1px -1px 0 #ffffff,
                    1px -1px 0 #ffffff,
                    -1px 1px 0 #ffffff,
                    1px 1px 0 #ffffff
                  `,
                  WebkitTextStroke: "2px white",
                  paintOrder: "stroke fill",
                }}
              >
                {title}
              </h1>
              <h2
                className="text-5xl max-md:text-2xl font-black mt-4 tracking-tight"
                style={{
                  color: "#000000",
                  textShadow: `
                    3px 3px 0 #ffffff,
                    6px 6px 0 #000000,
                    -1px -1px 0 #ffffff,
                    1px -1px 0 #ffffff,
                    -1px 1px 0 #ffffff,
                    1px 1px 0 #ffffff
                  `,
                  WebkitTextStroke: "2px white",
                  paintOrder: "stroke fill",
                }}
              >
                {subtitle}
              </h2>
            </div>

            {/* Optional image */}
            {imgSrc && (
              <img
                src={imgSrc}
                alt="Decorative"
                className="absolute right-[10%] w-[20%] h-auto max-md:hidden"
                style={{
                  transform: `translate(${mousePos.x * -10}px, ${mousePos.y * -10}px)`,
                  transition: "transform 0.1s ease-out",
                }}
              />
            )}
          </div>
        </div>
      )}

      {/* Video section */}
      <div className="relative h-screen w-full bg-black">
        {videoSrc && (
          <video
            className="absolute inset-0 w-full h-full object-cover rounded-[2rem]"
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        )}
      </div>
    </>
  );
}