import './ContactMap.css';

const ContactMap = () => {
    return (
        <>
            <section className="contact-map">
                <div className="contact-map-head">
                    <h5>STORE LOCATION MAP</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="map-box">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7541.704967679031!2d72.8216737935791!3d19.070222400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c91286673cd3%3A0x7fa04e6cdba2f800!2sPunjab%20Sind%20Premium%20Dairy!5e0!3m2!1sen!2sin!4v1764932793274!5m2!1sen!2sin" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </section>
        </>
    )
}

export default ContactMap
