import { Swiper, SwiperSlide } from "swiper/react";
import img from '../../../img/1674748227261 (2).jpg'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import { Autoplay, Pagination, Navigation } from "swiper";

export const Sliderrev = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className=" flex justify-center items-center">
                    <div className=" flex justify-center items-center h-96 lg:w-[1000px]">
                        <div>
                            <img className=" w-12 h-12 rounded-full" src={img} alt="" />
                        </div>
                        <div className=" lg:w-[800px]">
                            <h1 className=" font-extrabold">Iftakhar uddin</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ipsum libero nam, deleniti autem, explicabo nihil sunt molestiae optio minima excepturi illo suscipit consectetur minus cum dolore est error perferendis?</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=" flex justify-center items-center">
                    <div className=" flex justify-center items-center h-96 lg:w-[1000px]">
                        <div>
                            <img className=" w-12 h-12 rounded-full" src={img} alt="" />
                        </div>
                        <div className=" lg:w-[800px]">
                            <h1 className=" font-extrabold">Iftakhar uddin</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ipsum libero nam, deleniti autem, explicabo nihil sunt molestiae optio minima excepturi illo suscipit consectetur minus cum dolore est error perferendis?</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=" flex justify-center items-center">
                    <div className=" flex justify-center items-center h-96 lg:w-[1000px]">
                        <div>
                            <img className=" w-12 h-12 rounded-full" src={img} alt="" />
                        </div>
                        <div className=" lg:w-[800px]">
                            <h1 className=" font-extrabold">Iftakhar uddin</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ipsum libero nam, deleniti autem, explicabo nihil sunt molestiae optio minima excepturi illo suscipit consectetur minus cum dolore est error perferendis?</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}