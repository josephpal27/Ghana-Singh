import './AboutFounder.css';
import founderImg from '../../assets/images/founder.avif';

const AboutFounder = () => {
    return (
        <>
            <section className="about-founder">
                <div className="about-founder-head">
                    <h2>ABOUT THE FOUNDER</h2>
                    <p>He is a person with an exceptionally creative point of view, always seeing possibilities where others see limits. Known for his warm and friendly nature, he makes people feel instantly comfortable and valued.</p>
                </div>
                <div className="about-founder-content">
                    <div className="content-box">
                        <span className="left-quote">“</span>
                        <p>He strongly believes in the idea that “once you come to GhanaSingh,</p>
                        <span className="right-quote">”</span>
                    </div>
                    <div className="content-box">
                        <img src={founderImg} alt="Founder" loading="lazy" />
                    </div>
                    <div className="content-box">
                        <span className="left-quote">“</span>
                        <p>you won't go anywhere else,” reflecting his confidence, loyalty, and deep dedication to what he stands for.</p>
                        <span className="right-quote">”</span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutFounder
