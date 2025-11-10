import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.titleSection}>
        <div className={styles.title}>
          <h1>PLAYGROUND MARKETING FIRM</h1>
          <Image 
            src="/images/Cross.png" 
            alt="My Photo" 
            width={400} 
            height={300} 
          />
        </div>
      </div>

      {/* Video Section */}
      <div className={styles.videoSection}>
        <video
          className={styles.backgroundVideo}
          src="/videos/JayWalking.MP4"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      {/* Content below video */}
      <div className={styles.contentSection}>

      </div>
    </div>
  );
}