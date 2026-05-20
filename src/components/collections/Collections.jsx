import './Collections.css';

const Collections = () => {
  return (
    <>
      <section className="collections">
        <div className="collections-head">
            <h3 data-aos="fade-up">DESTINATION WEDDING HEIRLOOMS</h3>
            <p data-aos="fade">Adorning timeless celebration across generations. A luxurious curation of heirloom-worthy bridal jewels rooted in timeless tradition created for the modern bride.</p>
        </div>
        <div className="collection-grid">
            {/* Left */}
            <div className="collection-column">
                <div className="box text-box">
                    <span className="left-quote">“</span>
                    <p>Minimal Layers and standout accents for a sunlit celebration.</p>
                    <span className="right-quote">”</span>
                </div>
                <div className="box">
                    <img src="/images/collections/1.avif" alt="Collection 1" loading="lazy" />
                </div>
                <div className="box">
                    <img src="/images/collections/2.avif" alt="Collection 2" loading="lazy" />
                </div>
            </div>
            {/* Right */}
            <div className="collection-column">
                <div className="box">
                    <img src="/images/collections/3.avif" alt="Collection 3" loading="lazy" />
                </div>
                <div className="box">
                    <img src="/images/collections/4.avif" alt="Collection 4" loading="lazy" />
                </div>
                <div className="box text-box">
                    <span className="left-quote">“</span>
                    <p>For the pheras, choose heirloom layers that hold weight, details and meaning.</p>
                    <span className="right-quote">”</span>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Collections
