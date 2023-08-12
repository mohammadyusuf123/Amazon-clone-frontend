import Carousel from "./Carousel";
import HomePageCard from "./HomePageCard";
import img1 from '../assets/images/home_grid_1.jpg'
import img2 from '../assets/images/home_grid_2.jpg'
import img3 from '../assets/images/home_grid_3.jpg'
import img4 from '../assets/images/home_grid_4.jpg'
import img5 from '../assets/images/home_grid_5.jpg'
import img6 from '../assets/images/home_grid_6.jpg'
import img7 from '../assets/images/home_grid_7.jpg'
import img8 from '../assets/images/home_grid_8.jpg'
import img9 from '../assets//images/banner_image_2.jpg'
import img10 from '../assets//images/banner_image.jpg'
import CarouselCategory from "./carouselCategory";
import CarouselProduct from "./CarouselProduct";



function Home() {
  return (
    <div className="bg-amazonclone-background">
    <div className="max-w-[1500px] min-w-[1000px]">
     <Carousel/>
     <div className="grid grid-cols-3   xl:grid-cols-4  -mt-80">
         <HomePageCard 
         title={"We have a surprise"}
         img={img1}
        link={"See terms and conditions"}/>
         <HomePageCard 
         title={"Watch the Rings of Power"}
         img={img2}
        link={"Start streaming now"}/>
         <HomePageCard 
         title={"Unlimited streaming"}
         img={img3}
        link={"Find out more"}/>
         <HomePageCard 
         title={"More titles to explore "}
         img={img4}
        link={"Browser Kindle Unlimited"}/>
         <HomePageCard 
         title={"Shop pet supplies"}
         img={img5}
        link={"See More"}/>
         <HomePageCard 
         title={"Spring sale"}
         img={img6}
        link={" See the deals"}/>
         <HomePageCard 
         title={"Echo Buds "}
         img={img7}
        link={"See More"}/>
         <HomePageCard 
         title={"Family Plan : 3 mounts free "}
         img={img8}
        link={"Learn More"}/>
        <div className=" m-3 mt-8">
          <img className="xl:hidden" src={img9}></img>
        </div>
     </div>
     <CarouselProduct/>
     <CarouselCategory/>
     <div className="h-[200px]">
         <img className="w-[100%] m-auto" src={img10}/>
     </div>
    </div>
   </div>
  )
}

export default Home
