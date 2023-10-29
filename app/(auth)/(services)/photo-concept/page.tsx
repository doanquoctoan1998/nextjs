import Image from "next/image";
import { landingPage } from "@/public/images";

export default function PhotoConcept() {
  return (
    <section className="mt-16 lg:mt-20">
      <Image className="w-full mb-5" src={landingPage.photoConcept} alt="Photo Concept" />
      <p className="text-lg md:text-xl lg:text-2xl px-10 md:px-16 lg:px-20 mb-5">Mỗi ngày người dùng phải tiếp nhận hàng trăm ngàn hình ảnh quảng cáo. Vậy, câu hỏi đặt ra là làm thế nào để thương hiệu của bạn “nổi bật nhất giữa đám đông”. Điều bạn đang suy nghĩ là điều mà chúng tôi luôn trăn trở. Dera Media với đội ngũ Designer trẻ trung, không ngừng sáng tạo, nhiệt huyết, luôn cập nhật xu hướng thiết kế mới, ấn tượng của thế giới, cùng phong cách làm việc chuyên nghiệp, chắc chắn sẽ tạo nên bản sắc độc nhất cho thương hiệu của bạn.</p>
      <h1 className="uppercase text-3xl md:text-4xl lg:text-5xl text-center">bạn đang cần giải pháp</h1>
    </section>
  )
}