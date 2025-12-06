import './AboutBrand.css';
import brandImg from '../../assets/images/about-brand.avif';

const AboutBrand = () => {
    return (
        <>
            <section className="about-brand">
                <h1 data-aos="fade-up">ABOUT THE BRAND</h1>
                <div className="about-brand-container">
                    <div className="about-brand-image">
                        <img src={brandImg} alt="Brand Image" loading="lazy" />
                        <div className="layer"></div>
                    </div>
                    <div className="about-brand-content">
                        <p data-aos="fade">Founded in 1905, GhanaSingh be true jewels is a prestigious jewellery brand with a legacy of 120 years in fine craftsmanship. Our heritage reflects a deep commitment to authenticity, quality, and timeless design.</p>
                        <p data-aos="fade">We offer a wide range of collections, including luxurious bridal jewellery crafted for unforgettable moments, and finely detailed 22KT gold pieces that represent purity and elegance. In addition, we present a thoughtful selection of affordable gift items, making it easy for customers to find meaningful jewellery within any budget.</p>
                        <p data-aos="fade">With a blend of tradition and innovation, GhanaSingh Be True Jewels continues to be a trusted name for generations seeking beauty, value, and authenticity.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutBrand
