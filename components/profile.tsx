import React from "react";
import SwiperCore, { EffectCoverflow, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import Image from "next/image";
import { landingPage } from "@/public/images";
import "./styles.css";
// import required modules
SwiperCore.use([EffectCoverflow, Pagination]);
import "swiper/css/pagination";
// if you want to use array
const profiles = [
  {
    name: "TRẦN LONG NHẬT",
    client: "Co-founder - Designer",
    description:
      "Đam mê với công việc sáng tạo, những công cụ thiết kế đã giúp tôi hoàn toàn thỏa mãn chính mình. Những tác phẩm được khách hàng công nhận, được chú ý và coi đó là đỉnh cao của nghệ thuật và sáng tạo càng tiếp thêm động lực, giúp tôi không ngừng nỗ lực hơn mỗi ngày.",
    image1: landingPage.profile1,
    image2: "",
    image3: "",
  },
  {
    name: "TÂM TRẦN",
    client: "Co-founder - Content Creator",
    description:
      "Hơn 7 năm làm việc trong các môi trường Marketing khác nhau đã giúp cho tôi hiểu ra được nhiều điều. Trong công việc của mình, điều tôi tâm đắc nhất: không ngừng chăm chỉ và trách nhiệm. Với công việc là content creation, đòi hỏi tôi không ngừng học hỏi, sáng tạo để mang lại những giá trị cho chính mình, khách hàng và những người bạn đồng hành cùng tôi.",
    image1: landingPage.profile2,
    image2: "",
    image3: "",
  },
  {
    name: "DẤU TÊN",
    client: "Co-founder - Developer",
    description:
      "Đam mê với ngôn ngữ lập trình, một công thức “by me” được tạo ra khiến tôi hứng khởi hơn trong công việc. Làm cho khách hàng ưng ý, có những trải nghiệm thoải mái chính là mục tiêu của tôi.",
    image1: landingPage.profile3,
    image2: "",
    image3: "",
  },
];
export default function Profile() {
  return (
    <section className="relative bg-[#FF7009] rounded-t-[50px] pb-20">
      <div
        className="absolute inset-0 lg:mt-0 profile-background"
        aria-hidden="true"
      ></div>
      <Swiper
        className="relative 
                [&>.swiper-pagination-bullets>.swiper-pagination-bullet-active]:bg-[#FF7009]
                [&>.swiper-pagination-bullets>.swiper-pagination-bullet]:h-[12px]
                [&>.swiper-pagination-bullets>.swiper-pagination-bullet]:w-[12px]
                "
        modules={[Pagination, Autoplay]}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
      >
        {profiles.map((profile, i) => {
          return (
            <SwiperSlide key={i}>
              <div className="flex flex-col lg:flex-row lg:gap-4 px-8 md:px-10 lg:px-20 py-5 lg:py-15">
                <div className="flex-1">
                  <Image src={landingPage.vector} alt="vector" />
                  <div className="ml-16">
                    <h1 className="lg:text-4xl md:text-3xl text-2xl">
                      Phương Châm
                    </h1>
                    <h2 className="lg:text-5xl md:text-4xl text-3xl font-semibold text-[#FF7009]">
                      LÀM VIỆC
                    </h2>
                    <h6 className="lg:text-2xl md:text-xl text-lg mb-5">
                      {profile.description}
                    </h6>
                    <h6 className="font-bold text-3xl">{profile.name}</h6>
                    <h6 className="text-sm text-gray-600 font-thin">
                      {profile.client}
                    </h6>
                  </div>
                </div>
                <div className="flex flex-1 justify-center">
                  <Image
                    className="relative object-contain h-[70vh] "
                    src={profile.image1}
                    alt="Testimonial 01"
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
