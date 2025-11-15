"use client"

import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import FeaturedCarousel from "../components/FeaturedCarousel/FeaturedCarousel";
import OurServices from "../components/OurServices/OurServices";
import Metro from "../components/Metro/Metro";
import TestimonialCarousel from "../components/TestimonialCaraousel/TestimonialCarousel";
import Footer from "../components/Footer/Footer";

export default function Home() {
  const featuredItems = [
    {
      imgSrc: "/images/featured/TheCollegeClub.png",
      header: "LATEST PROJECTS",
      title: "The College Club",
      paragraph: "This is a space to welcome visitors to the site. As the first text readers encounter, this copy should clearly convey what the site is about. Grab their attention with captivating and inviting text, and add an image or video for extra engagement.",
      route: "/about-us",
    },
    {
      imgSrc: "/images/featured/Teddy.png",
      header: "OUR SERVICES",
      title: "Table Magazine",
      paragraph: "This is a space to welcome visitors to the site. As the first text readers encounter, this copy should clearly convey what the site is about. Grab their attention with captivating and inviting text, and add an image or video for extra engagement. ",
      route: "/about-us",
    },
    {
      imgSrc: "/images/featured/LastFirstDay.png",
      header: "OUR SERVICES",
      title: "Recent Vlog",
      paragraph: "This is a space to welcome visitors to the site. As the first text readers encounter, this copy should clearly convey what the site is about. Grab their attention with captivating and inviting text, and add an image or video for extra engagement. ",
      route: "/about-us",
    },
  ];

  const services = [
    { title: "Videography", paragraph: "This is the space to introduce the Services section. Briefly describe the types of services offered and highlight any special benefits or features." },
    { title: "Photography", paragraph: "This is the space to introduce the Services section. Briefly describe the types of services offered and highlight any special benefits or features." },
    { title: "Photo Editing", paragraph: "This is the space to introduce the Services section. Briefly describe the types of services offered and highlight any special benefits or features." },
    { title: "Service Name", paragraph: "This is the space to introduce the Services section. Briefly describe the types of services offered and highlight any special benefits or features." },
  ]

  const testimonies = [
    {imgSrc: "/images/Logo.png", statement: "“This is the space to share a review from one of the business's clients or customers.”", source: "JAMES SAHLEW, MN"},
    {imgSrc: "/images/Logo.png", statement: "“Use this space to share a testimonial quote about the business, its products or its services. Insert a quote from a real customer or client here to build trust and win over site visitors.”", source: "HALIT KEIGAD, FL"},
    {imgSrc: "/images/Logo.png", statement: "“This is the space to share a review from one of the business's clients or customers.”", source: "MOIZ RUDENS, CA"},
  ]

  return (
    <div className={styles.home}>

      <div className={styles.titleSection}>
        <div className={styles.title}>
          <h1><strong>PLAYGROUND MARKETING FIRM</strong></h1>
          <Image 
            src="/images/Cross.png" 
            alt="My Photo" 
            width={400} 
            height={300} 
          />
        </div>
      </div>

      <div className={styles.contentSection}>
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

        {/* Welcome Section */}
        <div className={styles.welcomeSection}>
          <h1 className={styles.welcomeTop}><i>Welcome To...</i></h1>
          <h1 className={styles.welcomeBottom}>The Playground</h1>
          <div className={styles.welcomeDescription}>
            <p>
              It’s an opportunity to tell the story behind the business or describe a special 
              service or product it offers. You can use this section to share the company's history or 
              highlight a particular feature that sets it apart from competitors.
            </p>
            <button 
              className={styles.scheduleButton}
              onClick={() => {
                const element = document.querySelector(`.${styles.contactSection}`);
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              SCHEDULE A CALL
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

        <div className={styles.featuredSection}>
          <FeaturedCarousel items={featuredItems} interval={6000} />;
        </div>

        <div className={styles.servicesSection}>
          <OurServices imgSrc={"/images/model.png"} header={"Our Services"} services={services}  />
        </div>

        {/* TODO: fix this ection */}
        <div className={styles.metroSection}>
          {/* <Metro /> */}
        </div>

        <div className={styles.clientSection}>
          <TestimonialCarousel items={testimonies}/>
        </div>

        <div className={styles.socialSection}>

        </div>

        <div className={styles.photoSection}>

        </div>

        <div className={styles.contactSection}>

        </div>

      </div>

      <Footer imgSrc="/images/Logo.png" />
    </div>
  );
}