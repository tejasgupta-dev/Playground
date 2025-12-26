"use client"

import React from "react";
import styles from "./page.module.css";
import Title from "../components/Title/Title";
import Welcome from "../components/Welcome/Welcome";
import FeaturedCarousel from "../components/FeaturedCarousel/FeaturedCarousel";
import OurServices from "../components/OurServices/OurServices";
import Metro from "../components/Metro/Metro";
import TestimonialCarousel from "../components/TestimonialCaraousel/TestimonialCarousel";
import Socials from "../components/Socials/Socials";
import {
  title,
  welcome,
  featuredItems,
  services,
  testimonies,
} from "../content/home"

export default function Home() {
  return (
    <div className={styles.home}>
      <Title {...title}/>

      <div className={styles.contentSection}>
        <Welcome {...welcome}/>

        <div className={styles.featuredSection}>
          <FeaturedCarousel items={featuredItems} interval={6000} />
        </div>

        <div className={styles.servicesSection}>
          <OurServices imgSrc={"/images/model.png"} header={"Our Services"} services={services} />
        </div>

        {/* TODO: fix this section */}
        <div className={styles.metroSection}>
          {/* <Metro /> */}
        </div>

        <div className={styles.clientSection}>
          <TestimonialCarousel items={testimonies}/>
        </div>

        <div className={styles.socialSection}>
          <Socials />
        </div>

        <div className={styles.photoSection}>

        </div>

        <div className={styles.contactSection} data-contact-section>

        </div>
      </div>
    </div>
  );
}