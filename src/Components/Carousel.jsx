import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import img1 from'../assets/images/carousel_1.jpg'
import img2 from'../assets/images/carousel_2.jpg'
import img3 from'../assets/images/carousel_3.jpg'
import img4 from'../assets/images/carousel_4.jpg'
import img5 from'../assets/images/carousel_5.jpg'
import video from'../assets/images/carousel_vid.mp4'
const Carousel = () => {
  return (
    <div className='h-[600px] bg-white'>
    <Swiper 
    loop={true}
    spaceBetween={0}
    navigation={true}
    modules={[Navigation,Autoplay]}
    autoplay={{
      delay:4500
    }}
    className='h-[50%]'
  >
    <SwiperSlide><img src={img1}/></SwiperSlide>
    <SwiperSlide><img src={img2}/></SwiperSlide>
    <SwiperSlide><img src={img3}/></SwiperSlide>
    <SwiperSlide>
      <video src={video} controls muted className='bg-black'>
      </video>
      </SwiperSlide>
    <SwiperSlide><img src={img4}/></SwiperSlide>
    <SwiperSlide><img src={img5}/></SwiperSlide>
    
  </Swiper>
  <div className="h-[50%] bg-gradient-to-b from-stone-900"></div>
  </div>
  )
}

export default Carousel