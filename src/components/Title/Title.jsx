import React from "react";
import Image from "next/image";
import styles from "./Title.module.css";

export default function Title({title = null, imgSrc = null, videoSrc = null}) {
  return (
    <>
      <div className={styles.titleSection}>
        <div className={styles.title}>
          <h1><strong>{title}</strong></h1>
          <Image 
            src={imgSrc} 
            alt="My Photo" 
            width={400} 
            height={300} 
          />
        </div>
      </div>

      <div className={styles.videoSection}>
        <video
          className={styles.backgroundVideo}
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
    </>
  );
}