"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Carousel from "@/components/carousel";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
// export const metadata = {
//     title: 'Về chúng tôi - dera.media',
//     description: 'Page description',
// }

import Image from "next/image";
import { landingPage } from "@/public/images";
const slide_img = [
  {
    image: landingPage.banner2,
  },
  {
    image: landingPage.banner1,
  },
  {
    image: landingPage.banner2,
  },
  {
    image: landingPage.banner1,
  },
  {
    image: landingPage.banner2,
  },
];
const brands = [
  {
    image: landingPage.brand1,
  },
  {
    image: landingPage.brand2,
  },
  {
    image: landingPage.brand3,
  },
  {
    image: landingPage.brand4,
  },
  {
    image: landingPage.brand5,
  },
  {
    image: landingPage.brand6,
  },
  {
    image: landingPage.brand7,
  },
  {
    image: landingPage.brand1,
  },
  {
    image: landingPage.brand2,
  },
  {
    image: landingPage.brand3,
  },
  {
    image: landingPage.brand4,
  },
  {
    image: landingPage.brand5,
  },
  {
    image: landingPage.brand6,
  },
  {
    image: landingPage.brand7,
  },
  {
    image: landingPage.brand1,
  },
];
export default function Customer() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white mt-[64px] md:mt-[80px] ">
      <div className="flex flex-col justify-center">
        <h2 className="my-5 text-center text-3xl md:text-4xl lg:text-5xl font-bold text-[#FF7F22] uppercase">
          Nhận xét từ chuyên gia
        </h2>
        <p className="text-center text-black text-2xl p-6">
          DERA Media tự hào được đồng hành cùng các doanh nghiệp tăng tốc trong
          kỷ nguyên số. Những lời khen và công nhận từ khách hàng đã sử dụng
          dịch vụ của chúng tôi là những bằng chứng nhận quý giá và công bằng
          nhất.
        </p>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        // className="mySwiper"
      >
        {slide_img.map((item, i) => {
          return (
            <SwiperSlide key={i} className="mb-12">
              <Image
                className="relative w-full object-contain rounded-2xl"
                src={item.image}
                alt="Testimonial 01"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <article className="bg-[#ffffff] py-8 px-10 rounded-t-[150px] mt-10 -mx-10 md:py-14 md:-mx-14 lg:-mx-20 md:px-24">
        <h2 className="mb-5 text-center text-3xl md:text-4xl lg:text-5xl font-bold text-[#FF7F22] uppercase">
          Các nhãn hàng đã hợp tác cùng
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl mb-7">
          DERA Media chân thành cảm ơn quý khách hàng, quý đối tác đã tin tưởng,
          đồng hành cùng chúng tôi trong suốt hành trình sáng tạo số. Sự thành
          công của quý khách hàng chính là động lực góp phần thúc đẩy DERA Media
          không ngừng phát triển và theo đuổi đam mê sáng tạo.
        </p>
        {/* Items */}
        <div className="max-w-full md:max-w-full mx-auto grid gap-2 grid-cols-4 md:grid-cols-5">
          {brands.map((item, i) => {
            return (
              <div className="flex items-center py-12 justify-center col-span-2 md:col-auto">
                <Image
                  className="relative w-full h-24 object-contain grayscale hover:grayscale-0"
                  src={item.image}
                  alt="Testimonial 01"
                />
              </div>
            );
          })}
        </div>
      </article>
    </section>
  );
}
