import React, { useEffect, useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "./styles.css";
import Image from "next/image";
// import SwiperCore, { Pagination, Autoplay } from "swiper";
// import Logo from "./ui/logo";
import { landingPage } from "@/public/images";
// const slide_img = [
//     "https://swiperjs.com/demos/images/nature-1.jpg",
//     "https://swiperjs.com/demos/images/nature-2.jpg",
//     "https://swiperjs.com/demos/images/nature-3.jpg",
//     "https://swiperjs.com/demos/images/nature-4.jpg",
//     "https://swiperjs.com/demos/images/nature-5.jpg",
//     "https://swiperjs.com/demos/images/nature-6.jpg",
//     "https://swiperjs.com/demos/images/nature-7.jpg",
//     "https://swiperjs.com/demos/images/nature-8.jpg",
//     "https://swiperjs.com/demos/images/nature-9.jpg",
// ];
// SwiperCore.use([Autoplay]);
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import "./styles.css";
export default function Brand() {
  const dataBrands = [
    { image: landingPage.brand1 },
    { image: landingPage.brand2 },
    { image: landingPage.brand3 },
    { image: landingPage.brand4 },
    { image: landingPage.brand5 },
    { image: landingPage.brand6 },
    { image: landingPage.brand7 },
  ];
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  };

  const getPerPageValue = () => {
    if (windowSize.width <= 640) {
      return 2;
    } else if (windowSize.width <= 768) {
      return 3;
    } else if (windowSize.width <= 1024) {
      return 4;
    } else if (windowSize.width <= 1536) {
      return 5;
    } else {
      return 6;
    }
  };
  return (
    <section className="relative bg-[#F5F5F5] py-[40px]" data-aos="zoom-y-out">
      <div className="max-w-3xl mx-auto text-center pb-2 md:pb-2 cooperation-brands-title">
        <h2 className="h2 cooperation-brands-text font-medium">
          Hợp Tác Với Nhiều Thương Hiệu
        </h2>
      </div>
      <Splide
        options={{
          type: "loop",
          gap: "10px",
          drag: "free",
          arrows: false,
          pagination: false,
          perPage: getPerPageValue(),
          autoScroll: {
            pauseOnHover: false,
            pauseOnFocus: false,
            rewind: false,
            speed: 1,
          },
        }}
        className="py-5"
        extensions={{ AutoScroll }}
      >
        {dataBrands.map((brand, index) => {
          return (
            <SplideSlide key={index}>
              <div className="w-full h-24 bg-white rounded-lg p-4 flex justify-center content-center items-center">
                <Image
                  className="relative w-full h-full object-contain"
                  src={brand.image}
                  alt="Testimonial 01"
                />
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </section>
  );
}
