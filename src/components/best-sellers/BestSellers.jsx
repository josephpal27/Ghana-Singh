import './BestSellers.css';

const BestSellers = () => {

    const sellersData = [
        {
            id: 1,
            img: "/images/sellers/1.avif",
            title: "Pink Polki",
            desc: "Designed to radiate grace and femininity, this heirloom-worthy Polki set is a timeless expression of bridal charm and elegance.",
        },
        {
            id: 2,
            img: "/images/sellers/2.avif",
            title: "Pink and Green Polki set",
            desc: "Bold yet graceful, this statement Polki set combines rich green hues and delicate pink accents for celebrations filled with grandeur and elegance.",
        },
        {
            id: 3,
            img: "/images/sellers/3.avif",
            title: "Emerald set",
            desc: "A regal emerald masterpiece designed to embody timeless sophistication, heritage artistry, and bridal luxury for unforgettable occasions.",
        },
    ]

    return (
        <>
            <div className="best-sellers">
                <h4 data-aos="fade-up">TIMELESS JEWELS</h4>
                <p data-aos="fade">Discover the most loved creations by Ghanasingh Be True, timeless heirlooms crafted with intricate artistry, regal gemstones, and bridal elegance designed to leave a lasting impression.</p>
                <div className="sellers-card-row">
                    {
                        sellersData.map((item, index) => {
                            return (
                                <div className="seller-card" key={index} data-aos="fade">
                                    <div className="card-image">
                                        <img src={item.img} alt={`Seller ${item.id}`} loading="lazy" />
                                    </div>
                                    <div className="card-desc">
                                        <span>{item.title}</span>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default BestSellers
