import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
// Images for banner
import cover_image_1 from "../../../assets/images/banner_image_1.jpg";
import cover_image_2 from "../../../assets/images/banner_image_2.jpg";
import cover_image_3 from "../../../assets/images/banner_image_3.jpg";
import cover_image_4 from "../../../assets/images/banner_image_4.jpg";
import cover_image_5 from "../../../assets/images/banner_image_5.jpg";

const coverImages = [
  cover_image_1,
  cover_image_2,
  cover_image_3,
  cover_image_4,
  cover_image_5,
];

import Container from "../../../components/Container";

const BannerSection = () => {
  return (
    <Container>
      <div className="text-3xl font-medium">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          {/* Iterate through all images */}
          {coverImages.map((image) => (
            <SwiperSlide key={image}>
              <img src={image} alt={image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};

export default BannerSection;