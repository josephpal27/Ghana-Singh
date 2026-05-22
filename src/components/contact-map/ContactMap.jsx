import './ContactMap.css';

const ContactMap = () => {
    return (
        <>
            <section className="contact-map">
                <div className="map-box">
                    <span>MUMBAI</span>
                    <p>Mumbai (Flagship Store) Shop No. 1/6, Shyam Vihar Opp. Citywalk Shoes, Linking Road, Khar (W), +91 98210 79469</p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.9095079478207!2d72.8308630749772!3d19.067715882135165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c90e79b06d6d%3A0xf9d2c3f9524200e5!2sCitywalk!5e0!3m2!1sen!2sin!4v1779279123888!5m2!1sen!2sin" width="100%" height="100%" allowFullScreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="map-box">
                    <span>HYDERABAD</span>
                    <p>Plot No. 270 N. Ground Floor, Road No. 10, Jubilee Hills <br /> +91 95151 10779</p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30452.863736641953!2d78.37080245483268!3d17.430591612595574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb96cc62a87613%3A0xa8317fa22362be49!2sJubilee%20Hills%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1779279258403!5m2!1sen!2sin" width="100%" height="100%" allowFullScreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="map-box">
                    <span>MUMBAI</span>
                    <p>
                        Pernia's Pop-up Studio, Linking Road, Bandra West     
                        CTS No. G-136, Junction of Vallabhbhai Patel Road (Linking Road), and, JK Mehta Rd, Santacruz (West), Mumbai, Maharashtra 400054
                    </p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120712.94585442722!2d72.75098554481322!3d19.00739910355571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9ae33cd9e85%3A0x9d59158f8653a2cf!2sPernia&#39;s%20Pop-up%20Studio%2C%20Linking%20Road%2C%20Bandra%20West!5e0!3m2!1sen!2sin!4v1779435933102!5m2!1sen!2sin" width="100%" height="100%" allowFullScreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </section>
        </>
    )
}

export default ContactMap
