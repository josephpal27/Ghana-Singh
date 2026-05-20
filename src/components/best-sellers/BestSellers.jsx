import './BestSellers.css';

const BestSellers = () => {

    const sellersData = [
        {
            id: 1,
            img: "/images/sellers/1.avif",
            title: "Emerald Set",
            desc: "Statement heirlooms for bold after-dark moments.",
        },
        {
            id: 2,
            img: "/images/sellers/2.avif",
            title: "Pink and Green Polki Set",
            desc: "Playful heirlooms crafted for colour and individuality.",
        },
        {
            id: 3,
            img: "/images/sellers/3.avif",
            title: "Pink Polki",
            desc: "Gold kissed heirlooms crafted for Haldi moments.",
        },
    ]

    return (
        <>
            <div className="best-sellers">
                <h4 data-aos="fade-up">BESTSELLER BRIDAL HEIRLOOMS</h4>
                <p data-aos="fade">Discover the most loved creations by Ghanasingh Be True, timeless bridal heirlooms crafted with intricate artistry, regal gemstones, and bridal elegance designed to leave a lasting impression.</p>
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
