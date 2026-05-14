import './Collections.css';

const Collections = () => {
  return (
    <>
      <section className="collections">
        <div className="collections-head">
            <h3 data-aos="fade-up">A COLLECTION ROOTED IN HERITAGE</h3>
            <p data-aos="fade">A luxurious curation of heirloom-worthy bridal jewels rooted in timeless tradition, featuring intricate Polki sets, regal emerald necklaces, vintage-inspired masterpieces, radiant sapphires, and handcrafted bridal treasures created for the modern bride. Blending heritage craftsmanship with contemporary elegance, each piece is designed to celebrate life’s most cherished moments and become a legacy treasured for generations to come.</p>
        </div>
        <div className="collection-grid">
            {/* Left */}
            <div className="collection-column">
                <div className="box text-box">
                    <span className="left-quote">“</span>
                    <p>Intricate bridal jewels inspired by timeless tradition, crafted to elevate every celebration with grace, grandeur, and modern elegance.</p>
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
                    <p>A luxurious bridal edit featuring statement heirlooms, regal craftsmanship, and timeless jewellery for every celebration leading to “I do.”</p>
                    <span className="right-quote">”</span>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Collections
