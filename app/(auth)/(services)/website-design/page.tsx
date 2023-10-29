import Image from "next/image";
import { landingPage } from "@/public/images";

export default function WebsiteDesign() {
  return (
    <section className="mt-16 lg:mt-20">
      <Image className="w-full mb-5" src={landingPage.photoConcept} alt="Photo Concept" />
      <p className="text-lg md:text-xl lg:text-2xl px-10 md:px-16 lg:px-20 mb-5">Để tăng uy tín mang đến trải nghiệm tốt cho khách hàng, Website là một kênh truyền tải không thể bỏ qua. 3 giây đầu tiên là điều kiện tiên quyết để níu giữ con trỏ chuột của khách hàng vì vậy tại Dera Media với phương châm “trải nghiệm - sáng tạo và chuyên nghiệp” chúng tôi mang đến dịch vụ: Thiết kế website, Nâng cấp website, Bảo trì sửa lỗi website, Tối ưu website giúp khách hàng có tốc độ trải nghiệm tốt hơn trên Website của bạn.</p>
      <h1 className="uppercase text-3xl md:text-4xl lg:text-5xl text-center">bạn đang cần giải pháp</h1>
    </section>
  )
}