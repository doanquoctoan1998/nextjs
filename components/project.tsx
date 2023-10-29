import React from "react";
import SwiperCore, { EffectCoverflow, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import Image from "next/image";
import { landingPage } from "@/public/images";
import { useRouter } from "next/navigation";
import "./styles.css";
// import required modules
SwiperCore.use([EffectCoverflow, Pagination]);
import "swiper/css/pagination";
// if you want to use array
const slide_img = [
  {
    name: "",
    client: "",
    description: "",
    image1: "",
    image2: "",
    image3: "",
  },
  {
    name: "",
    client: "",
    description: "",
    image1: "",
    image2: "",
    image3: "",
  },
  {
    name: "",
    client: "",
    description: "",
    image1: "",
    image2: "",
    image3: "",
  },
];
export default function Project() {
  const router = useRouter();
  return (
    <section className="relative bg-[#FF7009] rounded-t-[50px]">
      <div
        className="absolute inset-0 bottom-[20%] lg:mt-0 bg-white pointer-events-none rounded-t-[50px]"
        aria-hidden="true"
      ></div>
      {/* <div
        className="absolute inset-0 top-[80%] lg:mt-0 bg-white pointer-events-none rounded-bl-[40%] rounded-br-[60%]"
        aria-hidden="true"
      ></div> */}
      <div className="relative lg:px-20 pt-10 p-2">
        <h1 className="md:text-4xl text-xl">Các Dự Án </h1>
        <h2 className="md:text-5xl text-2xl font-semibold text-[#FF7009]">
          NỔI BẬT
        </h2>
      </div>
      <div className="flex items-center  bg-[#FFFFFF]">
        <Swiper
          className="relative max-w-full !overflow-visible [&>.swiper-pagination-bullets]:!-bottom-10
                    [&>.swiper-pagination-bullets>.swiper-pagination-bullet]:h-[12px]
                    [&>.swiper-pagination-bullets>.swiper-pagination-bullet]:w-[12px]
                    [&>.swiper-pagination-bullets>.swiper-pagination-bullet-active]:bg-[#FFFFFF]
                    "
          modules={[Pagination, Autoplay]}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
        >
          {slide_img.map((img, i) => {
            return (
              <SwiperSlide
                key={i}
                onClick={() => router.push(`/du-an-noi-bat`)}
              >
                <div className="relative xl:px-20 h-full md:h-[600px] pb-5 md:pb-0">
                  <Image
                    className="absolute rounded-3xl w-full h-full"
                    src={landingPage.bgProject}
                    alt="bgProject"
                  />
                  <div className="flex items-center flex-col md:flex-row h-full">
                    <div className="order-2 md:order-none flex-1 px-16">
                      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                        Bộ quà tết 2023
                      </h1>
                      <h2 className="text-lg md:text-xl lg:text-2xl text-[#FF7009]">
                        Client: AB Group{" "}
                      </h2>
                      <h6 className="text-lg md:text-xl lg:text-2xl mb-8 hidden lg:block">
                        Tiếp nhận một dự án thuộc ngành Thẩm mỹ vào thời điểm
                        cận Tết là một thử thách mới mẻ với mỹ DERA Media. Để
                        thổi làn gió mới vào chiến dịch này nói riêng và ngành
                        Thẩm mỹ nói chung, DERA Media và Thu Cúc Beauty đã chọn
                        thực hiện bộ quà tặng tết 2023 cho khách hàng, đối tác
                        của Thu Cúc bao gồm: Lịch để bàn, bao Lì xì, thiệp chúc
                        mừng và ...
                      </h6>
                      <button className="uppercase px-20 py-2 text-white text-lg md:text-xl lgtext-2xl bg-[#FF7009] rounded-full">
                        Xem thêm
                      </button>
                    </div>
                    <div className="order-1 md:order-none flex-1">
                      <div className="text-center relative flex items-center">
                        <Image
                          className="w-full 2xl:mb-20"
                          src={landingPage.ava2}
                          alt="Testimonial 01"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="project-box">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
}
