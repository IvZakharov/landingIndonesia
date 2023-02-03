import styles from "./Partners.module.scss";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const brandsImages = [
  "/images/brands/1.png",
  "/images/brands/2.png",
  "/images/brands/3.png",
  "/images/brands/4.png",
  "/images/brands/5.png",
];

const Partners = () => {
  return (
    <section>
      <div className={"container relative"}>
        <h2 className={"sectionTitle text-center mb-10 md:mb-16 xl:mb-20"}>
          Наши партнеры
        </h2>

        <div className={"md:hidden"}>
          <Swiper
            pagination={true}
            modules={[Pagination]}
            slidesPerView={1}
            spaceBetween={20}
            className="partnersSwiper"
            breakpoints={{
              576: {
                slidesPerView: 2,
              },
            }}
          >
            {brandsImages.map((imageUrl, idx) => (
              <SwiperSlide key={idx}>
                <div className={styles.item}>
                  <div className={styles.image}>
                    <Image
                      alt={"Partner image"}
                      src={imageUrl}
                      quality={100}
                      width={170}
                      height={90}
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div
          className={
            "hidden md:flex flex-wrap justify-center items-center md:gap-2 xl:gap-10"
          }
        >
          {brandsImages.map((imageUrl, idx) => (
            <div key={idx} className={styles.item}>
              <div className={styles.image}>
                <Image
                  alt={"Partner image"}
                  src={imageUrl}
                  quality={100}
                  width={170}
                  height={90}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
