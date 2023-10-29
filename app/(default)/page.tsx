"use client";

// export const metadata = {
//   title: 'Home - Simple',
//   description: 'Page description',
// }

import Hero from "@/components/hero";
import Features from "@/components/features";
import FeaturesBlocks from "@/components/features-blocks";
import Testimonials from "@/components/testimonials";
import Newsletter from "@/components/newsletter";
import Carousel from "@/components/carousel";
import Brand from "@/components/brand";
import Project from "@/components/project";
import Service from "@/components/service";
import Profile from "@/components/profile";

export default function Home() {
  return (
    <>
      <Carousel />
      {/* <Hero /> */}
      <Brand />
      <Project />
      <Service />
      <Profile />
      {/* <Features /> */}
      {/* <FeaturesBlocks /> */}
      {/* <Testimonials /> */}
      {/* <Newsletter /> */}
    </>
  );
}
