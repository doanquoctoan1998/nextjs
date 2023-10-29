"use client";
import { useEffect, useState } from "react";
import { landingPage } from "@/public/images";
import Image from "next/image";
export default function Branch({ params }: { params: { slug: string } }) {
  const [isShow, setIsShow] = useState<boolean>(false);
  return (
    <section className="px-10 mt-16 md:px-14 lg:px-20 md:mt-20">
      <article className="mb-5">
        <div className="flex items-center justify-center mb-5 -mx-10 md:-mx-20">
          <Image className="w-full" src={landingPage.banner2} alt="banner3" />
        </div>
        <p className="text-lg md:text-xl lg:text-2xl">
          Mỗi ngày người dùng phải tiếp nhận hàng trăm ngàn hình ảnh quảng cáo.
          Vậy, câu hỏi đặt ra là làm thế nào để thương hiệu của bạn “nổi bật
          nhất giữa đám đông”. Điều bạn đang suy nghĩ là điều mà chúng tôi luôn
          trăn trở. Dera Media với đội ngũ Designer trẻ trung, không ngừng sáng
          tạo, nhiệt huyết, luôn cập nhật xu hướng thiết kế mới, ấn tượng của
          thế giới, cùng phong cách làm việc chuyên nghiệp, chắc chắn sẽ tạo nên
          bản sắc độc nhất cho thương hiệu của bạn.
        </p>
      </article>
      <article>
        <h1 className="mb-8 text-3xl md:text-4xl lg:text-5xl text-center uppercase">
          bạn đang cần giải pháp
        </h1>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 pb-5">
          <Image
            onClick={() => setIsShow(true)}
            className="w-full rounded-2xl"
            src={landingPage.noBg}
            alt="retable86"
          />
          <Image
            onClick={() => setIsShow(true)}
            className="w-full rounded-2xl"
            src={landingPage.noBg}
            alt="retable86"
          />
          <Image
            onClick={() => setIsShow(true)}
            className="w-full rounded-2xl"
            src={landingPage.noBg}
            alt="retable86"
          />
          <Image
            onClick={() => setIsShow(true)}
            className="w-full rounded-2xl"
            src={landingPage.noBg}
            alt="retable86"
          />
        </div>
      </article>

      {/* popup */}
      {isShow && (
        <article className="fixed bg-[#292727BF] top-0 left-0 right-0 bottom-0 z-10">
          <article className="w-[90%] h-[80%]  md:w-[677px] lg:w-[877px] fixed text-white -translate-x-1/2 px-10 md:px-14 lg:px-14 pt-10 pb-16 md:pb-20 lg:pb-40 translate-y-[calc(-50%+40px)] top-1/2 left-1/2 bg-[#FF7F22] rounded-3xl">
            <h1 className="mb-2 text-base md:text-lg lg:text-xl">
              DERA Media rất hân hạnh nhận được sự quan tâm từ Quý khách hàng.
            </h1>
            <div className="flex">
              <div className="flex flex-col lg:w-1/2">
                <p className="mb-2">
                  Quý khách vui lòng để lại thông tin, bộ phận khách hàng sẽ
                  liên hệ ngay sau khi nhận thông tin
                </p>
                <input
                  className="mb-1 pl-0 bg-transparent border-t-0 border-r-0 border-l-0 border-white placeholder:text-white focus:shadow-none focus:ring-0 focus:border-white"
                  type="text"
                  placeholder="Họ tên"
                />
                <input
                  className="mb-1 pl-0 bg-transparent border-t-0 border-r-0 border-l-0 border-white placeholder:text-white focus:shadow-none focus:ring-0 focus:border-white"
                  type="text"
                  placeholder="Điện thoại"
                />
                <input
                  className="mb-1 pl-0 bg-transparent border-t-0 border-r-0 border-l-0 border-white placeholder:text-white focus:shadow-none focus:ring-0 focus:border-white"
                  type="text"
                  placeholder="Email"
                />
                <input
                  className="mb-1 pl-0 bg-transparent border-t-0 border-r-0 border-l-0 border-white placeholder:text-white focus:shadow-none focus:ring-0 focus:border-white"
                  type="text"
                  placeholder="Tên thương hiệu/Công ty"
                />
                <input
                  className="mb-1 pl-0 bg-transparent border-t-0 border-r-0 border-l-0 border-white placeholder:text-white focus:shadow-none focus:ring-0 focus:border-white"
                  type="text"
                  placeholder="Dịch vụ"
                />
                <input
                  className="mb-4 pl-0 bg-transparent border-t-0 border-r-0 border-l-0 border-white placeholder:text-white focus:shadow-none focus:ring-0 focus:border-white"
                  type="text"
                  placeholder="Budget"
                />
                <input className="p-1 rounded-sm mb-9 text-black focus:outline-0" />
                <h2 className="mb-2">Lưu ý thêm cho DERA Media</h2>
                <textarea
                  className="bg-transparent border-white rounded-md focus:ring-0 focus:border-white resize-none"
                  rows={3}
                ></textarea>
                <button className="mt-3 bg-[#222830] uppercase py-1 rounded-md max-w-[130px]">
                  Gửi
                </button>
              </div>
            </div>
            <Image
              className="hidden absolute w-[62%] right-4 bottom-4 lg:block"
              src={landingPage.handWithPhone}
              alt="Hand With Phone"
            />
            <button
              className="bg-black w-[40px] h-[40px] rounded-full text-[#FF7F22] absolute top-8 right-8"
              onClick={() => setIsShow(false)}
            >
              x
            </button>
          </article>
        </article>
      )}
    </section>
  );
}
