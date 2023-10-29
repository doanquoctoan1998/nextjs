"use client";
import React from "react";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import Image from "next/image";
import { landingPage } from "@/public/images";
import { useRouter } from "next/navigation";
// import required modules
SwiperCore.use([EffectCoverflow, Pagination]);
// if you want to use array
const slide_img = [
  {
    image: landingPage.banner2,
    sku: "nhan-dien-thuong-hieu",
  },
  {
    image: landingPage.banner1,
    sku: "truyen-thong-truc-tuyen",
  },
];
export default function Carousel() {
  const router = useRouter();
  return (
    <section className="relative mt-[64px]   md:mt-[80px] ">
      <Swiper loop={true}>
        {slide_img.map((item, i) => {
          return (
            <SwiperSlide
              key={i}
              onClick={() => router.push(`/giai-phap/${item.sku}`)}
            >
              <Image
                className="relative w-full h-[70vh] object-cover"
                src={item.image}
                alt="Testimonial 01"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
