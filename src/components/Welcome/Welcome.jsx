import React from "react";
import styles from "./Welcome.module.css";

export default function Welcome({title = null, highlightedTitle = null, description = null, buttonText = null, buttonLink = null}) {
  const handleScheduleClick = () => {
    const element = document.querySelector('[data-contact-section]');
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.welcomeSection}>
      <h1 className={styles.welcomeTop}><i>{title}</i></h1>
      <h1 className={styles.welcomeBottom}>{highlightedTitle}</h1>
      <div className={styles.welcomeDescription}>
        <p>
          {description}
        </p>
        <button 
          className={styles.scheduleButton}
          onClick={handleScheduleClick}
        >
          {buttonText}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="1rem"
            height="1rem"
          >
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}