import '../css/Home.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import bannerSlide1 from '../assets/images/banner-slide-1.png';

const Home = () => {
    return (
        <>
            {/* Banner Slider */}
            <section className="banner">
                <Swiper
                    modules={[Autoplay, EffectFade]}
                    effect="fade"
                    fadeEffect={{ crossFade: true }}
                    slidesPerView={1}
                    centeredSlides={true}
                    loop={true}
                    grabCursor={false}
                    spaceBetween={0}
                    speed={1000}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                >

                    <SwiperSlide>
                        <img src={bannerSlide1} alt="Banner Slide 1" loading="eager" />
                        <div className="slide-content">
                            <span>Lorem ipsum</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={bannerSlide1} alt="Banner Slide 2" loading="lazy" />
                        <div className="slide-content">
                            <span>Lorem ipsum</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={bannerSlide1} alt="Banner Slide 3" loading="lazy" />
                        <div className="slide-content">
                            <span>Lorem ipsum</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </section>
        </>
    )
}

export default Home
