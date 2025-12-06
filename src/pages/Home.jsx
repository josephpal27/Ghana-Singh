import '../css/Home.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import bannerSlide1 from '/images/banners/banner-slide-1.avif';
import bannerSlide2 from '/images/banners/banner-slide-2.avif';
import bannerSlide3 from '/images/banners/banner-slide-3.avif';
import AboutBrand from '../components/about-brand/AboutBrand';
import AboutFounder from '../components/about-founder/AboutFounder';
import Collections from '../components/collections/Collections';
import BestSellers from '../components/best-sellers/BestSellers';
import ContactMap from '../components/contact-map/ContactMap';

const Home = () => {

    const bannerSliderData = [
        {
            id: 1,
            img: bannerSlide1,
            title: "Lorem ipsum",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            id: 2,
            img: bannerSlide2,
            title: "Lorem ipsum",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            id: 3,
            img: bannerSlide3,
            title: "Lorem ipsum",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
    ]

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

                    {
                        bannerSliderData.map((item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <img src={item.img} alt={`Banner Slide ${item.id}`} loading="eager" />
                                    <div className="slide-content">
                                        <span>{item.title}</span>
                                        <p>{item.desc}</p>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }

                </Swiper>

                {/* About The Brand */}
                <AboutBrand />

                {/* About The Founder */}
                <AboutFounder />

                {/* Featured Collections */}
                <Collections />

                {/* Best Sellers */}
                <BestSellers />

                {/* Contact Map */}
                <ContactMap />

            </section>
        </>
    )
}

export default Home
