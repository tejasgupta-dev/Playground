"use client";

import React from "react";
import styles from "./Featured.module.css";
import Link from "next/link.js";

export default function Featured({ imgSrc, header, title, paragraph, route }) {
  return (
    <div
      className={styles.featured}
      style={{ backgroundImage: `url(${imgSrc})` }}
    >
      <div className={styles.header}>
        <h3>{header}</h3>
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.paragraph}>{paragraph}</p>
        <Link href={route} className={styles.button}>
          Explore
        </Link>
      </div>
    </div>
  );
}