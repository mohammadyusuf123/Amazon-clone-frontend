
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation,  } from 'swiper/modules';
import img1 from'../assets/images/category_0.jpg'
import img2 from'../assets/images/category_1.jpg'
import img3 from'../assets/images/category_2.jpg'
import img4 from'../assets/images/category_3.jpg'
import img5 from'../assets/images/category_4.jpg'
import img6 from'../assets/images/category_5.jpg'
import { createSearchParams, useNavigate } from 'react-router-dom';

const CarouselCategory = () => {
  const navigate =useNavigate()

  const searchCategory = (category) => { 
    navigate({
pathname:"search",
search:`${createSearchParams({
  category:`${category}`,
  search:``
})}`
    })
   
  }
  return (
  <div className='bg-white m-3' >
    <div className="text-2xl font-semibold p-5">Shop By Category</div>
<Swiper
slidesPerView={5}
    loop={true}
    spaceBetween={10}
    navigation={true}
    modules={[Navigation]}
    autoplay={{
      delay:4500
    }}
  >
    <SwiperSlide className='cursor-pointer' onClick={()=>searchCategory("Deals")}><img src={img1}/></SwiperSlide>
    <SwiperSlide  className='cursor-pointer' onClick={()=>searchCategory("Amazon")} ><img src={img2}/></SwiperSlide>
    <SwiperSlide  className='cursor-pointer' onClick={()=>searchCategory("Fashion")}><img src={img3}/></SwiperSlide>
    <SwiperSlide  className='cursor-pointer' onClick={()=>searchCategory("Computers")}><img src={img4}/></SwiperSlide>
    <SwiperSlide  className='cursor-pointer' onClick={()=>searchCategory("Home")}><img src={img5}/></SwiperSlide>
    <SwiperSlide className='cursor-pointer'  onClick={()=>searchCategory("Mobiles")}><img src={img6}/></SwiperSlide>
    
  </Swiper>
   
    </div>
  )
}

export default CarouselCategory