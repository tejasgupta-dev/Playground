import React from "react";
import styles from "./Testimonial.module.css";
import Image from "next/image";

export default function Testimonial({ imgSrc, statement, source }) {
  return (
    <div className={styles.section}>
      <div className={styles.image}>
        <Image 
          src={imgSrc}
          alt="Logo"
          width={400}
          height={400}
        />
      </div>

      <h2 className={styles.statement}>{statement}</h2>
      <p className={styles.source}>{source}</p>
    </div>
  );
}
