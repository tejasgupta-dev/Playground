"use client"

import React, { useState, useEffect } from "react";
import "./Metro.css";

const MetroContainer = ({ containerIndex, magazineImage, onMagazineClick }) => {
  return (
    <div
      className="metro-container"
      data-index={containerIndex}
      onClick={magazineImage ? () => onMagazineClick?.(magazineImage) : undefined}
    >
      {/* Base metro compartment image */}
      <img
        src="/images/Metro.png"
        alt={`Metro Container ${containerIndex}`}
        className="container-image"
      />

      {/* Magazine overlay */}
      {magazineImage && (
        <img
          src={magazineImage}
          alt={`Magazine ${containerIndex}`}
          className="magazine-image"
        />
      )}
    </div>
  );
};

const Metro = ({BUFFER_COUNT = 15, magazineImages = [], onMagazineClick }) => {
  const [validMagazines, setValidMagazines] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const checkImages = async () => {
      const checks = await Promise.all(
        magazineImages.map(
          (src) =>
            new Promise((resolve) => {
              const img = new Image();
              img.onload = () => resolve(src); // valid path
              img.onerror = () => resolve(null); // broken path
              img.src = src;
            })
        )
      );

      if (isMounted) {
        setValidMagazines(checks.filter(Boolean)); // keep only valid paths
        setLoading(false); // done checking
      }
    };

    checkImages();
    return () => {
      isMounted = false;
    };
  }, [magazineImages]);

  if (loading) {
    // optional: replace with a spinner or skeleton UI
    return <div className="metro-loading">Loading train...</div>;
  }

  const containerCount = validMagazines.length + BUFFER_COUNT * 2;

  const containers = Array.from({ length: containerCount }, (_, index) => {
    let magazineImage = null;

    // Assign magazines only in the middle section
    if (index >= BUFFER_COUNT && index < BUFFER_COUNT + validMagazines.length) {
      magazineImage = validMagazines[index - BUFFER_COUNT];
    }

    return (
      <MetroContainer
        key={index}
        containerIndex={index + 1}
        magazineImage={magazineImage}
        onMagazineClick={onMagazineClick}
      />
    );
  });

  return <div className="metro-metro">{containers}</div>;
};

export default Metro;
