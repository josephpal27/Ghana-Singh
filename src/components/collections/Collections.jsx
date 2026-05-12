import './Collections.css';

const Collections = () => {
  return (
    <>
      <section className="collections">
        <div className="collections-head">
            <h3 data-aos="fade-up">FEATURED COLLECTIONS</h3>
            <p data-aos="fade">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore eiusmod et dolore magna aliqua. Quis ipsum incididunt suspendisse ultrices consectetur gravida.</p>
        </div>
        <div className="collection-grid">
            {/* Left */}
            <div className="collection-column">
                <div className="box text-box">
                    <span className="left-quote">“</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur.</p>
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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur.</p>
                    <span className="right-quote">”</span>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Collections
