import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import { Navigation } from 'swiper/modules';
import { Star } from "lucide-react";
import { useNavigate } from "react-router"
import { Review } from '../../../types/Feedback';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css'

const ImgSlider = ({ feedbackFixture }: { feedbackFixture: Review[] }) => {
    const navigate = useNavigate()

    const redirect = (id: number) => {
      navigate(`/review/${id}`)
    }

    const stars = (rating: number) => {
    return Array.from({ length: rating }, (_, i) => (
      <Star 
        key={i} 
        style={{ color: "gold" }} 
        fill="gold" 
      />
    ))}

    const truncateText = (text: string, maxLength: number) => {
      return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
    }

    return (
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="my-swiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1400: {
            slidesPerView: 3,
          },
        }}
      >
      {feedbackFixture.map((element) => (
        <SwiperSlide key={element.id} className="swiper-slide" onClick={() => redirect(element.id)}>
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
              <p>{truncateText(element.review_text, 100)}</p>
            </div>
          
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default ImgSlider
