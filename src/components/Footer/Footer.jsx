import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";

export default function Footer({ imgSrc }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.image}>
        <Image 
          src={imgSrc}
          alt="Footer Logo"
          width={400}
          height={400}
        />
      </div>
    </footer>
  );
}
