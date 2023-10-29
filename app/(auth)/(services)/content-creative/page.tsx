import Image from "next/image";
import { landingPage } from "@/public/images";

export default function ContentCreative() {
  return (
    <section className="mt-16 lg:mt-20">
      <Image className="w-full mb-5" src={landingPage.contentCreative} alt="Photo Concept" />
      <p className="text-lg md:text-xl lg:text-2xl px-10 md:px-16 lg:px-20 mb-5">Sáng tạo là công việc không ngừng nghỉ và những gì nguyên bản trường tồn với thời gian là nền tảng của mọi sự sáng tạo.
        Cập nhật nhanh chóng xu thế của thế giới, Dera Media giới thiệu đến doanh nghiệp dịch vụ Content creation cho đa nền tảng như Website, các kênh social media . Dera Media đã thực sự thành công khi đem lại làn gió mới có sức sống cho Website, các kênh social media . . .với hình ảnh, nội dung mới mẻ, hấp dẫn, giữ chân người đọc từ đọc thúc đẩy khách hàng active với thương hiệu.</p>
      <h1 className="uppercase text-3xl md:text-4xl lg:text-5xl text-center">bạn đang cần giải pháp</h1>
    </section>
  )
}