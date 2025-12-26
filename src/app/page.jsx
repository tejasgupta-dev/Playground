"use client"

import React from "react";
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
    <div>
      <Title {...title}/>

      <Welcome {...welcome}/>

      <FeaturedCarousel items={featuredItems} interval={6000} />

      <OurServices imgSrc={"/images/model.png"} header={"Our Services"} services={services} />

      {/* <Metro /> */}

      <TestimonialCarousel items={testimonies}/>

      <Socials />

      <div data-contact-section></div>
      
    </div>
  );
}