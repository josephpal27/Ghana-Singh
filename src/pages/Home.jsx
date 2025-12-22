import '../css/Home.css';
import { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";

import bannerSlide1 from '/images/banners/banner-slide-1.avif';
import bannerSlide2 from '/images/banners/banner-slide-2.avif';
import bannerSlide3 from '/images/banners/banner-slide-3.avif';

import AboutBrand from '../components/about-brand/AboutBrand';
import AboutFounder from '../components/about-founder/AboutFounder';
import Collections from '../components/collections/Collections';
import BestSellers from '../components/best-sellers/BestSellers';
import ContactMap from '../components/contact-map/ContactMap';

const Home = () => {

    const [trigger, setTrigger] = useState(0);

    // Motion animations
    const fadeUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
    };

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1, delay: 0.2 } }
    };

    const bannerSliderData = [
        {
            id: 1,
            img: bannerSlide1,
            title: "Lorem",
            desc: "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua.",
        },
        {
            id: 2,
            img: bannerSlide2,
            title: "Lorem",
            desc: "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua.",
        },
        {
            id: 3,
            img: bannerSlide3,
            title: "Lorem",
            desc: "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua.",
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
                    onSlideChange={() => setTrigger(prev => prev + 1)} // re-trigger animation
                >

                    {
                        bannerSliderData.map((item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <img src={item.img} alt={`Banner Slide ${item.id}`} loading="eager" />

                                    <div className="slide-content">
                                        <motion.span
                                            key={trigger + "-title"}   // Force re-animation every slide
                                            variants={fadeUp}
                                            initial="hidden"
                                            animate="visible"
                                        >
                                            {item.title}
                                        </motion.span>

                                        <motion.p
                                            key={trigger + "-desc"}
                                            variants={fadeIn}
                                            initial="hidden"
                                            animate="visible"
                                        >
                                            {item.desc}
                                        </motion.p>
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
