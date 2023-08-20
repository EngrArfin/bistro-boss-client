import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import slide6 from "../../../assets/home/slide6.jpg";
import slide7 from "../../../assets/home/slide7.jpg";
import slide8 from "../../../assets/home/slide8.jpg";
import slide9 from "../../../assets/home/slide9.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
      subHeading={"From 11:00am to 10:00pm"}
      heading={"ORDER ONLINE"}
      ></SectionTitle>


      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />{" "}
          <h3 className="text-4xt uppercase text-center -mt-16">Salad</h3>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h3 className="text-4xt uppercase text-center -mt-16">Pizza</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h3 className="text-4xt uppercase text-center -mt-16">Supe</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h3 className="text-4xt uppercase text-center -mt-16">Check</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h3 className="text-4xt uppercase text-center -mt-16">Vegetable</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide6} alt="" />
          <h3 className="text-4xt uppercase text-center -mt-16">Pizza</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide7} alt="" />
          <h3 className="text-4xt uppercase text-center -mt-16">Supe</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide8} alt="" />
          <h3 className="text-4xt uppercase text-center -mt-16">Salad</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide9} alt="" />
          <h3 className="text-4xt uppercase text-center -mt-16">Vegetable</h3>
        </SwiperSlide>
      </Swiper>
    </section>
    
  );
};

export default Category;