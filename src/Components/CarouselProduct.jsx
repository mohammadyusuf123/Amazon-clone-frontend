/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation,  } from 'swiper/modules';
import img0 from'../assets/images/product_0_small.jpg'
import img1 from'../assets/images/product_1_small.jpg'
import img2 from'../assets/images/product_3_small.jpg'
import img3 from'../assets/images/product_4_small.jpg'
import img4 from'../assets/images/product_5_small.jpg'
import img5 from'../assets/images/product_6_small.jpg'
import img6 from'../assets/images/product_7_small.jpg'
import img7 from'../assets/images/product_8_small.jpg'
import img8 from'../assets/images/product_9_small.jpg'
import { Link } from 'react-router-dom';


const CarouselProduct = () => {
  const imagesList = [
    {
      id: 0,
      src: img0,
      alt: "Image 0",
    },
    {
      id: 1,
      src: img1,
      alt: "Image 1",
    },
    {
      id: 2,
      src: img2,
      alt: "Image 2",
    },
    {
      id: 3,
      src: img3,
      alt: "Image 3",
    },
    {
      id: 4,
      src: img4,
      alt: "Image 4",
    },
    {
      id: 5,
      src: img5,
      alt: "Image 5",
    },
    {
      id: 6,
      src: img6,
      alt: "Image 6",
    },
    {
      id: 7,
      src: img7,
      alt: "Image 7",
    },
    {
      id: 8,
      src: img8,
      alt: "Image 8",
    },
  ];
  return (
    <div className='bg-white m-3' >
    <div className="text-2xl font-semibold p-5">Best Seller</div>
<Swiper
slidesPerView={7}
    loop={true}
    spaceBetween={10}
    navigation={true}
    modules={[Navigation]}
    autoplay={{
      delay:4500
    }}
  >
    
    {imagesList.map((image) => (
       <SwiperSlide> <Link to={`/product/${image.id}`}>
        <img key={image.id} src={image.src} alt={image.alt} />
       </Link></SwiperSlide>
      ))}
        

  </Swiper>
    </div>
  )
}

export default CarouselProduct