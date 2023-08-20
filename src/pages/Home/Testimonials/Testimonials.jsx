import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { data } from "autoprefixer";
import { Rating } from "@smastrom/react-rating";

import '@smastrom/react-rating/style.css'



const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect( () => {
        fetch('reviews.json')
        .then(res => res.json())
        .then(data => setReviews(data))

    }, [])
  return (
    <div className="my-24">
      <SectionTitle
        subHeading="---What Our Clients Say---"
        heading={"Testimonials"}
      ></SectionTitle>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {
            reviews.map(review => <SwiperSlide
            key={review._id}
            >
              
                <div className="flex flex-col items-center mx-24 m-16">
                  <Rating
                  style ={{maxWidth: 180}}
                  value= {review.rating}
                  readOnly
                  />
                <p className="py-8">{review.details}</p>
                <h3 className="text-2xl text-orange-500">{review.name}</h3>
                </div>
            </SwiperSlide>)
        }
      </Swiper>
    </div>
  );
};

export default Testimonials;
