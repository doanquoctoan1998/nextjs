"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Logo from "./logo";
import Dropdown from "@/components/utils/dropdown";
import MobileMenu from "./mobile-menu";

export default function Header() {
  const [top, setTop] = useState<boolean>(true);

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`bg-[#FF7009] fixed w-full z-30 transition duration-300 ease-in-out ${
        !top ? "bg-[#FF7009] backdrop-blur-sm shadow-lg" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li className="">
                <Link
                  href="/ve-chung-toi"
                  className="font-medium text-white hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                  aria-current="page"
                >
                  Về chúng tôi
                </Link>
              </li>
              <li>
                <Dropdown title="Giải pháp">
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-400"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <Link
                        href="/giai-phap/nhan-dien-thuong-hieu"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#FF7009] text-[#414141] dark:hover:text-white"
                      >
                        Nhận diện thuơng hiệu
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/giai-phap/truyen-thong-truc-tuyen"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#FF7009] text-[#414141] dark:hover:text-white"
                      >
                        Truyền thông trực tuyến
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/giai-phap/tiep-thi-hieu-suat"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#FF7009] text-[#414141] dark:hover:text-white"
                      >
                        Tiếp thị hiệu suất
                      </Link>
                    </li>
                  </ul>
                </Dropdown>
              </li>
              <li>
                <Link
                  href="/khach-hang"
                  className="font-medium text-white hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Khách hàng
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.facebook.com/Dera.media.vn"
                  className="font-medium text-white hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Liên hệ
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
