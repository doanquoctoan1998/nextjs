import React from "react";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import Image from "next/image";
import { landingPage } from "@/public/images";
// import required modules
SwiperCore.use([EffectCoverflow, Pagination]);
export default function Service() {
  return (
    <section className="relative bg-[#FF7009]">
      <div className="py-8 lg:py-0 lg:pb-20 lg:px-[60px] px-[20px]">
        <div className="flex flex-col justify-center items-center">
          <h1 className="md:text-4xl text-xlfont-medium text-[#222830]">
            Vì Sao Khách Hàng
          </h1>
          <h1 className="md:text-5xl text-xl text-white font-black md:mb-10">
            NÊN CHỌN CHÚNG TÔI
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4">
            <div className="flex flex-col justify-evenly lg:p-5">
              <div className="bg-white p-4 rounded-xl flex flex-col items-center mb-2 h-40">
                <h1 className="text-[#FF7009] font-bold text-xl">TẬN TÂM</h1>
                <h2>
                  Chúng tôi luôn tin tưởng những gì mình tạo ra bởi những gì
                  chúng tôi làm là bằng tất cả đam mê, nhiệt huyết, toàn tâm
                  toàn ý cống hiến hết mình cho sứ mệnh chung.
                </h2>
              </div>
              <div className="bg-white p-4 rounded-xl flex flex-col items-center mb-2 h-40">
                <h1 className="text-[#FF7009] font-bold text-xl">SÁNG TẠO</h1>
                <h2>
                  Với công việc luôn luôn đòi hỏi tính sáng tạo, chúng tôi với
                  tố chất ham học hỏi, tìm tòi cùng sức trẻ, cam kết sẽ tạo ra
                  những giá trị mới mẻ, độc nhất.
                </h2>
              </div>
              <div className="bg-white p-4 rounded-xl flex flex-col items-center mb-2 h-40">
                <h1 className="text-[#FF7009] font-bold text-xl">KHÁC BIỆT</h1>
                <h2>
                  Bằng trí tuệ, tài năng chúng tôi đã tạo ra những phiên bản duy
                  nhất và tốt hơn mình của hôm qua.
                </h2>
              </div>
            </div>
            <Image
              className="relative object-contain lg:h-[80vh] hidden lg:block"
              src={landingPage.phone}
              alt="Testimonial 01"
            />
            <div className=" flex flex-col justify-evenly lg:p-5">
              <div className="bg-white p-4 rounded-xl flex flex-col items-center mb-2 h-40">
                <h1 className="text-[#FF7009] font-bold text-xl">
                  TRÁCH NHIỆM
                </h1>
                <h2>
                  Luôn trong tâm thế chủ động và hoàn thành đúng tiến độ, không
                  trễ hẹn trong nội bộ và khách hàng.
                </h2>
              </div>
              <div className="bg-white p-4 rounded-xl flex flex-col items-center mb-2 h-40">
                <h1 className="text-[#FF7009] font-bold text-xl">
                  VÌ KHÁCH HÀNG
                </h1>
                <h2>
                  Đặt khách hàng vào trung tâm, kiên định đem đến những trải
                  nghiệm tích cực và có giá trị cho khách hàng.
                </h2>
              </div>
              <div className="bg-white p-4 rounded-xl flex flex-col items-center mb-2 h-40">
                <h1 className="text-[#FF7009] font-bold text-xl">CHÂN THÀNH</h1>
                <h2>
                  Không dấu diếm, thành thật với bản thân với khách hàng để mối
                  quan hệ ngày càng bền chặt, thành công.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
