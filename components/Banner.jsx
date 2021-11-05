import styles from "../styles/components/Banner.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper";
import "swiper/css/bundle";
import Image from "next/image";
import hero from "../public/Images/hero.png";
import bannerO from "../public/Images/banner1.jpg";
import bannerT from "../public/Images/banner2.jpg";
import bannerTH from "../public/Images/banner3.jpg";
import bannerF from "../public/Images/banner4.jpg";
const Banner = () => {
  return (
    <div className={styles.Banner}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 8000 }}
        loop={true}
        lazy={true}
      >
        <SwiperSlide>
          <Image
            src={hero}
            className={styles.bannerImage}
            alt="Vercel Logo"
            width={1500}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={bannerO}
            className={styles.bannerImage}
            alt="Vercel Logo"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={bannerT}
            className={styles.bannerImage}
            alt="Vercel Logo"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={bannerTH}
            className={styles.bannerImage}
            alt="Vercel Logo"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={bannerF}
            className={styles.bannerImage}
            alt="Vercel Logo"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
const Bannerr = () => {
  return <div></div>;
};
