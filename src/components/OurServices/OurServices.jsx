import React from "react";
import styles from "./OurServices.module.css";
import Image from "next/image";

export default function OurServices({ imgSrc, header, services }) {
  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h3>{header}</h3>
      </div>

      <div className={styles.body}>
        <div className={styles.content}>
            {services.map((service, i) => (
                <div key={i}>
                    <h2 className={styles.title}>{service.title}</h2>
                    <p className={styles.paragraph}>{service.paragraph}</p>
                </div>
            ))}    
        </div>
        <div className={styles.image}>
            <Image 
                src={imgSrc}
                alt="Model" 
                width={400} 
                height={300} 
            />
        </div>
      </div>
    </div>
  );
}