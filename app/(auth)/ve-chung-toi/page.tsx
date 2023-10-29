export const metadata = {
    title: 'Về chúng tôi - dera.media',
    description: 'Page description',
}

import Image from 'next/image'
import { landingPage } from "@/public/images"
export default function Me() {
    return (
        <section className="bg-gradient-to-b from-gray-100 to-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                    {/* Page header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <h1 className="h1 mb-4">CHÚNG TÔI LÀ</h1>
                        <h1>DERA.MEDIA</h1>
                        <p className="text-xl text-gray-600">
                            Sinh ra cùng công nghệ và những cơn bão thông tin, Dera Media chọn sứ mệnh chắp cánh, nối dài hưng thịnh của thương hiệu bằng sức mạnh trí tuệ, sự sáng tạo độc nhất vô nhị tiếp nối thế hệ đi trước của thế hệ mới.
                        </p>
                        <p className="text-xl text-gray-600">
                            Làm việc với Dera Media, khách hàng luôn cảm nhận được nguồn năng lượng mới, trẻ trung, nhạy bén và cởi mở. Hơn hết, Dera Media sẽ làm thỏa mãn ý muốn thay đổi, nâng tầm uy tín, giá trị thương hiệu của doanh nghiệp trong ánh mắt khách hàng.
                        </p>
                    </div>
                </div>
            </div>
            <Image className="relative w-full object-contain" src={landingPage.bg1} alt="Testimonial 01" />
        </section>
    )
}
