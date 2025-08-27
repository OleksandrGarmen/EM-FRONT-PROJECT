import './style.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import { Pagination } from 'swiper/modules';
import { Star } from "lucide-react";
import { color } from 'motion';

interface Feedback {
  avatar_url: string;
  full_name: string;
  rating: number;
  review_text: string;
}

const ImgSlider = ({ feedbackFixture }: { feedbackFixture: Feedback[] }) => {
    const stars = (rating: number) => {
    return Array.from({ length: rating }, (_, i) => (
      <Star 
        key={i} 
        style={{ color: "gold" }} 
        fill="gold" 
      />
    ))
  }

    return (
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
            clickable: true,
        }}
        modules={[Pagination]}
        className="my-swiper"
        >
      {feedbackFixture.map((element, index) => (
        <SwiperSlide key={index} className="swiper-slide">
            <header className='sllider-header'>
                <div className='sllider-avatar-container'>
                    <img src={element.avatar_url} alt={element.full_name} className='sllider-avatar'/>
                </div>
                <div>
                    <div className='slider-user'>{element.full_name}</div>
                    <div className='slider-rating'>{stars(element.rating)}</div>
                </div>
            </header>
            <div className='slider-text'>
              <p>{element.review_text}</p>
            </div>
          
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default ImgSlider
