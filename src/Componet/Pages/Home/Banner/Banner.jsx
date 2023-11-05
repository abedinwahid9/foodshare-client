// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";

const Banner = () => {
  return (
    <div className="drop-shadow-2xl">
      <Swiper
        style={{ height: "450px" }}
        navigation={false}
        autoplay={{ delay: 3000 }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide
          className="bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/GQMxDTd/1-fe-MTb-NGk-DO37-R9c1k-LHMTA.webp)",
          }}
        >
          <div className="w-full  h-full flex items-center flex-col gap-3 justify-center bg-[#0000005e]">
            <h2 className="md:text-5xl text-2xl font-extrabold text-center text-secondColor tracking-wide">
              Harvesting Goodwill:
            </h2>
            <h2 className="md:text-5xl text-2xl font-extrabold text-center tracking-wide text-secondColor">
              The Beauty of Food Sharing
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/gRq0dbM/pngtree-green-organic-food-ecology-farm-poster-background-picture-image-1032581.png)",
          }}
        >
          <div className="w-full  h-full flex items-center flex-col gap-3 justify-center bg-[#0000005e]">
            <h2 className="md:text-5xl text-2xl font-extrabold text-center text-secondColor tracking-wide">
              Neighbors Helping Neighbors:
            </h2>
            <h2 className="md:text-5xl text-2xl font-extrabold text-center tracking-wide text-secondColor">
              The Essence of Food Sharing
            </h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
