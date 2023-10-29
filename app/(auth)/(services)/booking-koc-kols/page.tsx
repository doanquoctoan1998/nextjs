import Image from "next/image";
import { landingPage } from "@/public/images";

export default function BookingKocKols() {
  return (
    <section className="mt-16 lg:mt-20">
      <Image className="w-full mb-5" src={landingPage.contentCreative} alt="Photo Concept" />
      <p className="text-lg md:text-xl lg:text-2xl px-10 md:px-16 lg:px-20 mb-5">Sử dụng KOL, KOC những người có sức ảnh hưởng, được đông đảo cộng đồng theo dõi  trong các chiến dịch truyền thông thương hiệu càng làm tăng mức độ nhận diện và tăng doanh số. Với mối quan hệ sâu rộng chuyên nghiệp, Dera Media chính là nơi kết nối giữa người tìm kiếm và người được tìm kiếm. Liên hệ nhanh với Kols, Koc hãy tìm Dera Media.</p>
      <h1 className="uppercase text-3xl md:text-4xl lg:text-5xl text-center">bạn đang cần giải pháp</h1>
    </section>
  )
}